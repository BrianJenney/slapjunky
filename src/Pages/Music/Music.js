import React from 'react';
import { Song } from './components';

const Music = ({ songs = [], isLoading, likeSong }) => (
    <div className="h-screen bg-gray-900 overflow-hidden flex flex-col items-center content-center ">
        {isLoading && <p>LOADING</p>}
        <div className="mt-16 mb-16 overflow-scroll divide-y-2 divide-purple-300 divide-solid no-scrollbar">
            {songs.map((song, i) => (
                <div key={`${i}_${song.url}`} className="pb-4 py-4">
                    <Song likeSong={likeSong} song={song} />
                </div>
            ))}
        </div>
    </div>
);

export default Music;
