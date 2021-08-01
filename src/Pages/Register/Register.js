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
}) => {
    if (formType === 'artist') {
        return (
            <ArtistForm
                setFormType={setFormType}
                updateUser={updateUser}
                registerUser={registerUser}
                removeImg={removeImg}
                imgPreview={imgPreview}
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
        />
    );
};

export default Register;
