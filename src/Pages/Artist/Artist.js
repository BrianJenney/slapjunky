import React from 'react';
import { Song } from '../Music/components';
import { SocialIcon } from 'react-social-icons';

const Artist = ({
    artist = { socialMedia: [] },
    songs = [],
    likeSong,
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
        </div>
    );
};

export default Artist;
