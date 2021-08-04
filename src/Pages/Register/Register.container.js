import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { apiClient } from '../../utils/apiClient';
import Register from './Register';
import { UserContext } from '../../contexts/UserContext';

const RegisterContainer = () => {
    const [formType, setFormType] = useState('listener');
    const [user, setUser] = useState({ userType: 'user' });
    const [imgPreview, setImgPreview] = useState(null);
    const { storeUser } = useContext(UserContext);

    const history = useHistory();

    const updateUser = (propName, val) => {
        if (propName === 'avatar') {
            setImgPreview(URL.createObjectURL(val));
        }
        user[propName] = val;
        setUser(user);
    };

    const changeFormType = (type) => {
        setFormType(type === 'artist' ? 'artist' : 'user');
        setUser({ userType: type === 'artist' ? 'artist' : 'user' });
        setImgPreview(null);
    };

    const removeImg = () => setImgPreview(null);

    const registerUser = async (socialMedia = []) => {
        try {
            const userData = await apiClient('/user/create', {
                ...user,
                socialMedia,
            });
            console.log(userData?.data?.user);
            storeUser(userData?.data?.user);
            history.push('/music');
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="bg-gray-900 overflow-scroll">
            <Register
                formType={formType}
                setFormType={changeFormType}
                registerUser={registerUser}
                updateUser={updateUser}
                imgPreview={imgPreview}
                removeImg={removeImg}
            />
        </div>
    );
};

export default RegisterContainer;
