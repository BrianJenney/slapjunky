import React from 'react';

const SongUpload = ({
    uploadSong,
    updateFormField,
    artPreview,
    mp3FileName,
    isLoading,
}) => {
    return (
        <div className="flex bg-gray-900 items-center justify-center">
            <div className="mt-16 mb-16 grid bg-gray-700 rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
                <div className="flex justify-center py-4">
                    <div className="flex">
                        <h1 className="text-white font-bold md:text-2xl text-xl">
                            Upload A Song
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-white text-light font-semibold">
                        Song Title
                    </label>
                    <input
                        className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        placeholder="My Song"
                        onChange={(e) =>
                            updateFormField('songTitle', e.target.value)
                        }
                    />
                </div>

                <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-white text-light font-semibold">
                        Genre
                    </label>
                    <select
                        onChange={(e) =>
                            updateFormField('genre', e.target.value)
                        }
                        className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    >
                        <option value="">Choose a Genre</option>
                        <option value="rap">Rap</option>
                        <option value="trap">Trap</option>
                        <option value="randb">R&B</option>
                    </select>
                </div>
                {!artPreview && (
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-white text-light font-semibold mb-1">
                            Upload Cover Art
                        </label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group">
                                <div className="flex flex-col items-center justify-center pt-7">
                                    <svg
                                        className="w-10 h-10 text-purple-400 group-hover:text-purple-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                    <p className="lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider">
                                        Select a photo
                                    </p>
                                </div>
                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={(e) =>
                                        updateFormField(
                                            'songArt',
                                            e.target.files[0],
                                            false
                                        )
                                    }
                                />
                            </label>
                        </div>
                    </div>
                )}

                {artPreview && (
                    <section className="hero container max-w-screen-lg mx-auto pb-10 mt-8">
                        <span
                            onClick={() =>
                                updateFormField('songArt', null, false)
                            }
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mx-auto"
                                viewBox="0 0 20 20"
                                fill="#fff"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <img
                            className="mx-auto"
                            alt="song art"
                            height="150px"
                            width="150px"
                            src={artPreview}
                        />
                    </section>
                )}

                {!mp3FileName && (
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-white text-light font-semibold mb-1">
                            Upload MP3
                        </label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group">
                                <div className="flex flex-col items-center justify-center pt-7">
                                    <svg
                                        className="w-10 h-10 text-purple-400 group-hover:text-purple-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                    <p className="lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider">
                                        Select an MP3
                                    </p>
                                </div>
                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={(e) =>
                                        updateFormField(
                                            'song',
                                            e.target.files[0],
                                            true
                                        )
                                    }
                                />
                            </label>
                        </div>
                    </div>
                )}
                {mp3FileName && (
                    <label className="uppercase md:text-sm text-xs text-white text-light font-semibold mb-1 mx-auto">
                        <span onClick={() => updateFormField('song', {}, true)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mx-auto"
                                viewBox="0 0 20 20"
                                fill="#fff"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        {mp3FileName}
                    </label>
                )}

                {isLoading ? (
                    <label className="uppercase md:text-sm text-xs text-white text-light font-semibold mb-1 mx-auto">
                        <svg
                            class="animate-spin h-5 w-5 mr-3"
                            viewBox="0 0 24 24"
                        ></svg>{' '}
                        LOADING...
                    </label>
                ) : (
                    <div className="flex items-center justify-center md:gap-8 gap-4 pt-5 pb-5">
                        <button
                            onClick={() => uploadSong()}
                            className="w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
                        >
                            Create
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SongUpload;
