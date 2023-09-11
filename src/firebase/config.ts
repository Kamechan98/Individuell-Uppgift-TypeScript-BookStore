// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZjRbYORGj5_2TP3_eRpdoWsWy-T_5Lcg",
  authDomain: "typescript-c852d.firebaseapp.com",
  projectId: "typescript-c852d",
  storageBucket: "typescript-c852d.appspot.com",
  messagingSenderId: "775080112758",
  appId: "1:775080112758:web:9fe8fe0b0f440b0e54e557",
  measurementId: "G-TB3G92SSLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db } //importera in i filer där de behövs sen 