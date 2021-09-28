import React, { useEffect, useState, useRef } from 'react';
import { apiClient } from '../../utils/apiClient';
import { useLocation } from 'react-router-dom';
import Music from './Music';
import Artist from '../Artist/Artist';
import { likeSong } from '../../utils/helpers';
import isEmpty from 'lodash/isEmpty';

const MusicContainer = ({ user }) => {
    const [comment, setComment] = useState('');
    const [songs, setSongs] = useState([]);
    const [songComments, setSongComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
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

    const fetchSongs = async ({ method, params = {} }) => {
        setIsLoading(true);
        try {
            const { data } = await apiClient('songs/music', {
                method,
                ...params,
                page,
            });

            const songData = data?.data;
            setSongs((prev) =>
                isSongPage ? [...songData] : [...prev, ...songData]
            );
            setSongComments(data?.comments);
        } catch (ex) {
            throw ex;
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!isEmpty(searchBy)) {
            fetchSongs(searchBy);
        }
    }, [location?.search, page]);

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

    const loadMore = () => {
        setPage((page) => page + 1);
    };

    const submitComment = (songId) => {
        const newComment = {
            userId: user?._id,
            userName: user?.userName || user?.firstName,
            songId,
            comment,
        };
        // this is async but we don't want to await the return as not to block
        try {
            apiClient('comment/addComment', newComment);

            setComment('');
            setSongComments((prev) =>
                prev.concat({ ...newComment, createdAt: new Date() })
            );
        } catch {
            // remove last comment if we fail
            setSongComments((prev) => prev.slice(-1));
        }
    };

    return (
        <div>
            {isSongPage ? (
                <Artist
                    comments={songComments}
                    setComment={setComment}
                    comment={comment}
                    submitComment={submitComment}
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
                    loadMore={loadMore}
                />
            )}
        </div>
    );
};

export default MusicContainer;
