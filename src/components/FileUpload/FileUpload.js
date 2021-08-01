import React from 'react';

const FileUpload = ({
    removeImg,
    imgPreview,
    handleFileChange,
    showPreview = true,
    uploadText = 'Upload an Image',
}) =>
    imgPreview ? (
        <div class="w-full items-center justify-center bg-grey-lighter py-3">
            <button
                onClick={() => removeImg()}
                className="bg-green-400 text-white py-2 px-4 rounded inline-flex items-center"
            >
                Remove
                <svg
                    onClick={() => removeImg()}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </button>
            {showPreview && (
                <img
                    className="mt-3"
                    alt="artist avatar"
                    width="100px"
                    height="100px"
                    src={imgPreview}
                />
            )}
        </div>
    ) : (
        <div class="flex w-full items-center justify-center bg-grey-lighter py-3">
            <label class="w-full flex flex-col items-center px-4 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer">
                <svg
                    class="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span>{uploadText}</span>
                <input
                    onChange={(e) => handleFileChange(e.target.files[0])}
                    type="file"
                    className="hidden"
                />
            </label>
        </div>
    );

export default FileUpload;
