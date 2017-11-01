/**
 * Created by kate on 5/30/17.
 */

import React, {Component} from 'react';
import './App.css';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Tabs, Tab} from 'material-ui/Tabs';
import Events from './Events.js';
import Home from './Home.js';
import LogIn from './LogIn.js'
import Header from './Header.js'
import Services from './Services.js'
import Contact from './Contact.js'
import Crew from './Crew.js'
import { Link } from 'react-router-dom'

import muiThemeable from 'material-ui/styles/muiThemeable';
import  MyCustomTabs from './MyCustomTabs.js'
let axios = require('axios')

const reducer = function (state = {}, action) {
    state = {...state, name: action.payload}

    return state;
}
const reducer2 = (state = [], action) => {
    if (action.type === "INC")
        state = state + action.payload;
    return state;
}
const reducers = combineReducers({
    user: reducer,
    tweets: reducer2
})
const middleware = applyMiddleware()
const store = createStore(reducers, middleware);
store.subscribe(() => {
    console.log("store changed", store.getState())
})
store.dispatch({type: "INC", payload: 1})


class AboutUs extends Component {
    render() {
        return (
            <div className="AboutUs">
                About Us
            </div>
        );
    }
}
class CrewMembers extends Component {
    render() {
        return (
            <div className="CrewMembers">
                Crew Members
            </div>
        );
    }
}


const styleTab = {
    width: '48%',
    marginTop: '2%'

}
const styleTabButton = {

    display: 'flex',
    wrap: 'no-wrap',
    justifyContent: 'space-between',
    paddingRight: '5%',
    paddingLeft: '5%',
    marginTop: '1%',
    marginBottom: '1%',


}

function handleActive(tab) {

}

const tabsArray = [{label: 'Home', child: Home()},
    {label: 'About Us', child: AboutUs},
    {label: 'Events', child: Events()},
    {label: 'Crew', child: Crew()},
    {label: 'Services', child: Services()},
    {label: 'Contact', child: Contact()}]

var opened = false;

const whitener = {
    height: '15%',
    backgroundColor: 'white',
    width: '100%',
    position: 'fixed',
    zIndex: 1,
    borderColor: '#E5E5E5',
    borderStyle: 'solid',
    borderWidth: '0 0 1px 0'
}


const MyAwesomeReactComponent = (props) => (
    <div>
         <Link to='/admin'> <h1>AAA</h1></Link>
        <MyCustomTabs/>
    </div>
);

export default  muiThemeable()(MyAwesomeReactComponent);




