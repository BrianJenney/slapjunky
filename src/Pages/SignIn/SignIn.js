import React from 'react';
import { useHistory } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const SignIn = ({ signIn, signInError, updateUserInfo, isLoading }) => {
    const history = useHistory();

    return (
        <div className="bg-gray-800 100vh">
            <div>
                <div className="container px-5 py-36 md:py-20 px-32 sm:px-10 mx-auto flex flex-wrap items-center justify-between">
                    <div>
                        <div className="md:w-3/5 sm:w-1/2 md:pr-16 lg:pr-0 pr-0 flex items-center">
                            <h1 className="title-font font-bold lg:text-7xl text-6xl text-white">
                                F1rst
                            </h1>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 --rotate-45 ml-10"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="pink"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                                    />
                                </svg>
                            </span>
                        </div>
                        <section className="mt-10">
                            <h2 className="lg:text-4xl text-3xl text-white">
                                A music discovery platform for artists and
                                listeners
                            </h2>

                            <h2 className="lg:text-4xl text-3xl text-white">
                                We help rising artists find their audience
                            </h2>
                        </section>
                    </div>
                    <div className="sm:w-full bg-white shadow-lg rounded-lg p-8 flex flex-col lg:ml-auto sm:mt-10 lg:mt-0">
                        <div className="relative mb-4">
                            <input
                                onChange={(e) =>
                                    updateUserInfo('email', e.target.value)
                                }
                                type="text"
                                name="full-name"
                                placeholder="Email address"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg outline-none  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <input
                                onChange={(e) =>
                                    updateUserInfo('password', e.target.value)
                                }
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="w-full  bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  outline-none text-lg text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <button
                            onClick={() => signIn()}
                            className="text-white border-0 py-2 px-8 focus:outline-none font-medium  rounded text-xl bg-purple-600 "
                        >
                            {isLoading ? 'Logging In' : 'Log In'}
                        </button>
                        {signInError && (
                            <p className="text-sm text-red-500 py-5 text-center">
                                {signInError}
                            </p>
                        )}
                        <p
                            onClick={() => history.push('/forgotpassword')}
                            className="text-sm text-blue-500 py-5 text-center cursor-pointer"
                        >
                            Forgot password?
                        </p>
                        <hr className="my-5" />
                        <button
                            onClick={() => history.push('/register')}
                            className="text-white  border-0 py-2 px-8 focus:outline-none font-medium  rounded text-xl bg-green-500 "
                        >
                            Create New Account
                        </button>
                    </div>
                </div>
            </div>
            <footer className="bg-gray-900">
                <div className="container flex flex-wrap items-center justify-around px-4 py-8 mx-auto justify-between">
                    <div>
                        <p className="text-2xl text-white">Contact Us</p>
                    </div>
                    <div>
                        <SocialIcon url="https://instagram.com" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SignIn;
