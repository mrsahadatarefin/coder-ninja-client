// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVl3ArSHL1gGBqBuroR6N-7saq2NtWSpM",
  authDomain: "coder-ninja-a.firebaseapp.com",
  projectId: "coder-ninja-a",
  storageBucket: "coder-ninja-a.appspot.com",
  messagingSenderId: "695935266347",
  appId: "1:695935266347:web:b7f1e12242f38ffdc4046e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;