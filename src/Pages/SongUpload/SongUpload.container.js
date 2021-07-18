import React, { useState, useCallback } from 'react';
import { apiClient } from '../../utils/apiClient';
import SongUpload from './SongUpload';

const SongUploadContainer = () => {
    const [form, updateForm] = useState(new FormData());
    const [artPreview, setArtPreview] = useState(null);
    const [mp3FileName, setMp3FileName] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    const uploadSong = useCallback(async () => {
        setIsUploading(true);
        form.set('artistId', 123); // TODO: use real id
        form.set('artistName', 'Marcus Made Beats');
        try {
            await apiClient('songs/upload', form);
        } catch (e) {
            throw e;
        } finally {
            setIsUploading(false);
        }
    }, [form]);

    const updateFormField = useCallback(
        (fieldName, val) => {
            if (fieldName === 'songArt') {
                setArtPreview(URL.createObjectURL(val));
            }

            if (fieldName === 'song') {
                setMp3FileName(val.name);
            }
            form.set(fieldName, val);
            updateForm(form);
        },
        [form]
    );

    return (
        <SongUpload
            artPreview={artPreview}
            mp3FileName={mp3FileName}
            formData={form}
            updateFormField={updateFormField}
            uploadSong={uploadSong}
            isUploading={isUploading}
        />
    );
};

export default SongUploadContainer;
