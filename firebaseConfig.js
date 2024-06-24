// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAetQ3F6SuxdG2UQLHbkTFBEys-I8qbeqg",
  authDomain: "maaott-6a7b1.firebaseapp.com",
  projectId: "maaott-6a7b1",
  storageBucket: "maaott-6a7b1.appspot.com",
  messagingSenderId: "250690139816",
  appId: "1:250690139816:web:f80ff76f43523d06edf49d",
  measurementId: "G-Z9CR55DKC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}

