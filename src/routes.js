import React, { useContext } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { SignIn } from './Pages/SignIn';
import { SongUpload } from './Pages/SongUpload';
import { Music } from './Pages/Music';
import { Register } from './Pages/Register';
import { Search } from './Pages/Search';
import { ForgotPassword } from './Pages/ForgotPassword';
import { Account } from './Pages/Account';
import { ResetPassword } from './Pages/ResetPassword';
import { Artist } from './Pages/Artist';
import { UserContext } from './contexts/UserContext';
import { SongContext } from './contexts/SongContext';
import { GeoMap } from './Pages/GeoMap';

const Routes = () => {
    const history = useHistory();
    const { user } = useContext(UserContext);
    const { song } = useContext(SongContext);

    const userInLocalStorage = JSON.parse(localStorage.userData || '{}');

    const unauthenticatedRoutes = ['/', '/forgotpassword', '/resetpassword'];
    const path = window.location.pathname;
    if (!unauthenticatedRoutes.includes(path) && !userInLocalStorage?.email) {
        history.push('/');
    }

    return (
        <div className={song ? 'pb-300px' : ''}>
            <Switch>
                <Route path="/discover">
                    <Search user={user} />
                </Route>
                <Route path="/music">
                    <Music user={user} />
                </Route>
                <Route path="/artist/:id">
                    <Artist user={user} />
                </Route>
                <Route path="/song">
                    <Music user={user} />
                </Route>
                <Route path="/upload">
                    <SongUpload user={user} />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/account">
                    <Account />
                </Route>
                <Route path="/map">
                    <GeoMap />
                </Route>
                <Route path="/forgotpassword">
                    <ForgotPassword />
                </Route>
                <Route path="/resetpassword/:token">
                    <ResetPassword />
                </Route>
                <Route path="/">
                    <SignIn />
                </Route>
            </Switch>
        </div>
    );
};

export default Routes;
