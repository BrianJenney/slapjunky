import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Artist from './Artist';
import { apiClient } from '../../utils/apiClient';
import { likeSong } from '../../utils/helpers';

const ArtistContainer = ({ user }) => {
    const { id } = useParams();
    const [artist, setArtist] = useState(null);
    const [artistSongs, setArtistSongs] = useState([]);

    const addOrRemoveLike = ({ userId, songId, removeLike }) => {
        const callback = (songData) => {
            const newSong = songData?.data?.song;

            setArtistSongs(
                artistSongs.map((song) =>
                    song._id === newSong._id ? newSong : song
                )
            );
        };
        likeSong({
            userId,
            songId,
            removeLike,
            callback,
        });
    };

    useEffect(() => {
        const fetchArtistData = async () => {
            try {
                const res = await apiClient('artist/id', {
                    artistId: id,
                });

                setArtist(res?.data?.data?.[0]);
                setArtistSongs(res?.data?.data?.[0].songs ?? []);
            } catch (e) {
                console.error(e);
            }
        };

        id && fetchArtistData();
    }, [id]);

    return (
        <Artist
            user={user}
            artist={artist}
            songs={artistSongs}
            likeSong={addOrRemoveLike}
        />
    );
};

export default ArtistContainer;
