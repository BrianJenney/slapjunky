import React, { useEffect, useState } from 'react';
import { apiClient } from '../../utils/apiClient';
import Music from './Music';

const MusicContainer = () => {
    const [songs, setSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchSongs = async () => {
            setIsLoading(true);
            try {
                const { data } = await apiClient('/songs/music', {
                    method: 'artist',
                    userId: '123',
                });

                setSongs(data?.data);
            } catch (ex) {
                throw ex;
            } finally {
                setIsLoading(false);
            }
        };
        fetchSongs();
    }, []);
    return <Music isLoading={isLoading} songs={songs} />;
};

export default MusicContainer;
