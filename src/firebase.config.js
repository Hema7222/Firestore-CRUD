
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfKqsmjZLZlg9CE-gszc8jUZ4fBUx0Tq0",
  authDomain: "react-crud-9ba4a.firebaseapp.com",
  projectId: "react-crud-9ba4a",
  storageBucket: "react-crud-9ba4a.appspot.com",
  messagingSenderId: "967895914059",
  appId: "1:967895914059:web:5c4047e992fe13dc1f1fce",
  measurementId: "G-WZNN3XSF03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);