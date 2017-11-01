/**
 * Created by kate on 5/30/17.
 */

import React, {Component} from 'react';
let main =require( './images/mainpic1.jpg');


const styleHome = {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(' + main + ')',
    height: '700px',
    zIndex: '0'

}
const Home = () => (
    <div style={styleHome}>

    </div>
);

export default Home;