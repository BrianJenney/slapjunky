import React, { useContext, useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { formatUrl } from '../../utils/helpers';
import { SongContext } from '../../contexts/SongContext';
import { UserContext } from '../../contexts/UserContext';
import { apiClient } from '../../utils/apiClient';

const SongPlayer = () => {
    const [playing, setIsPlaying] = useState(false);
    const { song, setCurrentSong, likeSong } = useContext(SongContext);
    const { user } = useContext(UserContext);
    const isLiked = (song?.likes ?? []).includes(user?._id);

    const addOrRemoveLike = ({ userId, songId, removeLike }) => {
        const callback = (songData) => {
            const newSong = songData?.data?.song;

            setCurrentSong({ ...newSong });
        };
        likeSong({ userId, songId, removeLike, callback });
    };

    useEffect(() => {
        let timeoutId;
        if (!song) return;
        const addToPlays = () => {
            apiClient('songs/plays', {
                userId: user._id,
                songId: song._id,
            });
        };

        if (playing) {
            timeoutId = setTimeout(addToPlays, 30000);
        }
        return () => {
            clearTimeout(timeoutId);
        };
    }, [playing, song, song?._id, user?._id]);

    const handleSharing = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Slap Junky Share',
                    text: `Check out ${song?.title} by ${song?.artistName} on 3AM`,
                    url: window.location,
                });
            } catch (error) {
                console.log(
                    `Oops! I couldn't share to the world because: ${error}`
                );
            }
        } else {
            // fallback code
            console.log(
                'Web share is currently not supported on this browser. Please provide a callback'
            );
        }
    };

    if (!song) return <></>;

    return (
        <div className="w-full mx-auto bg-gray-800 rounded-lg px-8 sm:px-2">
            <div className="flex justify-end">
                <p
                    onClick={() => setCurrentSong(null)}
                    className="text-white uppercase cursor-pointer"
                >
                    X
                </p>
            </div>
            <div className="flex items-center space-x-4 justify-between">
                <img
                    style={{
                        width: '50px',
                        height: '50px',
                        objectFit: 'cover',
                    }}
                    alt="song art"
                    src={formatUrl(song?.songCoverUrl)}
                />
                <div>
                    <p className="text-white uppercase">{song.artistName}</p>
                    <p className="text-white">{song.title}</p>
                </div>
                <ReactAudioPlayer
                    autoPlay
                    onPlay={() => setIsPlaying(true)}
                    controls
                    src={formatUrl(song.url)}
                    preload="auto"
                />
            </div>

            <div className="flex justify-end md:visible py-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer mr-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#ffff"
                    onClick={() => handleSharing()}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                </svg>

                <svg
                    onClick={() =>
                        addOrRemoveLike({
                            userId: user?._id,
                            songId: song._id,
                            removeLike: isLiked,
                        })
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer"
                    fill={isLiked ? 'lightgreen' : 'none'}
                    viewBox="0 0 24 24"
                    stroke="#ffff"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                </svg>
            </div>
        </div>
    );
};

export default SongPlayer;
