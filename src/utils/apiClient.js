import axios from 'axios';

const getBaseUrl = () => {
    const isProd = process.env.NODE_ENV === 'production';
    return isProd
        ? 'https://1m9psytjoh.execute-api.us-east-1.amazonaws.com/dev/api'
        : 'http://localhost:5000/api';
};

export const apiClient = (path, data, overrides = {}) => {
    const config = {
        method: 'post',
        url: `${getBaseUrl()}${path}`,
        data,
    };

    return axios({ ...config, ...overrides });
};
