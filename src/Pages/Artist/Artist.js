import React from 'react';
import { Song } from '../Music/components';
import { SocialIcon } from 'react-social-icons';

const Artist = ({ artist = { socialMedia: [] }, songs = [] }) => {
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
                        src={artist?.avatar}
                        alt={artist?.artistName}
                    />
                    <h1 className="text-white text-6xl">
                        {artist?.artistName}
                    </h1>
                </div>

                <section className="pt-8">
                    <p className="text-white">{artist?.bio}</p>
                </section>
            </div>
            <div className="mt-5">
                {artist?.socialMedia.map((link) => (
                    <div>
                        <SocialIcon url={link} />
                        <a
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
                        <Song song={song} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Artist;
