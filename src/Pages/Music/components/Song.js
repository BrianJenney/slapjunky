import React, { useContext } from 'react';
import { formatUrl } from '../../../utils/helpers';
import { SongContext } from '../../../contexts/SongContext';
import { useHistory } from 'react-router';

const Song = ({ likeSong, song, user, artist }) => {
    console.log({ song });
    const { setCurrentSong } = useContext(SongContext);
    const history = useHistory();
    const isLiked = song.likes.includes(user?._id);

    return (
        <div className="flex justify-between items-center">
            <div
                onClick={() => setCurrentSong(song)}
                className="flex items-center space-x-4 justify-between cursor-pointer"
            >
                <img
                    style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                    }}
                    height="100px"
                    width="100px"
                    alt="song art"
                    src={formatUrl(song?.songCoverUrl)}
                />
            </div>
            <div>
                <p
                    onClick={() => history.push(`/artist/${artist?._id}`)}
                    className="text-white uppercase cursor-pointer"
                >
                    {song.artistName}
                </p>
                <p
                    className="text-white cursor-pointer"
                    onClick={() => history.push(`/song/?songId=${song._id}`)}
                >
                    {song.title}
                </p>
            </div>
            <div className="flex justify-end">
                <svg
                    onClick={() =>
                        likeSong({
                            userId: user._id,
                            songId: song._id,
                            removeLike: isLiked,
                        })
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer"
                    fill={isLiked ? 'lightgreen' : 'none'}
                    viewBox="0 0 24 24"
                    stroke="#ffff"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Song;
