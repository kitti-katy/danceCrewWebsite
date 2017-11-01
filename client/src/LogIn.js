/**
 * Created by kate on 5/30/17.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import * as firebase from "firebase";


const customContentStyle = {
    width: '40%',
    maxWidth: 'none',
};


export default class LogIn extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            open: false,
            fieldsFilled:false,
            signInFieldFilled:false,
            passwordFieldFilled:false,
            email:'',
            password:''
        };

        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.singIn = this.singIn.bind(this)
        this.handleLoginFieldChange= this.handleLoginFieldChange.bind(this)
        this.handlePasswordFieldChange= this.handlePasswordFieldChange.bind(this)
this.checkFields = this.checkFields.bind(this)
    }
    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };
    handleLoginFieldChange(value){

        let email =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)

        let val;
        if(value.length>0&&email){
            this.setState({signInFieldFilled:true,
            email:value})
             val = true}

        else { this.setState({signInFieldFilled:false})
            val = false}
        this.checkFields(val, this.state.passwordFieldFilled)
    }

    handlePasswordFieldChange(value){
let val;

        if(value.length>0){val = true

            this.setState({passwordFieldFilled:true,
            password:value})}
        else {this.setState({passwordFieldFilled:false})
            val = false}

        this.checkFields(this.state.signInFieldFilled, val)
    }

    checkFields(login, password){
        if(login&&password)
            this.setState({fieldsFilled:true})
        else this.setState({fieldsFilled:false})
    }

    singIn(){
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Login"
                primary={true}
                disabled={this.state.fieldsFilled?false:true}
                onTouchTap={this.handleClose}
            />,
        ];

        return (
            <div style={{width: '40%', margin: 'auto'}}>
                <RaisedButton label="Login" onTouchTap={this.handleOpen} />
                <Dialog
                    title="Login                   "
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    contentStyle={customContentStyle}
                >

                    <TextField floatingLabelText="Email" onInput={(ev)=>this.handleLoginFieldChange(ev.target.value)}/> <br />
                    <TextField
                        onInput={(ev)=>this.handlePasswordFieldChange(ev.target.value)}
                        floatingLabelText="Password"
                        type="password"
                    /><br />
                </Dialog>
            </div>
        );
    }
}