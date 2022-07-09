import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2uJAqcqHEzTQOJ-Af_OuCNVQnQZoD8ww",
  authDomain: "house-marketplace-app-e21f2.firebaseapp.com",
  projectId: "house-marketplace-app-e21f2",
  storageBucket: "house-marketplace-app-e21f2.appspot.com",
  messagingSenderId: "125503457956",
  appId: "1:125503457956:web:1b5be2fb598b16232bb431"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();