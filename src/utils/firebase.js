// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1BBGw5tkXO3xsaYJoXJRoVAx4fV79x8o",
  authDomain: "netflixgpt-clone-c0d88.firebaseapp.com",
  projectId: "netflixgpt-clone-c0d88",
  storageBucket: "netflixgpt-clone-c0d88.appspot.com",
  messagingSenderId: "819577845294",
  appId: "1:819577845294:web:8f2efb2965ccf11136d1bf",
  measurementId: "G-V7MEKL9JNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();