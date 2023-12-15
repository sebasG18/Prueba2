import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";

///SOLUCIÓN DE WARNING
  import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'; 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDt7F3BNzfuKrZKW5WpoaM9gHQkVx0fSH8",
    authDomain: "prueba-sg.firebaseapp.com",
    databaseURL: "https://prueba-sg-default-rtdb.firebaseio.com",
    projectId: "prueba-sg",
    storageBucket: "prueba-sg.appspot.com",
    messagingSenderId: "927717759686",
    appId: "1:927717759686:web:de77f574180f1cb185d5c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export const auth = getAuth(app)

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const storage = getStorage(app)
