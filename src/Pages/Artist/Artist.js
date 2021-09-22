import React from 'react';
import { Song } from '../Music/components';
import { SocialIcon } from 'react-social-icons';

const Artist = ({
    artist = { socialMedia: [] },
    submitComment,
    comment,
    comments = [],
    songs = [],
    likeSong,
    setComment,
    user,
}) => {
    const ikQualityFormat = (url, quality, width) => {
        if (!url) return;
        const params = `tr:w-${width || 250},q:${quality || 80}`;
        const splitUrl = url.split('/');
        splitUrl.splice(4, 0, params);
        const newUrl = splitUrl.slice(2).join('/');

        return `https://${newUrl}`;
    };
    return (
        <div className="bg-gray-900 overflow-hidden h-screen w-9/12 m-auto overflow-scroll no-scrollbar">
            <div>
                <div className="flex flex-col items-center md:flex-row mt-5">
                    <img
                        style={{
                            width: '250px',
                            height: '250px',
                            objectFit: 'cover',
                            borderRadius: '50%',
                        }}
                        src={ikQualityFormat(artist?.avatar, 40, 250)}
                        alt={artist?.artistName}
                    />
                    <h1 className="text-white text-6xl ml-5">
                        {artist?.artistName}
                    </h1>
                </div>

                <section className="pt-8">
                    <p className="text-white">{artist?.bio}</p>
                </section>
            </div>
            <div className="mt-5">
                {artist?.socialMedia
                    .filter((link) => link.length)
                    .map((link) => (
                        <div>
                            <SocialIcon url={link} />
                            <a
                                rel="noreferrer"
                                target="_blank"
                                className="text-white ml-5"
                                aria-labelledby="instagram link"
                                href={link}
                            >
                                {link}
                            </a>
                        </div>
                    ))}
            </div>
            <div className="mt-16 mb-16 divide-y-2 divide-purple-300 divide-solid">
                {songs.map((song, i) => (
                    <div key={`${i}_${song.url}`} className="pb-4 py-4">
                        <Song
                            song={song}
                            artist={artist}
                            likeSong={likeSong}
                            user={user}
                        />
                    </div>
                ))}
            </div>

            <div className="flex h-250 bg-gray-800 justify-center items-center p-10 mb-16">
                <div className="w-full bg-white p-2 pt-4 rounded">
                    <div className="flex ml-3">
                        <div className="mr-3">
                            <img
                                style={{ objectFit: 'cover' }}
                                width="75px"
                                height="75px"
                                src={user?.avatar}
                                alt="user avatar"
                                className="rounded-full"
                            />
                        </div>
                        <div>
                            <h1 className="font-semibold">
                                {user?.userName || user?.firstName}
                            </h1>
                        </div>
                    </div>

                    <div className="mt-3 p-3 w-full">
                        <textarea
                            onChange={(e) => setComment(e.target.value)}
                            value={comment}
                            rows="3"
                            className="border p-2 rounded w-full"
                            placeholder="Write something..."
                        ></textarea>
                    </div>

                    <div className="flex justify-between mx-3">
                        <div>
                            <button
                                onClick={() => submitComment(songs?.[0]?._id)}
                                className="px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700"
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                    <div className="flex-col bg-white overflow-scroll">
                        {comments.map(({ comment, userName, createdAt }) => (
                            <div className="p-2 w-full">
                                <p className="text-sm text-opacity-50">
                                    {userName} -{' '}
                                    {new Date(createdAt).toDateString()}
                                </p>
                                <p>{comment}</p>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Artist;
