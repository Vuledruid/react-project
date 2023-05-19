// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbGij93Kpkb-ZoOfo1HNV9dFIwtknQNSo",
  authDomain: "react-project-firstproject.firebaseapp.com",
  projectId: "react-project-firstproject",
  storageBucket: "react-project-firstproject.appspot.com",
  messagingSenderId: "86037843263",
  appId: "1:86037843263:web:22a69b8c0915ce858e978a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);