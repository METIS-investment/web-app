// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtjf3UoaLomI2FnwvVsdrc8BoxtbMTUBs",
  authDomain: "collabothon23fra-1267.firebaseapp.com",
  projectId: "collabothon23fra-1267",
  storageBucket: "collabothon23fra-1267.appspot.com",
  messagingSenderId: "709611040106",
  appId: "1:709611040106:web:46bb65a6f7c8b2b26f4913"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);