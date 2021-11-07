import React, { useContext } from 'react';
import { formatUrl } from '../../../utils/helpers';
import { SongContext } from '../../../contexts/SongContext';
import { useHistory } from 'react-router';

const Song = ({ likeSong, song, user, artist }) => {
    const { setCurrentSong } = useContext(SongContext);
    const history = useHistory();
    const isLiked = song.likes.includes(user?._id);

    return (
        <div className="flex justify-between items-center">
            <div
                onClick={() => setCurrentSong(song)}
                className="flex items-center space-x-4 justify-between cursor-pointer"
            >
                <div className="relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-100px w-100px absolute"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#ffff"
                    >
                        <path
                            opacity={0.3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                            opacity={0.3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <img
                        style={{
                            maxWidth: '100px',
                            width: '100px',
                            height: '100px',
                            objectFit: 'cover',
                            borderRadius: '50%',
                        }}
                        height="100px"
                        width="100px"
                        alt="artist avatar"
                        src={formatUrl(artist?.avatar)}
                    />
                </div>
            </div>

            <div className="text-center">
                <p className="text-white">{artist.city}</p>
                <p className="text-white">{artist.state}</p>
            </div>
            <div className="text-center">
                <p
                    className="overflow-ellipsis text-white uppercase cursor-pointer md:text-sm"
                    onClick={() => history.push(`/artist/${artist?._id}`)}
                >
                    {song.artistName}
                </p>
                <p
                    className="text-white cursor-pointer"
                    onClick={() => history.push(`/song?songId=${song._id}`)}
                >
                    {song.title}
                </p>
            </div>
            <div className="flex justify-end relative">
                <svg
                    onClick={() =>
                        likeSong({
                            userId: user._id,
                            songId: song._id,
                            removeLike: isLiked,
                        })
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 md:absolute"
                    fill={isLiked ? 'red' : 'none'}
                    viewBox="0 0 24 24"
                    stroke="#ffff"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Song;
