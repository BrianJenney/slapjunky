import React, { useState } from 'react';
import { apiClient } from '../../utils/apiClient';
import ForgotPassword from './ForgotPassword';

const ForgotPasswordContainer = () => {
    const [email, setEmail] = useState(null);
    const [isSuccessful, setSuccessful] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = async () => {
        setIsSubmitting(true);
        try {
            await apiClient('password/requestchangepassword', {
                email,
            });
            setSuccessful(true);
            setIsSubmitting(false);
        } catch (e) {
            setSuccessful(false);
            setIsSubmitting(false);
            setErrorMessage('An error occured, please try again');
        }
    };
    return (
        <div className="bg-gray-900 min-h-screen">
            <ForgotPassword
                setEmail={setEmail}
                submit={submit}
                isSubmitting={isSubmitting}
                isSuccessful={isSuccessful}
                errorMessage={errorMessage}
            />
        </div>
    );
};

export default ForgotPasswordContainer;
