import React, { useEffect, useState } from 'react';
import { apiClient } from '../../utils/apiClient';
import Search from './Search';

const SearchContainer = () => {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const querySongsAndArtists = async () => {
            const response = await apiClient('search/search', { query });
            setSearchResults(response?.data?.data);
        };

        if (query.length <= 3) setSearchResults([]);

        if (query.length > 3) querySongsAndArtists();
    }, [query]);

    return <Search setQuery={setQuery} searchResults={searchResults} />;
};

export default SearchContainer;
