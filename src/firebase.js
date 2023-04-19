// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh5la64Ka3QMR3dQL860uzFhp6vg80gv8",
  authDomain: "m-city-c6612.firebaseapp.com",
  projectId: "m-city-c6612",
  storageBucket: "m-city-c6612.appspot.com",
  messagingSenderId: "522757894806",
  appId: "1:522757894806:web:1ce3e29683d3812c5b48b7",
  measurementId: "G-M1CXJFKC0Y",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase;
