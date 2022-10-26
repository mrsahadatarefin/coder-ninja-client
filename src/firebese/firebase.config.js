// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2c8GkZeLz8EYeYiz92bLsbxFLdRIuzFc",
  authDomain: "coder-ninja.firebaseapp.com",
  projectId: "coder-ninja",
  storageBucket: "coder-ninja.appspot.com",
  messagingSenderId: "478922394857",
  appId: "1:478922394857:web:a40eb0816c7566c185f478"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;