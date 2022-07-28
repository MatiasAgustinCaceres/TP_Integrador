// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIoaYZf-Mxl_UrwkmRtL2NX4sO6KriWbw",
  authDomain: "golb-f426e.firebaseapp.com",
  projectId: "golb-f426e",
  storageBucket: "golb-f426e.appspot.com",
  messagingSenderId: "117089272626",
  appId: "1:117089272626:web:f9e425b32d0dc4d9eecd2b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Create a root reference
export const storage = getStorage();
