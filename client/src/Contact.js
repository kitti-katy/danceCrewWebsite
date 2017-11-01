/**
 * Created by kate on 6/2/17.
 */
import TextField from 'material-ui/TextField';
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SHead from './SHead.js'
import Paper from 'material-ui/Paper';


const tfStyle = {
    width: '100%'
}

const styleS = {

    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'space-between',
    width: '100%',
}


const styleDiv = {
    width: "100%",
    color: '#737373',
    padding: '2.5%',
}

const Contact = () => (
    <div><SHead header="Contact"/>


        <div style={styleS}>


            <div style={styleDiv}>

                <TextField style={tfStyle} floatingLabelStyle={{color: 'rgb(65,65,65)'}}
                           hintText="Required"
                           floatingLabelText="Name"/>
                <br/>
                <TextField style={tfStyle} floatingLabelStyle={{color: 'rgb(65,65,65)'}}
                           hintText="Required"
                           floatingLabelText="Email"/> <br/>
                <TextField style={tfStyle} floatingLabelStyle={{color: 'rgb(65,65,65)'}}
                           hintText="Required"
                           floatingLabelText="Subject"/> <br/>
                <TextField style={tfStyle} floatingLabelStyle={{color: 'rgb(65,65,65)'}}
                           hintText="Required"
                           floatingLabelText="Message"
                           multiLine={true}
                           rows={2}/>

                <br/>
                <RaisedButton style={{marginTop: '2%'}}
                              label="Send"
                              primary={true}
                              disabled={true}
                              onTouchTap={this.handleClose}
                /></div>
            <div style={{lineHeight: '2em', color: '#737373', width: '40%'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat
                nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.

            </div>
        </div>


    </div>
);

export default Contact;