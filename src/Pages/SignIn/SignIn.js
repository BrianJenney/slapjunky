import React from 'react';

const SignIn = () => {
    return (
        <div>
            <div>
                <section class="text-gray-600 body-font bg-gray-900 h-screen">
                    <div class="container xl:px-32 px-5 py-36 mx-auto flex flex-wrap items-center">
                        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                            <h1 class="title-font font-bold lg:text-7xl text-6xl text-white text-center md:text-left ">
                                playground
                            </h1>
                        </div>
                        <div class="lg:w-2/6 md:w-1/2 bg-white shadow-lg rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <div class="relative mb-4">
                                <input
                                    type="text"
                                    name="full-name"
                                    placeholder="Email address"
                                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg outline-none  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div class="relative mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Password"
                                    class="w-full  bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  outline-none text-lg text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <button class="text-white border-0 py-2 px-8 focus:outline-none font-medium  rounded text-xl bg-purple-600 ">
                                Log In
                            </button>
                            <p class="text-sm text-blue-500 py-5 text-center">
                                Forgot password?
                            </p>
                            <hr className="my-5" />
                            <button class="text-white  border-0 py-2 px-8 focus:outline-none font-medium  rounded text-xl bg-green-500 ">
                                Create New Account
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SignIn;
