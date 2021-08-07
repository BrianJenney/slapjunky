import React, { useContext } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { SignIn } from './Pages/SignIn';
import { SongUpload } from './Pages/SongUpload';
import { Music } from './Pages/Music';
import { Register } from './Pages/Register';
import { Search } from './Pages/Search';
import { UserContext } from './contexts/UserContext';

const Routes = () => {
    const history = useHistory();
    const { user } = useContext(UserContext);

    const userInLocalStorage = JSON.parse(localStorage.userData || '{}');

    if (window.location.pathname !== '/' && !userInLocalStorage?.email) {
        history.push('/');
    }

    return (
        <Switch>
            <Route path="/discover">
                <Search user={user} />
            </Route>
            <Route path="/music">
                <Music user={user} />
            </Route>
            <Route path="/artist/upload">
                <SongUpload user={user} />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/">
                <SignIn />
            </Route>
        </Switch>
    );
};

export default Routes;
