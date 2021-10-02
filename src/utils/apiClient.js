import axios from 'axios';

const getBaseUrl = () => {
    const urlsByEnv = {
        production:
            'https://4mxwytmbdh.execute-api.us-east-1.amazonaws.com/prod/',
        dev: 'https://4mxwytmbdh.execute-api.us-east-1.amazonaws.com/dev/api/',
        stage: 'https://4mxwytmbdh.execute-api.us-east-1.amazonaws.com/dev/api/',
    };
    const env = process.env.NODE_ENV;
    return urlsByEnv[env] || 'http://localhost:5000/api/';
};

export const apiClient = (path, data, overrides = {}) => {
    const config = {
        method: 'post',
        url: `${getBaseUrl()}${path}`,
        data,
    };

    return axios({ ...config, ...overrides });
};
