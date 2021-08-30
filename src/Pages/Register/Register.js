import React from 'react';
import UserForm from './components/UserForm';
import ArtistForm from './components/ArtistForm';

const Register = ({
    registerUser,
    updateUser,
    removeImg,
    imgPreview,
    setFormType,
    formType,
    currentUser,
}) => {
    if (formType === 'artist') {
        return (
            <ArtistForm
                setFormType={setFormType}
                updateUser={updateUser}
                registerUser={registerUser}
                removeImg={removeImg}
                imgPreview={imgPreview}
                currentUser={currentUser}
            />
        );
    }
    return (
        <UserForm
            setFormType={setFormType}
            updateUser={updateUser}
            registerUser={registerUser}
            removeImg={removeImg}
            imgPreview={imgPreview}
            currentUser={currentUser}
        />
    );
};

export default Register;
