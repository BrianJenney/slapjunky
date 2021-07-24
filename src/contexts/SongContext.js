import React, { createContext, useState } from 'react';

export const SongContext = createContext({
    song: null,
    setCurrentSong: () => {},
});

export const SongContextProvider = ({ children }) => {
    const [song, setCurrentSong] = useState(null);

    return (
        <SongContext.Provider value={{ song, setCurrentSong }}>
            {children}
        </SongContext.Provider>
    );
};
