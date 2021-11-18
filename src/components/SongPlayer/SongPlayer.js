import React, { useContext, useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { formatUrl } from '../../utils/helpers';
import { SongContext } from '../../contexts/SongContext';
import { UserContext } from '../../contexts/UserContext';
import { apiClient } from '../../utils/apiClient';

const SongPlayer = () => {
    const [playing, setIsPlaying] = useState(false);
    const { song, allSongs, setCurrentSong, likeSong } =
        useContext(SongContext);
    const { user } = useContext(UserContext);
    const isLiked = (song?.likes ?? []).includes(user?._id);

    const setNextSong = (val = 1) => {
        const trackIdx =
            allSongs.findIndex((track) => track._id === song._id) || 0;
        setCurrentSong(allSongs[trackIdx + val]);
    };

    const addOrRemoveLike = ({ userId, songId, removeLike }) => {
        const callback = (songData) => {
            const newSong = songData?.data?.song;

            setCurrentSong({ ...song, ...newSong });
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
                    text: `Check out ${song?.title} by ${song?.artistName} on F1rst`,
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
        <>
            <div className="w-full mx-auto bg-gray-900 rounded-lg px-8 sm:px-2">
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
                        <p className="text-white uppercase">
                            {song.artistName}
                        </p>
                        <p className="text-white">{song.title}</p>
                    </div>
                    <div className="mx-auto flex sm:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-10 cursor-pointer"
                            onClick={() => setNextSong(-1)}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#ffff"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                            />
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 ml-10 cursor-pointer"
                            onClick={() => setNextSong(1)}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#ffff"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 5l7 7-7 7M5 5l7 7-7 7"
                            />
                        </svg>
                    </div>
                    <ReactAudioPlayer
                        autoPlay
                        onPlay={() => setIsPlaying(true)}
                        onEnded={() => setNextSong()}
                        controls
                        src={formatUrl(song.url)}
                        preload="auto"
                    />
                </div>

                <div className="flex md:visible py-2 justify-between">
                    <div className="mx-auto flex invisible sm:visible">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-10 cursor-pointer"
                            onClick={() => setNextSong(-1)}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#ffff"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                            />
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 ml-10 cursor-pointer"
                            onClick={() => setNextSong(1)}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#ffff"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 5l7 7-7 7M5 5l7 7-7 7"
                            />
                        </svg>
                    </div>

                    {navigator.share && (
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
                    )}

                    <svg
                        onClick={() =>
                            addOrRemoveLike({
                                userId: user?._id,
                                songId: song._id,
                                removeLike: isLiked,
                            })
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill={isLiked ? 'red' : 'none'}
                        viewBox="0 0 24 24"
                        stroke="#ffff"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default SongPlayer;
