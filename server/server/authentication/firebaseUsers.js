/**
 * Created by kate on 10/24/17.
 */
import * as firebase from "firebase";

function initializeFirebase() {
    let config = {
        apiKey: "AIzaSyC6GvwmkLAbfARLip4r3JAVmRLcbrvCcQI",
        authDomain: "klassykatswebsite.firebaseapp.com",
        databaseURL: "https://klassykatswebsite.firebaseio.com",
        projectId: "klassykatswebsite",
        storageBucket: "klassykatswebsite.appspot.com",
        messagingSenderId: "667929397804"
    };
    firebase.initializeApp(config);
}


export function addNewUser(email, password) {
    initializeFirebase()
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        // ...
    });
}