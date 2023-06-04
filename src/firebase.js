// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOIb0N-asftrSinP8vX3cexuu7avvTGoc",
    authDomain: "teb-zajencza.firebaseapp.com",
    projectId: "teb-zajencza",
    storageBucket: "teb-zajencza.appspot.com",
    messagingSenderId: "196208782298",
    appId: "1:196208782298:web:ff907c05458e04379deee3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();

export const db = getFirestore(app);
