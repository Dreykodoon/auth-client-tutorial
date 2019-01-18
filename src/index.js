import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import Welcome from './components/Welcome';
import SignUp from './components/auth/SignUp';
import Feature from './components/Feature';
import SignOut from './components/auth/SignOut';


const INIT_STATE = {
    auth: {
        authenticated: localStorage.getItem('token') || '',
        errorMessage: ''
    }
};

const store = createStore(reducers, INIT_STATE, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route exact path="/" component={Welcome}/>
                <Route exact path="/signup" render={() => <SignUp/>}/>
                <Route exact path="/feature" component={Feature}/>
                <Route exact path="/signout" component={SignOut}/>
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);