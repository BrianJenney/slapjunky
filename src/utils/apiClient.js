import axios from 'axios';

const getBaseUrl = () => {
    const isProd = process.env.NODE_ENV === 'production';
    return isProd ? 'https://TBD/' : 'http://localhost:5000/api/';
};

export const apiClient = (path, data, overrides = {}) => {
    const config = {
        method: 'post',
        url: `${getBaseUrl()}${path}`,
        data,
    };

    return axios({ ...config, ...overrides });
};
