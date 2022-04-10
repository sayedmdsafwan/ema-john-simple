// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYkpMMtL8xfMj6lwEp1CpbLQpTHoJPx2c",
    authDomain: "ema-john-simple-e37d1.firebaseapp.com",
    projectId: "ema-john-simple-e37d1",
    storageBucket: "ema-john-simple-e37d1.appspot.com",
    messagingSenderId: "871855314980",
    appId: "1:871855314980:web:df323b8bc3fb5a637c20b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
