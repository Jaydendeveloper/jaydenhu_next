
import { initializeApp } from "firebase/app";
import { getAnalytics, setUserProperties } from "firebase/analytics";
import {
    getAuth,
  } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyClBmYjWTD4D-a5GR9tKEVnkzpqAM3H3Ps",
    authDomain: "jaydenhu-33683.firebaseapp.com",
    projectId: "jaydenhu-33683",
    storageBucket: "jaydenhu-33683.appspot.com",
    messagingSenderId: "807526322828",
    appId: "1:807526322828:web:e9f192f995f8cd9dede1a9"
  };


export const app = initializeApp(firebaseConfig);  
export const db = getFirestore()
  

const fbconfig = () => {


}

export default fbconfig;