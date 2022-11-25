// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3-ecgz8gsjV74RsnBRMx7iksb9V6em0A",
    authDomain: "awel-headphone-auth.firebaseapp.com",
    projectId: "awel-headphone-auth",
    storageBucket: "awel-headphone-auth.appspot.com",
    messagingSenderId: "577757901767",
    appId: "1:577757901767:web:fdd8dd51c6d38ea7a6dfe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
