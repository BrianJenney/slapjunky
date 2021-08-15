import React, { useState } from 'react';
import { apiClient } from '../../utils/apiClient';
import ForgotPassword from './ForgotPassword';

const ForgotPasswordContainer = () => {
    const [email, setEmail] = useState(null);
    const [isSuccessful, setSuccessful] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const submit = async () => {
        try {
            await apiClient('password/requestchangepassword', {
                email,
            });
            setSuccessful(true);
        } catch (e) {
            setSuccessful(false);
            setErrorMessage(e?.message);
        }
    };
    return (
        <div className="bg-gray-900 min-h-screen">
            <ForgotPassword
                setEmail={setEmail}
                submit={submit}
                isSuccessful={isSuccessful}
                errorMessage={errorMessage}
            />
        </div>
    );
};

export default ForgotPasswordContainer;
