import React, { useEffect, useState } from 'react';
import { apiClient } from '../../utils/apiClient';
import Music from './Music';

const MusicContainer = ({ user }) => {
    const [songs, setSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const likeSong = ({ userId, songId, removeLike }) => {
        apiClient('/songs/like', {
            userId,
            songId,
            removeLike,
        })
            .then((songData) => {
                const newSong = songData?.data?.song;

                setSongs(
                    songs.map((song) =>
                        song._id === newSong._id ? newSong : song
                    )
                );
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        const fetchSongs = async () => {
            setIsLoading(true);
            try {
                const { data } = await apiClient('songs/music', {
                    method: 'artist',
                    userId: user?._id,
                });

                setSongs(data?.data);
            } catch (ex) {
                throw ex;
            } finally {
                setIsLoading(false);
            }
        };
        fetchSongs();
    }, [user?._id]);

    return (
        <Music
            user={user}
            likeSong={likeSong}
            isLoading={isLoading}
            songs={songs}
        />
    );
};

export default MusicContainer;
