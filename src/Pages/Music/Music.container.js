import React, { useEffect, useState } from 'react';
import { apiClient } from '../../utils/apiClient';
import Music from './Music';

const MusicContainer = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const { data } = await apiClient('/songs/music', {
                    method: 'artist',
                    userId: '123',
                });

                setSongs(data?.data);
            } catch (ex) {
                throw ex;
            }
        };
        fetchSongs();
    }, []);
    return <Music songs={songs} />;
};

export default MusicContainer;
