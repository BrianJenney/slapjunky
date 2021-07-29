import React, { useState } from 'react';
import { apiClient } from '../../utils/apiClient';
import Register from './Register';

const RegisterContainer = () => {
    const [user, setUser] = useState({ userType: 'user' });
    const [imgPreview, setImgPreview] = useState(null);

    const updateUser = (propName, val) => {
        user[propName] = val;
        setUser(user);
    };

    const registerUser = async () => apiClient('/user/create', user);

    return (
        <div className="bg-gray-900">
            <Register
                registerUser={registerUser}
                updateUser={updateUser}
                imgPreview={imgPreview}
            />
        </div>
    );
};

export default RegisterContainer;
