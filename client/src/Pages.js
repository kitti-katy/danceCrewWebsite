/**
 * Created by kate on 10/22/17.
 */
import React, { Component } from 'react';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import AdminPanel from './admin/AdminPanel.js'
import { Switch, Route } from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'

export default class Pages extends Component{
    constructor(props){
        super(props)
    }

render(){
        return (

<BrowserRouter>
    <Switch>
    <Route exact  path='/admin' component={AdminPanel}/>
        <Route  exact path='/' component={MyAwesomeReactComponent}/></Switch></BrowserRouter>
  )
}
}