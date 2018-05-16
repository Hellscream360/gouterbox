import * as firebase from "firebase";

const prodConfig = {
    apiKey: "AIzaSyCiHsamancSucIN4i4AQOupkrbouKQXOas",
    authDomain: "mongouter-36813.firebaseapp.com",
    databaseURL: "https://mongouter-36813.firebaseio.com"
};

const devConfig = {
    apiKey: "AIzaSyCiHsamancSucIN4i4AQOupkrbouKQXOas",
    authDomain: "mongouter-36813.firebaseapp.com",
    databaseURL: "https://mongouter-36813.firebaseio.com"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth
};