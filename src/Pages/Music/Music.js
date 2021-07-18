import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const Music = ({ songs = [] }) => (
    <div className="h-screen bg-gray-900 overflow-hidden flex flex-col items-center content-center ">
        <div className="mt-32 divide-y-2 divide-purple-300 divide-solid">
            {songs.map((song) => (
                <div className="pb-4 py-4">
                    <p className="text-white uppercase">{song.artistName}</p>
                    <div className="flex items-center space-x-4">
                        <img
                            height="100px"
                            width="100px"
                            alt="song art"
                            src={song?.songCoverUrl}
                        />
                        <p className="text-white uppercase">{song.title}</p>
                        <ReactAudioPlayer
                            autoPlay={false}
                            controls
                            src={song.url}
                            preload={false}
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Music;
