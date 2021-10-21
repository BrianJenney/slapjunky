import { useEffect, useState, useCallback } from 'react';

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);

    const handleWindowSizeChange = useCallback(() => {
        setWindowSize(window.innerWidth);
        if (window.innerWidth <= 800) {
            setIsMobile(true);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, [handleWindowSizeChange]);

    return [windowSize, isMobile];
};
