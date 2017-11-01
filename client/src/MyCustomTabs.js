/**
 * Created by kate on 6/6/17.
 */


import React, {Component, PropTypes} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Events from './Events.js';
import Home from './Home.js';
import Header from './Header.js'
import Services from './Services.js'
import Contact from './Contact.js'
import Crew from './Crew.js'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import LogIn from './LogIn.js'
import MyCustomTab from "./MyCustomTab";
import Lightbox from 'react-image-lightbox';


function tabChange(state = [], action) {
    if (action.type == "CHANGE_TAB")
        return [...state,
            action.payload]
    return state
}
const store = createStore(tabChange)


class AboutUs extends Component {
    render() {
        return (
            <div className="AboutUs">
                About Us
            </div>
        );
    }
}

class MyCustomTabs extends Component {
    constructor() {
        super()

        this.state = {
            currentTab: 0,
            menuHeight: '15%',
        }

        window.addEventListener("resize", this.update)
        this.changePage = this.changePage.bind(this)
        this.changeMenuHeight = this.changeMenuHeight.bind(this)
        window.addEventListener("scroll", this.changeMenuHeight
        )

    }


    changeMenuHeight() {
        var y = window.scrollY;
        if (y > 60) {
            this.setState({
                menuHeight: '12%'
            })
        } else if (y <= 60 && y > 50) {
            this.setState({
                menuHeight: '13%'
            })
        } else if (y >= 40 && y < 50) {
            this.setState({
                menuHeight: '14%'
            })
        }
        else if (y < 40) this.setState(
            {
                menuHeight: '15%'
            }
        )


    }


    changePage(index) {
        console.log(index)
        this.setState({
            currentTab: index
        })
    }

    render() {
        const tabsArray = [{label: 'Home', child: Home()},
            {label: 'About Us', child: AboutUs},
            {label: 'Events', child: Events()},
            {label: 'Crew', child: Crew()},
            {label: 'Services', child: Services()},
            {label: 'Contact', child: Contact()}]


        const styleTabButton = {

            display: 'flex',
            wrap: 'no-wrap',
            justifyContent: 'space-between',
            paddingRight: '10%',
            paddingLeft: '10%',
            marginBottom: '1%',
            position: 'fixed',
            width: '95%',
            zIndex: 2,
            height: this.state.menuHeight,
            transition: 'height 0.1s linear',
            backgroundColor: 'white',
            borderColor: '#E5E5E5',
            borderStyle: 'solid',
            borderWidth: '0 0 1px 0',
            opacity: '0.9',
            marginTop: '0%'
        }


        return (
            <div >

                <div style={styleTabButton}>
                    <Header/>
                    <div style={{width: '100%'}}>
                        <div style={{
                            display: 'flex', justifyContent: 'space-between', width: '100%', color: 'rgb(51,51,51)',
                            textAlign: 'center',
                            fontSize: '1em', paddingBottom: '2%', marginTop: '5%', fontWeight: 'bold'
                        }}>
                            {tabsArray.map((tab, i) =><MyCustomTab to = {'#'+tab.label} label = {tab.label} index={i} changePage={this.changePage}/>
                            )
                            } </div>
                        <div style={{
                            height: '2%',
                            backgroundColor: 'black',
                            width: '16.6666666667%',
                            marginLeft: '' + 16.6666666667 * this.state.currentTab + '%',
                            transition: 'margin-left 0.2s linear',
                            borderRadius: '10%'
                        }}></div>

                    </div>
                    <LogIn />
                </div>
                <div style={{padding: '7.5%', backgroundColor: '#F5F5F5'}}> {tabsArray.map((tab) =>
                    <div id = {tab.label}> {tab.child} </div>)
                }</div>

            </div>
        );
    }
}
export default MyCustomTabs;