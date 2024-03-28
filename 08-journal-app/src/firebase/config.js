// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdJdUsrjr2wuHDpwA-wJkRXJbK8jDmgVU",
  authDomain: "curso-react-3c637.firebaseapp.com",
  projectId: "curso-react-3c637",
  storageBucket: "curso-react-3c637.appspot.com",
  messagingSenderId: "1030041693166",
  appId: "1:1030041693166:web:e1f5f4d2aa8b677d587cff"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );