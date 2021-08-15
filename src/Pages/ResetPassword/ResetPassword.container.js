import React, { useState } from 'react';
import { apiClient } from '../../utils/apiClient';
import ResetPassword from './ResetPassword';

const ResetPasswordContainer = () => {
    const [newPassword, setNewPassword] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isSuccessful, setisSuccessful] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);

    const submit = async () => {
        try {
            const token = window.location.pathname.split('/').pop();
            const response = await apiClient('password/changepassword', {
                password: newPassword,
                token,
            });
            console.log(response);
            setisSuccessful(true);
        } catch (e) {
            setErrorMessage('Oops an error occured with your request');
        }
    };

    const confirmPassword = (val) => {
        setIsValidPassword(val === newPassword);
    };

    return (
        <ResetPassword
            confirmPassword={confirmPassword}
            isSuccessful={isSuccessful}
            errorMessage={errorMessage}
            submit={submit}
            setNewPassword={setNewPassword}
            isValidPassword={isValidPassword}
        />
    );
};

export default ResetPasswordContainer;
