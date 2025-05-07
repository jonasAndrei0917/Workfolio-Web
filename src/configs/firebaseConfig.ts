import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxCLlFEkczG8-B9zn7WiaxNTDwxHIvFZ0",
  authDomain: "about-me-60bb7.firebaseapp.com",
  projectId: "about-me-60bb7",
  storageBucket: "about-me-60bb7.firebasestorage.app",
  messagingSenderId: "550581644838",
  appId: "1:550581644838:web:5d9e790f8191a8c86e00e7",
  measurementId: "G-83MYLHZG7C",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
