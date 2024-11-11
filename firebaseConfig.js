// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgEiTqxhDGXBzlt31B5vC-aeMKNNBnUwc",
    authDomain: "barber-1ac3b.firebaseapp.com",
    databaseURL: "https://barber-1ac3b-default-rtdb.firebaseio.com",
    projectId: "barber-1ac3b",
    storageBucket: "barber-1ac3b.appspot.com",
    messagingSenderId: "796247123981",
    appId: "1:796247123981:web:b71d26a4ef70144d6a4d44",
    measurementId: "G-G5JY4MXG8T"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();
const db = firebase.firestore();