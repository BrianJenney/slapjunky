import React, { useState } from 'react';
import { FileUpload } from '../../../components/FileUpload';

const ArtistForm = ({
    updateUser,
    registerUser,
    setFormType,
    imgPreview,
    removeImg,
    formType,
    currentUser = {
        artistName: '',
        firstName: '',
        lastName: '',
        city: '',
        state: '',
        email: '',
        socialMedia: [],
        bio: '',
    },
}) => {
    const [formRows, setFormRows] = useState([
        '',
        ...(currentUser?.socialMedia || []),
    ]);

    const addRow = () => {
        setFormRows([...formRows, '']);
    };

    const removeRow = (idx) => {
        setFormRows(formRows.filter((row, i) => i !== idx));
    };

    const updateSocialMedia = (val, idx) => {
        setFormRows(
            formRows.map((row, i) => {
                if (i !== idx) {
                    return row;
                }
                return val;
            })
        );
    };

    return (
        <div className="bg-grey-light min-h-screen">
            <div className="container md:w-10/12 mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="text-gray-700 bg-white px-6 py-8 rounded shadow-md text-black w-full mb-10 mt-5">
                    {formType === 'update' ? (
                        <></>
                    ) : (
                        <>
                            <h1 className="mb-2 text-3xl text-center">
                                Sign up
                            </h1>
                            <p
                                onClick={() => setFormType('listener')}
                                className="text-center cursor-pointer text-blue-500"
                            >
                                Register as a user
                            </p>
                        </>
                    )}
                    <div className="flex flex-wrap -mx-2 space-y-4 py-4 md:space-y-0">
                        <div className="w-full px-2 md:w-1/2">
                            <input
                                onChange={(e) =>
                                    updateUser('firstName', e.target.value)
                                }
                                className="w-full h-10 px-3 text-base placeholder-gray-400 border rounded focus:shadow-outline"
                                type="text"
                                placeholder="First Name"
                                id="formGridCode_name"
                                value={currentUser?.firstName}
                            />
                        </div>
                        <div className="w-full px-2 md:w-1/2">
                            <input
                                onChange={(e) =>
                                    updateUser('lastName', e.target.value)
                                }
                                className="w-full h-10 px-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline"
                                type="text"
                                placeholder="Last Name"
                                id="formGridCode_last"
                                value={currentUser?.lastName}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap py-3">
                        <div className="w-full">
                            <input
                                onChange={(e) =>
                                    updateUser('email', e.target.value)
                                }
                                className="w-full h-10 px-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline"
                                type="text"
                                id="email"
                                placeholder="Email"
                                value={currentUser?.email}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <input
                                onChange={(e) =>
                                    updateUser('artistName', e.target.value)
                                }
                                className="w-full h-10 px-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline"
                                type="text"
                                id="artistName"
                                placeholder="Artist Name"
                                value={currentUser?.artistName}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full py-4">
                            <textarea
                                onChange={(e) =>
                                    updateUser('bio', e.target.value)
                                }
                                rows="5"
                                className="w-full px-3 py-2 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline"
                                type="text"
                                id="artistBio"
                                placeholder="Artist Bio"
                                value={currentUser?.bio}
                            />
                        </div>
                    </div>

                    <FileUpload
                        imgPreview={imgPreview}
                        removeImg={removeImg}
                        handleFileChange={(file) => updateUser('avatar', file)}
                    />

                    <button
                        disabled={formRows.length > 2}
                        onClick={() => addRow()}
                        className="bg-green-400 text-white py-2 px-4 rounded inline-flex items-center"
                    >
                        Add Social Media
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                    {formRows.map((row, idx) => (
                        <div
                            key={idx}
                            className="flex flex-wrap -mx-2 space-y-4 md:space-y-0 py-2"
                        >
                            <div className="w-full px-2 flex items-center">
                                <input
                                    onChange={(e) =>
                                        updateSocialMedia(e.target.value, idx)
                                    }
                                    className="w-full h-10 px-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline"
                                    type="text"
                                    name="socMedia"
                                    placeholder="https://instagram.com/lilmoney"
                                    value={row}
                                />
                                <svg
                                    onClick={() => removeRow(idx)}
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
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    ))}

                    <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0 py-2">
                        <div className="w-full px-2 md:w-1/2">
                            <input
                                onChange={(e) =>
                                    updateUser('city', e.target.value)
                                }
                                className="w-full h-10 px-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline"
                                type="text"
                                name="city"
                                id="city"
                                placeholder="City"
                                value={currentUser?.city}
                            />
                        </div>
                        <div className="w-full px-2 md:w-1/2">
                            <select
                                value={currentUser?.state}
                                onChange={(e) =>
                                    updateUser('state', e.target.value)
                                }
                                className="w-full h-10 px-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline"
                            >
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                    </div>
                    {formType === 'update' ? (
                        <></>
                    ) : (
                        <>
                            <div className="flex flex-wrap py-4">
                                <div className="w-full">
                                    <input
                                        onChange={(e) =>
                                            updateUser(
                                                'password',
                                                e.target.value
                                            )
                                        }
                                        className="w-full h-10 px-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline"
                                        type="password"
                                        id="password"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <input
                                        className="w-full h-10 px-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline"
                                        type="password"
                                        id="password_confirm"
                                        placeholder="Confirm Password"
                                    />
                                </div>
                            </div>
                        </>
                    )}
                    <div className="py-4">
                        <button
                            onClick={() => registerUser(formRows)}
                            type="submit"
                            className="bg-green-400 w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                        >
                            {formType === 'update'
                                ? 'Update Account'
                                : 'Create Account'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtistForm;
