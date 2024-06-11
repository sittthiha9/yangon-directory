// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPQ6rNmr2_oDwYCkBnbBOdvMgbKivLbfE",
  authDomain: "yangon-directory-40308.firebaseapp.com",
  projectId: "yangon-directory-40308",
  storageBucket: "yangon-directory-40308.appspot.com",
  messagingSenderId: "367412636797",
  appId: "1:367412636797:web:89b5c802a4b1383552d514",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
