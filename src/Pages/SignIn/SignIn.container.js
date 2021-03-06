import React, { useContext, useState } from 'react';
import SignIn from './SignIn';
import { apiClient } from '../../utils/apiClient';
import { UserContext } from '../../contexts/UserContext';
import { useHistory } from 'react-router-dom';

const SignInContainer = () => {
    const [signInError, setSignInError] = useState(false);
    const [userInfo, setUserInfo] = useState({ password: '', email: '' });
    const [isLoading, setLoading] = useState(false);
    const { storeUser } = useContext(UserContext);
    const history = useHistory();

    const updateUserInfo = (name, val) => {
        setUserInfo({ ...userInfo, ...{ [name]: val } });
    };

    const signIn = async () => {
        setSignInError(false);

        try {
            setLoading(true);
            const userData = await apiClient('user/signin', userInfo);
            if (userData?.data?.user) {
                setLoading(false);
                storeUser(userData?.data?.user);
                history.push('/discover');
            }
        } catch (e) {
            setLoading(false);
            setSignInError(e?.message);
        }
    };
    return (
        <SignIn
            signIn={signIn}
            signInError={signInError}
            setSignInError={setSignInError}
            updateUserInfo={updateUserInfo}
            isLoading={isLoading}
        />
    );
};

export default SignInContainer;
