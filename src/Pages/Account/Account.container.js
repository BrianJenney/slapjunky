import React, { useState, useContext, useEffect } from 'react';
import UserForm from '../Register/components/UserForm';
import { apiClient } from '../../utils/apiClient';
import { UserContext } from '../../contexts/UserContext';
import { imageUpload } from '../../utils/helpers';
import ArtistForm from '../Register/components/ArtistForm';

const AccountContainer = () => {
    const { storeUser, user } = useContext(UserContext);
    const [imgPreview, setImgPreview] = useState(null);
    const [currentUser, setUser] = useState(null);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [isArtistForm, setArtistForm] = useState(false);
    const [updateError, setError] = useState(null);

    useEffect(() => {
        setUser(user);
        setImgPreview(user?.avatar);
        setArtistForm(user?.userType === 'artist' ? true : false);
    }, [user]);

    const updateUser = (propName, val) => {
        if (propName === 'avatar') {
            setImgPreview(URL.createObjectURL(val));
        }
        currentUser[propName] = val;
        setUser({ ...currentUser });
    };

    const removeImg = () => setImgPreview(null);

    const removeSong = async (songId) => {
        try {
            await apiClient('songs/remove', { songId });
            const filteredSongs = currentUser.songs.filter(
                (song) => song._id !== songId
            );

            setUser({ ...user, songs: filteredSongs });
            storeUser({ ...user, songs: filteredSongs });
        } catch (e) {
            throw e;
        }
    };

    const registerUser = async (socialMedia = []) => {
        let imageData;
        if (currentUser.avatar instanceof File) {
            imageData = await imageUpload(currentUser.avatar);
        }
        setSaveSuccess(true);
        setError(null);
        try {
            const userData = await apiClient('user/update', {
                ...currentUser,
                userType: isArtistForm ? 'artist' : 'user',
                userId: currentUser._id,
                avatar: imageData?.url,
                socialMedia,
            });
            storeUser(userData?.data?.user);
        } catch (e) {
            setError(e?.message);
        }
    };

    return (
        <div className="bg-black overflow-scroll relative">
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    onClick={(e) => {
                        setArtistForm(!isArtistForm);
                    }}
                    checked={isArtistForm}
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label
                    for="toggle"
                    className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                ></label>
            </div>
            <label for="toggle" className="text-xs text-gray-700">
                Switch to {isArtistForm ? 'user' : 'artist'}
            </label>
            {(saveSuccess || updateError) && (
                <div class="flex h-screen absolute mx-auto w-full">
                    <div class="m-auto">
                        <div class="bg-white rounded-lg border-gray-300 border p-3 shadow-lg">
                            <div class="flex flex-row">
                                <div class="px-2">
                                    <svg
                                        onClick={() => setSaveSuccess(false)}
                                        width="24"
                                        height="24"
                                        viewBox="0 0 1792 1792"
                                        fill="#44C997"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                                    </svg>
                                </div>
                                <div class="ml-2 mr-6">
                                    <span class="font-semibold">
                                        {updateError
                                            ? 'Oops something went wrong when saving your account'
                                            : 'Successfully Saved!'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isArtistForm ? (
                <ArtistForm
                    formType="update"
                    currentUser={currentUser}
                    updateUser={updateUser}
                    registerUser={registerUser}
                    removeImg={removeImg}
                    imgPreview={imgPreview}
                    removeSong={removeSong}
                />
            ) : (
                <UserForm
                    formType="update"
                    currentUser={currentUser}
                    updateUser={updateUser}
                    registerUser={registerUser}
                    removeImg={removeImg}
                    imgPreview={imgPreview}
                />
            )}
        </div>
    );
};

export default AccountContainer;
