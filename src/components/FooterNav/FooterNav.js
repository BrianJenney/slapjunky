import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SongPlayer } from '../SongPlayer';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const FooterNav = () => {
    const location = useLocation();
    const history = useHistory();
    const { user } = useContext(UserContext);

    const isHomePage = ['/', '/upload'].includes(location?.pathname);

    const isAdmin = user?.userType === 'admin';
    const isSignedIn = user?.userType;

    return (
        <div className="flex-col w-full justify-center fixed bottom-2">
            {!isHomePage && <SongPlayer />}
            <nav className="w-11/12 border bg-white flex overflow-x-auto py-4 rounded-lg mx-auto">
                <p
                    onClick={() => history.push(isSignedIn ? '/discover' : '/')}
                    className="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out focus:text-orange-500 cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                    </svg>

                    <span className="hidden text-sm capitalize">Home</span>
                </p>

                <p
                    onClick={() => history.push('/map')}
                    className="flex flex-col flex-grow items-center justify-center
overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
ease-in-out focus:text-orange-500 cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span className="hidden text-sm capitalize">Map</span>
                </p>

                <p
                    onClick={() => history.push('/account')}
                    className="flex flex-col flex-grow items-center justify-center
    overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
    ease-in-out focus:text-orange-500 cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>
                    <span className="hidden text-sm capitalize">Account</span>
                </p>

                {isAdmin && (
                    <p
                        onClick={() => history.push('/upload')}
                        className="flex flex-col flex-grow items-center justify-center
            overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
            ease-in-out focus:text-orange-500 cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M13 7H7v6h6V7z" />
                            <path
                                fillRule="evenodd"
                                d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <span className="hidden text-sm capitalize">
                            upload music
                        </span>
                    </p>
                )}
            </nav>
        </div>
    );
};

export default FooterNav;
