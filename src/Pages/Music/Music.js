import React from 'react';
import { Song } from './components';

const Music = ({
    songs = [],
    isLoading,
    likeSong,
    user,
    loadMore,
    canLoadMore,
}) => {
    return (
        <div className="bg-black overflow-hidden flex flex-col items-center content-center h-screen relative">
            {isLoading && (
                <div className="flex justify-center items-center m-auto">
                    <div>
                        <div
                            style={{ borderTopColor: 'transparent' }}
                            className="w-16 h-16 border-4 border-blue-400 border-double rounded-full animate-spin"
                        ></div>
                    </div>
                    <p className="text-white text-2xl">LOADING SLAPS</p>
                </div>
            )}
            <div className="mt-16 mb-16 w-9/12 md:w-11/12 overflow-scroll divide-y-2 divide-purple-300 divide-solid no-scrollbar">
                {songs.map((song, i) => (
                    <div key={`${i}_${song.url}`} className="pb-4 py-4">
                        <Song
                            user={user}
                            artist={song?.artist[0]}
                            likeSong={likeSong}
                            song={song}
                        />
                    </div>
                ))}
            </div>
            {songs.length > 0 && canLoadMore && (
                <div className="mb-16">
                    <button
                        onClick={() => loadMore()}
                        className="bg-green-400 text-white py-2 px-4 rounded inline-flex items-center"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Music;
