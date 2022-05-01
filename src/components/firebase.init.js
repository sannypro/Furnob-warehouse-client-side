// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: "furnob-furniture-warehouse.firebaseapp.com",
    projectId: "furnob-furniture-warehouse",
    storageBucket: "furnob-furniture-warehouse.appspot.com",
    messagingSenderId: "336331753636",
    appId: "1:336331753636:web:ab2cd5b1c8472214b2fe31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth