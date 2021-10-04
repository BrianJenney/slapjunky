import ImageKit from 'imagekit-javascript';
import { apiClient, getBaseUrl } from './apiClient';

export const formatUrl = (url) => {
    if (!url) return;
    const segements = url.split('/');
    segements[segements.length - 1] = encodeURIComponent(
        segements[segements.length - 1]
    );
    return segements.join('/');
};

const baseUrl = getBaseUrl();
const imagekit = new ImageKit({
    publicKey: process.env.REACT_APP_IMAGE_KIT_KEY,
    urlEndpoint: process.env.REACT_APP_IMAGE_KIT_URL,
    authenticationEndpoint: `${baseUrl}image/imageAuth`,
});

export const imageUpload = async (file) => {
    return new Promise((resolve, reject) => {
        imagekit.upload(
            {
                file: file,
                fileName: file.name,
                tags: [],
            },
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            }
        );
    });
};

export const likeSong = ({ userId, songId, removeLike, callback }) => {
    apiClient('songs/like', {
        userId,
        songId,
        removeLike,
    })
        .then((songData) => {
            callback(songData);
        })
        .catch((err) => {
            console.error(err);
        });
};
