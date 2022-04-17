// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv7414kMgeZl4z8FmLk4f4Q1GIhOjbdE4",
  authDomain: "photography-dd031.firebaseapp.com",
  projectId: "photography-dd031",
  storageBucket: "photography-dd031.appspot.com",
  messagingSenderId: "509829463419",
  appId: "1:509829463419:web:bcdf1a29f9932e467511de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default (auth);