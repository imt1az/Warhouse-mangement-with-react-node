// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1sOyL6DaWSZfawyiEPAuSFi-klUA9vUA",
  authDomain: "warhouse-mongo-node.firebaseapp.com",
  projectId: "warhouse-mongo-node",
  storageBucket: "warhouse-mongo-node.appspot.com",
  messagingSenderId: "893270779960",
  appId: "1:893270779960:web:27de7c0359c782931cdecd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;