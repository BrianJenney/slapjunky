import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SongPlayer } from '../SongPlayer';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const FooterNav = () => {
    const location = useLocation();
    const history = useHistory();
    const { user } = useContext(UserContext);

    const isHomePage = ['/', '/artist/upload'].includes(location?.pathname);

    const isArtist = user?.userType === 'artist';

    return (
        <div className="flex-col w-full justify-center fixed bottom-2">
            {!isHomePage && <SongPlayer />}
            <nav className="w-11/12 border bg-white flex overflow-x-auto py-4 rounded-lg mx-auto">
                <p
                    onClick={() => history.push('/')}
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
                    <span className="hidden text-sm capitalize">Home</span>
                </p>

                <p
                    onClick={() => history.push('/discover')}
                    className="flex flex-col flex-grow items-center justify-center
    overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
    ease-in-out text-orange-500 cursor-pointer"
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
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </p>

                {isArtist && (
                    <p
                        onClick={() => history.push('/artist/upload')}
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
