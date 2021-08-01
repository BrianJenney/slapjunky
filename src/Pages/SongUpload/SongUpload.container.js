import React, { useState, useCallback } from 'react';
import { apiClient } from '../../utils/apiClient';
import SongUpload from './SongUpload';
import { uploadFile } from 'react-s3';
import { useHistory } from 'react-router-dom';

const S3_BUCKET = 'slapbucket';
const REGION = 'us-east-1';
const ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS;
const SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_SECRET;

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
};

const SongUploadContainer = () => {
    const [form, updateForm] = useState(new FormData());
    const [artPreview, setArtPreview] = useState(null);
    const [mp3FileName, setMp3FileName] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const history = useHistory();

    const handleFileUpload = useCallback(
        async (file, isMusic) => {
            return uploadFile(file, config)
                .then((data) => {
                    if (isMusic) {
                        form.set('songUrl', data.location);
                    } else {
                        form.set('artUrl', data.location);
                    }
                    updateForm(form);
                })
                .catch((err) => {
                    throw err;
                });
        },
        [form]
    );

    const resetForm = () => {
        updateForm(new FormData());
        setMp3FileName(null);
        setArtPreview(null);
    };

    const uploadSong = useCallback(async () => {
        setIsLoading(true);
        form.set('artistId', 123); // TODO: use real id
        form.set('artistName', 'Marcus Made Beats');

        //cannot handle this on backend currently with lambda and 10mb hard limit on body payload
        await handleFileUpload(form.get('songArt'), false);
        await handleFileUpload(form.get('song'), true);

        //remove from form
        form.set('songArt', undefined);
        form.set('song', undefined);
        try {
            await apiClient('songs/upload', form);
            setIsLoading(false);
            setSuccessMessage('Success');
            resetForm();
        } catch (e) {
            throw e;
        } finally {
            setIsLoading(false);
        }
    }, [form, handleFileUpload]);

    const updateFormField = useCallback(
        (fieldName, val) => {
            if (fieldName === 'songArt') {
                setArtPreview(val ? URL.createObjectURL(val) : null);
            }

            if (fieldName === 'song') {
                setMp3FileName(val?.name ?? null);
            }
            form.set(fieldName, val);
            updateForm(form);
        },
        [form]
    );

    return (
        <div className="h-screen bg-gray-900 items-center justify-center ">
            {successMessage ? (
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-white font-bold md:text-2xl text-xl mt-20">
                        Thanks for uploading your music!
                    </h1>
                    <div className="flex items-center justify-center md:gap-8 gap-4 pt-5 pb-5">
                        <button
                            onClick={() => {
                                resetForm();
                                setSuccessMessage(null);
                            }}
                            className="w-auto bg-green-500 rounded-lg shadow-xl font-medium text-white px-4 py-2"
                        >
                            Upload More Songs
                        </button>
                        <button
                            onClick={() => {
                                history.push('/music');
                            }}
                            className="w-auto bg-green-500 rounded-lg shadow-xl font-medium text-white px-4 py-2"
                        >
                            Go To Music Page
                        </button>
                    </div>
                </div>
            ) : (
                <SongUpload
                    artPreview={artPreview}
                    mp3FileName={mp3FileName}
                    formData={form}
                    handleFileUpload={handleFileUpload}
                    updateFormField={updateFormField}
                    uploadSong={uploadSong}
                    isLoading={isLoading}
                />
            )}
        </div>
    );
};

export default SongUploadContainer;
