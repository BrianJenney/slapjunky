import React from 'react';

const SongUpload = ({
    uploadSong,
    updateFormField,
    artPreview,
    mp3FileName,
    isUploading,
}) => {
    return (
        <div class="flex bg-green-200 items-center justify-center">
            <div class="mt-16 mb-16 grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
                <div class="flex justify-center py-4">
                    <div class="flex bg-purple-200 rounded-full md:p-4 p-2 border-2 border-purple-300">
                        <svg
                            class="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                            ></path>
                        </svg>
                    </div>
                </div>

                <div class="flex justify-center">
                    <div class="flex">
                        <h1 class="text-gray-600 font-bold md:text-2xl text-xl">
                            Upload Your Music
                        </h1>
                    </div>
                </div>

                <div class="grid grid-cols-1 mt-5 mx-7">
                    <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                        Song Title
                    </label>
                    <input
                        class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        placeholder="My Song"
                        onChange={(e) =>
                            updateFormField('songTitle', e.target.value)
                        }
                    />
                </div>

                <div class="grid grid-cols-1 mt-5 mx-7">
                    <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                        Genre
                    </label>
                    <select
                        onChange={(e) =>
                            updateFormField('genre', e.target.value)
                        }
                        class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    >
                        <option value="rap">Rap</option>
                        <option value="trap">Trap</option>
                        <option value="randb">R&B</option>
                    </select>
                </div>

                <div class="grid grid-cols-1 mt-5 mx-7">
                    <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">
                        Upload Cover Art
                    </label>
                    <div class="flex items-center justify-center w-full">
                        <label class="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group">
                            <div class="flex flex-col items-center justify-center pt-7">
                                <svg
                                    class="w-10 h-10 text-purple-400 group-hover:text-purple-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    ></path>
                                </svg>
                                <p class="lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider">
                                    Select a photo
                                </p>
                            </div>
                            <input
                                type="file"
                                class="hidden"
                                onChange={(e) =>
                                    updateFormField(
                                        'songArt',
                                        e.target.files[0]
                                    )
                                }
                            />
                        </label>
                    </div>
                </div>

                {artPreview && (
                    <section class="hero container max-w-screen-lg mx-auto pb-10">
                        <img
                            alt="song art"
                            height="150px"
                            width="150px"
                            src={artPreview}
                        />
                    </section>
                )}

                <div class="grid grid-cols-1 mt-5 mx-7">
                    <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">
                        Upload MP3
                    </label>
                    <div class="flex items-center justify-center w-full">
                        <label class="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group">
                            <div class="flex flex-col items-center justify-center pt-7">
                                <svg
                                    class="w-10 h-10 text-purple-400 group-hover:text-purple-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    ></path>
                                </svg>
                                <p class="lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider">
                                    Select an MP3
                                </p>
                            </div>
                            <input
                                type="file"
                                class="hidden"
                                onChange={(e) =>
                                    updateFormField('song', e.target.files[0])
                                }
                            />
                        </label>
                    </div>
                    {mp3FileName && (
                        <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">
                            {mp3FileName}
                        </label>
                    )}
                </div>

                <div class="flex items-center justify-center md:gap-8 gap-4 pt-5 pb-5">
                    <button
                        disabled={isUploading}
                        onClick={() => uploadSong()}
                        class="w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
                    >
                        {isUploading && (
                            <svg
                                class="animate-spin h-5 w-5 mr-3"
                                viewBox="0 0 24 24"
                            ></svg>
                        )}
                        {isUploading ? 'Processing' : 'Create'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SongUpload;
