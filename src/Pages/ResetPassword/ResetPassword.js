import React from 'react';

const ResetPassword = ({
    isSubmitting,
    submit,
    isLoading,
    setNewPassword,
    confirmPassword,
    isValidPassword,
    errorMessage,
}) => {
    console.log(errorMessage);
    return (
        <div className="flex flex-column items-center justify-center py-20">
            {isLoading && <p className="text-white text-2xl">Submitting</p>}
            {isSubmitting ? (
                <p className="text-white text-2xl">Return to sign in</p>
            ) : (
                <form className="bg-white w-7/12 mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            New Password
                        </label>
                        <input
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="password"
                            minLength={7}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Verify Password
                        </label>
                        <input
                            onChange={(e) => confirmPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="password"
                            placeholder="password"
                        />
                    </div>
                    {!isValidPassword && (
                        <p className="text-danger">
                            These passwords do not match
                        </p>
                    )}
                    {errorMessage && (
                        <p className="text-danger">{errorMessage}</p>
                    )}
                    <div className="flex items-center justify-between">
                        <button
                            disabled={!isValidPassword}
                            onClick={() => submit()}
                            className={`${
                                isValidPassword
                                    ? 'bg-blue-500 hover:bg-blue-700'
                                    : 'bg-blue-200'
                            } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
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

export default ResetPassword;
