import React from 'react';
import { Song } from './components';

const Music = ({ songs = [], isLoading, likeSong, user }) => (
    <div className="bg-gray-900 overflow-hidden flex flex-col items-center content-center h-screen">
        {isLoading && <p className="text-white">LOADING</p>}
        <div className="mt-16 mb-16 w-9/12 overflow-scroll divide-y-2 divide-purple-300 divide-solid no-scrollbar">
            {songs.map((song, i) => (
                <div key={`${i}_${song.url}`} className="pb-4 py-4">
                    <Song user={user} likeSong={likeSong} song={song} />
                </div>
            ))}
        </div>
    </div>
);

export default Music;
