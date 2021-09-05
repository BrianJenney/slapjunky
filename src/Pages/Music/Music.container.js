import React, { useEffect, useState } from 'react';
import { apiClient } from '../../utils/apiClient';
import { useLocation } from 'react-router-dom';
import Music from './Music';
import Artist from '../Artist/Artist';
import { likeSong } from '../../utils/helpers';
import isEmpty from 'lodash/isEmpty';

const MusicContainer = ({ user }) => {
    const [songs, setSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const searchParams = new URLSearchParams(location?.search);

    const isSongPage = location.pathname.includes('song');

    const searchByMap = {
        genre: 'genre',
        artistId: 'artistId',
        region: 'region',
        cityState: 'cityState',
        songId: 'songId',
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
        if (!isEmpty(searchBy)) {
            fetchSongs(searchBy);
        }
    }, [location?.search]);

    const addOrRemoveLike = ({ userId, songId, removeLike }) => {
        const callback = (songData) => {
            const newSong = songData?.data?.song;

            setSongs(
                songs.map((song) => (song._id === newSong._id ? newSong : song))
            );
        };
        likeSong({
            userId,
            songId,
            removeLike,
            callback,
        });
    };

    return isSongPage ? (
        <Artist
            songs={songs}
            artist={songs?.[0]?.artist?.[0]}
            user={user}
            likeSong={addOrRemoveLike}
        />
    ) : (
        <Music
            user={user}
            likeSong={addOrRemoveLike}
            isLoading={isLoading}
            songs={songs}
        />
    );
};

export default MusicContainer;
