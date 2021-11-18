import React, { createContext, useState } from 'react';
import { likeSong } from '../utils/helpers';

export const SongContext = createContext({
    song: null,
    setCurrentSong: () => {},
});

export const SongContextProvider = ({ children }) => {
    const [song, setCurrentSong] = useState(null);
    const [allSongs, setAllSongs] = useState([]);

    return (
        <SongContext.Provider
            value={{ song, setCurrentSong, setAllSongs, allSongs, likeSong }}
        >
            {children}
        </SongContext.Provider>
    );
};
