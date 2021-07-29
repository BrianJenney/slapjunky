import React from 'react';
import { useHistory } from 'react-router-dom';

const Register = ({ registerUser, updateUser }) => {
    const history = useHistory();
    return (
        <div className="bg-grey-light min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input
                        onChange={(e) => updateUser('name', e.target.value)}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name"
                    />
                    <input
                        onChange={(e) => updateUser('userName', e.target.value)}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="name"
                        placeholder="User Name"
                    />
                    <input
                        onChange={(e) => updateUser('email', e.target.value)}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                    />

                    <input
                        onChange={(e) => updateUser('password', e.target.value)}
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                    />
                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password"
                    />
                    <label>Account Type</label>
                    <div className="mt-4">
                        <div className="mt-2">
                            <label className="inline-flex items-center">
                                <input
                                    onChange={(e) =>
                                        updateUser('userType', e.target.val)
                                    }
                                    type="radio"
                                    className="form-radio"
                                    name="accountType"
                                    value="user"
                                />
                                <span className="ml-2">Listener</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input
                                    onChange={(e) =>
                                        updateUser('userType', e.target.val)
                                    }
                                    type="radio"
                                    className="form-radio"
                                    name="accountType"
                                    value="artist"
                                />
                                <span className="ml-2">Artist</span>
                            </label>
                        </div>
                    </div>
                    <input
                        onChange={(e) => updateUser('zipcode', e.target.value)}
                        type="number"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="zipcode"
                        placeholder="Zipcode"
                    />
                    <button
                        onClick={() => registerUser()}
                        type="submit"
                        className="bg-green-400 w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    >
                        Create Account
                    </button>
                </div>

                <div className="text-white mt-6">
                    <p
                        onClick={() => history.push('/')}
                        className="no-underline border-b border-blue text-blue cursor-pointer"
                    >
                        Already have an account? Log in
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
