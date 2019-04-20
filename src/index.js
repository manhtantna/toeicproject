import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';

import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import rootReducer from './reducers';

const store = createStore(rootReducer);
store.subscribe(()=>console.log(store.getState()));

    ReactDOM.render(
            <Provider store = {store}>
                <CssBaseline />
                <Router>
                    <App />
                </Router>
            </Provider>
        ,document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
