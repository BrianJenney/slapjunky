import React from 'react';
import { FileUpload } from '../../components/FileUpload';

const SongUpload = ({
    uploadSong,
    updateFormField,
    artPreview,
    mp3FileName,
    isLoading,
}) => {
    return (
        <div className="bg-grey-light min-h-screen py-6">
            <div className="container w-7/12 mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="text-gray-700 bg-white px-6 py-8 rounded shadow-md text-black w-full mb-10 mt-5">
                    <h1 className="mb-2 text-3xl text-center">Submit Music</h1>

                    <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0 py-2">
                        <div className="w-full px-2">
                            <input
                                onChange={(e) =>
                                    updateFormField('songTitle', e.target.value)
                                }
                                className="w-full h-10 px-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline"
                                type="text"
                                id="songTitle"
                                placeholder="Song Title"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0 py-2">
                        <div className="w-full px-2">
                            <select
                                className="w-full h-10 px-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline"
                                onChange={(e) =>
                                    updateFormField('genre', e.target.value)
                                }
                            >
                                <option value="">Choose a Genre</option>
                                <option value="rap">Rap</option>
                                <option value="trap">Trap</option>
                                <option value="randb">R&B</option>
                            </select>
                        </div>
                    </div>

                    <FileUpload
                        imgPreview={artPreview}
                        removeImg={() =>
                            updateFormField('songArt', null, false)
                        }
                        handleFileChange={(file) =>
                            updateFormField('songArt', file, false)
                        }
                        uploadText="Upload Cover Art"
                    />

                    <FileUpload
                        imgPreview={mp3FileName}
                        removeImg={() => updateFormField('song', {}, true)}
                        handleFileChange={(file) =>
                            updateFormField('song', file, true)
                        }
                        uploadText="Upload MP3"
                        showPreview={false}
                    />

                    {mp3FileName && <p> {mp3FileName}</p>}

                    <div className="py-4">
                        <button
                            disabled={isLoading}
                            onClick={() => uploadSong()}
                            type="submit"
                            className="bg-green-400 w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                        >
                            {isLoading ? 'Loading' : 'Add Song'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SongUpload;
