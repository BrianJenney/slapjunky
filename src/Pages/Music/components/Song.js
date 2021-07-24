import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const formatUrl = (url) => {
    const segements = url.split('/');
    segements[segements.length - 1] = encodeURIComponent(
        segements[segements.length - 1]
    );
    return segements.join('/');
};

const Song = ({ likeSong, song }) => {
    const isLiked = song.likes.includes('123');

    return (
        <>
            <p className="text-white uppercase">{song.artistName}</p>
            <div className="flex items-center space-x-4 justify-between">
                <img
                    height="100px"
                    width="100px"
                    alt="song art"
                    src={formatUrl(song?.songCoverUrl)}
                />
                <p className="text-white uppercase">{song.title}</p>
                <ReactAudioPlayer
                    autoPlay={false}
                    controls
                    src={formatUrl(song.url)}
                    preload="auto"
                />
            </div>
            <div className="flex justify-end">
                <svg
                    onClick={() =>
                        likeSong({
                            userId: '123',
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
        </>
    );
};

export default Song;
