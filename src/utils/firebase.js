// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6SWTSqNBxYb4N7yIxcuI0hjO4eoYIGcE",
  authDomain: "netflixgpt-8166e.firebaseapp.com",
  projectId: "netflixgpt-8166e",
  storageBucket: "netflixgpt-8166e.firebasestorage.app",
  messagingSenderId: "652465186965",
  appId: "1:652465186965:web:450f3b312a244c0276539c",
  measurementId: "G-GNM5M1BZV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();