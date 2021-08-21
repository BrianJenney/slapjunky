import React from 'react';
import { useHistory } from 'react-router-dom';

const Search = ({ setQuery, searchResults }) => {
    const history = useHistory();

    const genres = [
        {
            path: 'rap',
            name: 'rap',
        },
        {
            path: 'trap',
            name: 'trap',
        },
        {
            path: 'randb',
            name: 'R & B',
        },
    ];

    return (
        <div className="bg-gray-900 h-screen relative">
            <div className="w-8/12 relative text-gray-600 focus-within:text-gray-400 py-5 mx-auto">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                        type="submit"
                        className="p-1 focus:outline-none focus:shadow-outline"
                    >
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
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
            <div className="w-9/12 xs:w-full bg-gray-900 center mt-20 mx-auto">
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
                            <p
                                className="text-gray-500"
                                onClick={() =>
                                    history.push(`/artist/${res.userId}`)
                                }
                            >
                                {res.artistName}
                            </p>
                            <p className="text-white">{res.title}</p>
                        </div>
                    );
                })}
            </div>
            {!searchResults.length && (
                <div>
                    <p className="text-2xl uppercase text-white text-left text-center">
                        Explore by Genre
                    </p>

                    <div class="flex flex-col m-auto p-auto">
                        <div class="flex overflow-x-scroll pb-10 hide-scroll-bar no-scrollbar mt-10">
                            <div class="flex flex-nowrap m-auto">
                                {genres.map(({ name, path }) => (
                                    <div
                                        key={path}
                                        onClick={() =>
                                            history.push(`/music?genre=${path}`)
                                        }
                                        className="inline-block px-3 cursor-pointer"
                                    >
                                        <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                                            <h1 className="text-green-700 capitalize text-4xl">
                                                {name}
                                            </h1>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;
