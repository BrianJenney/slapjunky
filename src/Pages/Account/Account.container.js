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

    useEffect(() => {
        setUser(user);
        setImgPreview(user?.avatar);
    }, [user]);

    const updateUser = (propName, val) => {
        if (propName === 'avatar') {
            setImgPreview(URL.createObjectURL(val));
        }
        currentUser[propName] = val;
        setUser({ ...currentUser });
    };

    const removeImg = () => setImgPreview(null);

    const registerUser = async (socialMedia = []) => {
        let imageData;
        if (currentUser.avatar instanceof File) {
            imageData = await imageUpload(currentUser.avatar);
        }

        try {
            const userData = await apiClient('user/update', {
                ...currentUser,
                userId: currentUser._id,
                avatar: imageData?.url,
                socialMedia,
            });

            storeUser(userData?.data?.user);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="bg-gray-900 overflow-scroll">
            {user?.type === 'artist' ? (
                <ArtistForm
                    formType="update"
                    currentUser={currentUser}
                    updateUser={updateUser}
                    registerUser={registerUser}
                    removeImg={removeImg}
                    imgPreview={imgPreview}
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
