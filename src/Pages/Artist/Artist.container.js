import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Artist from './Artist';
import { apiClient } from '../../utils/apiClient';

const ArtistContainer = () => {
    const { id } = useParams();
    const [artist, setArtist] = useState(null);
    const [artistSongs, setArtistSongs] = useState([]);

    useEffect(() => {
        const fetchArtistData = async () => {
            try {
                const res = await apiClient('artist/id', {
                    artistId: id,
                });

                console.log(res);

                setArtist(res?.data?.data?.[0]);
                setArtistSongs(res?.data?.data?.[0].songs ?? []);
            } catch (e) {
                console.error(e);
            }
        };

        id && fetchArtistData();
    }, [id]);

    return <Artist artist={artist} songs={artistSongs} />;
};

export default ArtistContainer;
