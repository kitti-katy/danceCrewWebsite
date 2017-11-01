/**
 * Created by kate on 6/2/17.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import SHead from './SHead.js'
const styleS = {
    textAlign: 'center',
    display:'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'space-between',


    width:'100%',


}

const borderStyle = {
    borderColor:'#E5E5E5',
    borderStyle:'groove',
    borderWidth:'1px 0 0 0',
    height:'1%'
}

const styleDiv = {
    textAlign: 'center',

    lineHeight: '2em',
    width:"32.5555555556%",

    color:'#737373',
    padding:'2.5%',

    backgroundColor:'white'


}
const styleH = {
    textAlign:'center',
    width:'100%'
}

const styleImg = {
    width:'20%'
}

const Services = () => (
    <div>
        <SHead header = "Services"/>

    <div style={styleS} >


        <Paper style={styleDiv} zDepth={1} >

            <img style={styleImg} src = {'https://cdn0.iconfinder.com/data/icons/ticket/500/Cinema_film_movie_ticket_entertainment_theater-512.png'}/>
            <h3 style={styleH}>Performances</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
       </p></Paper>
        <Paper style={styleDiv} zDepth={1} >
            <img style={styleImg} src = {'https://cdn0.iconfinder.com/data/icons/ticket/500/Cinema_film_movie_ticket_entertainment_theater-512.png'}/>
            <h3 style={styleH}>Workshops</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
               </p></Paper>
        <Paper style={styleDiv} zDepth={1} >
            <img style={styleImg} src = {'https://cdn0.iconfinder.com/data/icons/ticket/500/Cinema_film_movie_ticket_entertainment_theater-512.png'}/>
            <h3 style={styleH}>Classes</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p></Paper>

    </div>
    </div>
);

export default Services;