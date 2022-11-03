// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4HNsdegvMokxH3F9bwPB2ADkuPaakMJU",
  authDomain: "jimmy-cooper-local.firebaseapp.com",
  projectId: "jimmy-cooper-local",
  storageBucket: "jimmy-cooper-local.appspot.com",
  messagingSenderId: "764384342563",
  appId: "1:764384342563:web:344eb235ef673819513796"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);