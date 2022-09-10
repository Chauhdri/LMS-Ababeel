// Import the functions you need from the SDKs you need

import { initializeApp, } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, } from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc, } from "firebase/firestore";
import React from "react";
import ReactDOM from 'react-dom';
import { Navigate } from "react-router-dom";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG7MCUJ_WrEaW1cFB3QQSP-RhS-ESQQDM",
  authDomain: "ababeel-9bc79.firebaseapp.com",
  projectId: "ababeel-9bc79",
  storageBucket: "ababeel-9bc79.appspot.com",
  messagingSenderId: "140600617911",
  appId: "1:140600617911:web:56e810f801054197115632",
  measurementId: "G-2J1C4PW4QB"
};

// const navigate = useNavigate();

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
// function ErrorDetail (err) {

// }

const signInWithGoogle = async () => {
  document.createElement("div").setAttribute("id", "msg")
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }

};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
  Navigate("./")
};


// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /stories/{storyid} {
//       // Only the authenticated user who authored the document can read or write
//       allow read, write: if request.auth != null && request.auth.uid == resource.data.author;
//     }
//   }
// }



export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};