import React from 'react';

const ForgotPassword = ({ setEmail, submit, isSuccessful }) => {
    return (
        <div className="flex flex-column items-center justify-center py-20">
            {isSuccessful ? (
                <p className="text-white text-2xl">
                    Check your email for a link to reset your password!
                </p>
            ) : (
                <form className="bg-white w-7/12 mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            placeholder="Email"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => submit()}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Request New Password
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ForgotPassword;
