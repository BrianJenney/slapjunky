import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({
    user: null,
    setUser: () => {},
});

export const UserContextProvider = ({ children }) => {
    useEffect(() => {
        const userData = JSON.parse(localStorage.userData || '{}');
        setUser({ ...userData });
    }, []);

    const [user, setUser] = useState(null);

    const storeUser = (userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
        setUser(userData);
    };

    return (
        <UserContext.Provider value={{ user, storeUser }}>
            {children}
        </UserContext.Provider>
    );
};
