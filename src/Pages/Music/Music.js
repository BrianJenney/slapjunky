import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const formatUrl = (url) => {
    const segements = url.split('/');
    segements[segements.length - 1] = encodeURIComponent(
        segements[segements.length - 1]
    );
    return segements.join('/');
};

const Music = ({ songs = [] }) => (
    <div className="h-screen bg-gray-900 overflow-hidden flex flex-col items-center content-center ">
        <div className="mt-32 divide-y-2 divide-purple-300 divide-solid">
            {songs.map((song, i) => (
                <div key={`${i}_${song.url}`} className="pb-4 py-4">
                    <p className="text-white uppercase">{song.artistName}</p>
                    <div className="flex items-center space-x-4">
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
                </div>
            ))}
        </div>
    </div>
);

export default Music;
