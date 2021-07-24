export const formatUrl = (url) => {
    if (!url) return;
    const segements = url.split('/');
    segements[segements.length - 1] = encodeURIComponent(
        segements[segements.length - 1]
    );
    return segements.join('/');
};
