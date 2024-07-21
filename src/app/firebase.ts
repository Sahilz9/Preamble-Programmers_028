// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8SLy_lhSlcAksgFVnVUmEpxKbfq85FOo",
  authDomain: "preamble-resume-builder.firebaseapp.com",
  projectId: "preamble-resume-builder",
  storageBucket: "preamble-resume-builder.appspot.com",
  messagingSenderId: "190836752767",
  appId: "1:190836752767:web:ed4632fad6e58d23709a4a",
  measurementId: "G-RMKM526MCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export {app, auth};