import React, { useState, useCallback } from 'react';
import { apiClient } from '../../utils/apiClient';
import SongUpload from './SongUpload';

const SongUploadContainer = () => {
    const [form, updateForm] = useState(new FormData());
    const [artPreview, setArtPreview] = useState(null);
    const [mp3FileName, setMp3FileName] = useState(null);

    const uploadSong = useCallback(() => {
        form.set('artistId', 123);
        apiClient('songs/upload', form)
            .then((res) => console.log(res))
            .catch((e) => console.log(e));
    }, [form]);

    const updateFormField = useCallback(
        (fieldName, val) => {
            console.log(val);
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
        />
    );
};

export default SongUploadContainer;
