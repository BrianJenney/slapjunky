import ImageKit from 'imagekit-javascript';

export const formatUrl = (url) => {
    if (!url) return;
    const segements = url.split('/');
    segements[segements.length - 1] = encodeURIComponent(
        segements[segements.length - 1]
    );
    return segements.join('/');
};

const isProd = process.env.NODE_ENV === 'production';
const baseUrl = isProd
    ? 'https://4mxwytmbdh.execute-api.us-east-1.amazonaws.com/dev/api/'
    : 'http://localhost:5000/api/';
const imagekit = new ImageKit({
    publicKey: 'public_fU+l6kWoRCFnzcl+LSvVU2YkY1Y=',
    urlEndpoint: 'https://ik.imagekit.io/i86bagiduka/',
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
