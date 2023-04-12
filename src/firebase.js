// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";


// => 'undefined'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "vocavoca-d0bc9.firebaseapp.com",
    projectId: "vocavoca-d0bc9",
    storageBucket: "vocavoca-d0bc9.appspot.com",
    messagingSenderId: "146124092352",
    appId: "1:146124092352:web:1269282ffa8a06c49c8e25",
    measurementId: "G-H0LHJTXJ73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();