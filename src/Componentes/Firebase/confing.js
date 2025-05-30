
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDpNJMeSUmJiwRMb_qnVa_5v19byfUH8bU",
  authDomain: "pokeapi-619ac.firebaseapp.com",
  projectId: "pokeapi-619ac",
  storageBucket: "pokeapi-619ac.firebasestorage.app",
  messagingSenderId: "569409953583",
  appId: "1:569409953583:web:b037b982bc1e63b2870bda",
  measurementId: "G-JY2HTQJCVZ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);