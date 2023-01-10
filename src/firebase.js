// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBbghm_rXBNfyVfWNOW1_kZpLzmuv1i98",
  authDomain: "todolist-bb83e.firebaseapp.com",
  projectId: "todolist-bb83e",
  storageBucket: "todolist-bb83e.appspot.com",
  messagingSenderId: "261685977314",
  appId: "1:261685977314:web:c6b2736345cdf4f3b33ebb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);