import React, { createContext, useState } from 'react';
import { likeSong } from '../utils/helpers';

export const SongContext = createContext({
    song: null,
    setCurrentSong: () => {},
});

export const SongContextProvider = ({ children }) => {
    const [song, setCurrentSong] = useState(null);

    return (
        <SongContext.Provider value={{ song, setCurrentSong, likeSong }}>
            {children}
        </SongContext.Provider>
    );
};
