import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV7d3wXfJUeYxZwvYtnidZHtcgvTLFGoY",
  authDomain: "apimusic-c2066.firebaseapp.com",
  projectId: "apimusic-c2066",
  storageBucket: "apimusic-c2066.appspot.com",
  messagingSenderId: "482635646574",
  appId: "1:482635646574:web:3a327348fd5fbdf2ac487f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();