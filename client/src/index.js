import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import { connect } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import Pages from "./Pages";

injectTapEventPlugin();
const App = () => (
    <MuiThemeProvider >

        <Pages />
    </MuiThemeProvider>
);

function playlist(state = [], action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

const store = createStore(playlist);

ReactDOM.render(
     <App/> ,
    document.getElementById('root'));

