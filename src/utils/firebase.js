// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN9ee4mS9H6XTLBA6qS4OymJn21QPsVbA",
  authDomain: "netflixgpt-8f9d3.firebaseapp.com",
  projectId: "netflixgpt-8f9d3",
  storageBucket: "netflixgpt-8f9d3.appspot.com",
  messagingSenderId: "512675419800",
  appId: "1:512675419800:web:9b81eebbb5c9f57114e2ed",
  measurementId: "G-BLXZ7X4WSK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
