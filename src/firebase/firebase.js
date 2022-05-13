
import { initializeApp } from "firebase/app";
import {   getAuth   } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD_S_Q9dNvdU46C6sVEvKr9oIjLo2YHlsg",
  authDomain: "challenge6binar-39ea1.firebaseapp.com",
  projectId: "challenge6binar-39ea1",
  storageBucket: "challenge6binar-39ea1.appspot.com",
  messagingSenderId: "838908423986",
  appId: "1:838908423986:web:af4bc492c3f7d0c109712b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

// gajadi dipake ges