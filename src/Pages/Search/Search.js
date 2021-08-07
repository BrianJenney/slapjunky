import React from 'react';
import { useHistory } from 'react-router-dom';

const Search = ({ setQuery, searchResults }) => {
    const history = useHistory();
    const boxClassName =
        'box-content h-32 w-32 p-4 flex justify-center items-center cursor-pointer rounded-lg bg-gray-100';
    return (
        <div className="bg-gray-900 overflow-hidden flex flex-col items-center content-center h-screen relative">
            <div className="w-8/12 relative text-gray-600 focus-within:text-gray-400 mt-5">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                        type="submit"
                        className="p-1 focus:outline-none focus:shadow-outline"
                    >
                        <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                </span>
                <input
                    onChange={(e) => setQuery(e.target.value)}
                    type="search"
                    name="q"
                    className="w-full py-2 text-sm text-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                    placeholder="Search by artist or song name"
                    autocomplete="off"
                />
            </div>
            <div className="w-8/12 bg-gray-900 py-100 mt-20">
                {searchResults.map((res) => {
                    return (
                        <div className="flex flex-row space-x-4 justify-between items-center hover:bg-gray-700 cursor-pointer py-2 px-2">
                            <img
                                alt="search result"
                                width="50px"
                                height="50px"
                                style={{
                                    objectFit: 'cover',
                                    width: '50px',
                                    height: '50px',
                                }}
                                src={res.songCoverUrl}
                            />
                            <p className="text-gray-500">{res.artistName}</p>
                            <p className="text-white">{res.title}</p>
                        </div>
                    );
                })}
            </div>
            {!searchResults.length && (
                <div>
                    <p className="text-2xl uppercase text-white text-center">
                        Explore by Genre
                    </p>
                    <div className="flex flex-row space-x-12 mt-10">
                        <div
                            onClick={() => history.push('/music?genre=rap')}
                            className={boxClassName}
                        >
                            <p className="text-green-700">Rap</p>
                        </div>
                        <div
                            onClick={() => history.push('/music?genre=trap')}
                            className={boxClassName}
                        >
                            <p className="text-green-700">Trap</p>
                        </div>
                        <div
                            onClick={() => history.push('/music?genre=randb')}
                            className={boxClassName}
                        >
                            <p className="text-green-700">R & B</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;
