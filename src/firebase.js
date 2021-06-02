import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDTMcu9a6aaNsmjW4Jp843ZxAIGI3-ngO8",
    authDomain: "tiktokclone-161ba.firebaseapp.com",
    projectId: "tiktokclone-161ba",
    storageBucket: "tiktokclone-161ba.appspot.com",
    messagingSenderId: "972492561403",
    appId: "1:972492561403:web:6f495176d858c2fa55495e"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;