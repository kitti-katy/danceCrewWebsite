/**
 * Created by kate on 6/3/17.
 */
import Paper from 'material-ui/Paper';
import React, { Component } from 'react';

import SHead from './SHead.js'
import CrewMember from "./CrewMember";
const styleDiv = {
    textAlign: 'center',
    width:"23.5555555556%",
    color:'#737373',
    backgroundColor:'white'
}
let kate = require('./images/kate2.jpg')
let ran = require('./images/rannie2.jpg')
let eve = require('./images/eve12.jpg')
let eva = require('./images/eva12.jpg')

const crewArray = [{label: 'Rannie', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
picture:ran},
    {label: 'Yekaterina',message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    picture:kate},
    {label: 'Evelyn', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    picture:eve},
    {label: 'Eva', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    picture:eva}]


const style = {
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'space-between',
    fontSize: '0.9em',
    marginTop: '5%',
    height: '100%'

}

const Crew = () => (
    <div>

        <SHead header="Crew"/>
        <div style={style}>

            {
                crewArray.map((crew) => {
                    return (<CrewMember label = {crew.label} source={crew.picture} />
                   )
                })}
        </div>
    </div>
);

export default Crew;