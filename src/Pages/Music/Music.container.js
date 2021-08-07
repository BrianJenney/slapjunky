import React, { useEffect, useState } from 'react';
import { apiClient } from '../../utils/apiClient';
import { useLocation } from 'react-router-dom';
import Music from './Music';

const MusicContainer = ({ user }) => {
    const [songs, setSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const searchParams = new URLSearchParams(location?.search);

    const searchByMap = {
        genre: 'genre',
        artistId: 'artistId',
        region: 'region',
    };

    const searchBy = Object.keys(searchByMap).reduce((acc, val) => {
        const queryStrVal = searchParams.get(val);
        if (queryStrVal) {
            acc['method'] = val;
            acc['params'] = { [val]: queryStrVal };
        }
        return acc;
    }, {});

    useEffect(() => {
        const fetchSongs = async ({ method, params = {} }) => {
            setIsLoading(true);
            try {
                const { data } = await apiClient('songs/music', {
                    method,
                    ...params,
                });

                setSongs(data?.data);
            } catch (ex) {
                throw ex;
            } finally {
                setIsLoading(false);
            }
        };
        console.log(searchBy);
        fetchSongs(searchBy);
    }, [location?.search]);

    const likeSong = ({ userId, songId, removeLike }) => {
        apiClient('songs/like', {
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
