// Import the functions you need from the SDKs you need

import { initializeApp ,} from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, } from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc, } from "firebase/firestore";
import { ErrorMsg } from "./errorMessage";
// import fetchProvidersForEmail from "firebase";
import React from "react";
import ReactDOM from 'react-dom';
import {  Slide, DialogActions, DialogTitle, DialogContent, DialogContentText, Dialog,  Button, TableHead, TableBody, TableRow, TableCell, Grid } from "@mui/material";
// import {  nextLectureDay, dateFormat } from "./countDown";
import DoneAllSharpIcon from '@mui/icons-material/DoneAllSharp';
import { useNavigate } from "react-router-dom";


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
  document.createElement("div").setAttribute("id","msg")
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
    ReactDOM.render(
      <h1>Hello</h1>
    ,document.getElementById("msg")
    );
    return "error";
  }
 
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    // alert("logging............")
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    
    

  } catch (err) {
    console.error(err);
     <ErrorMsg message={err.message}/>;
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
};


// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /stories/{storyid} {
//       // Only the authenticated user who authored the document can read or write
//       allow read, write: if request.auth != null && request.auth.uid == resource.data.author;
//     }
//   }
// }
const emailChecker =  (email)=>{
  email="muhammadtalha0247@gmail.com";
    //  let presence=false;
    var user=auth().currentUser;
    db.collection("users").where(email,"==",user.email).get()
     const q=query(collection(db,"users"), where("email","===",email))
    //  const me= await getDocs(q);
    //  me.forEach((em=>console.log(em.id,"=>",doc.data())))
    //  if(q===!undefined)
    //  presence=!presence;
    //  console.log(presence)
     console.log(q)
return (alert(email))
}

const Transition = React.forwardRef(function Transition(props, ref) { return <Slide direction="up" ref={ref} {...props} />; });

// function ErrorMsg(props) {

//     const [detailToggle, setDetailToggle] = React.useState(true); // to toggle dialog box
 

//     const space = (n) => String.fromCharCode(160).repeat(n);

//         return (
//             <Dialog
//                 open={detailToggle}
//                 TransitionComponent={Transition}
//                 scroll="paper"
//                 keepMounted
//                 onClose={() => setDetailToggle(!detailToggle)}
//                 aria-describedby="alert-dialog-cards-description"
                
//             >
//                 <DialogTitle align="center" ><u>{`ERROR`}</u></DialogTitle>
//                 <DialogContent>
//                     <DialogContentText id="Teacher">
//                         {`Message: ${space(2)} ${props.messagae}`}
//                     </DialogContentText>
                    
//                 </DialogContent>
//                 <DialogActions>
//                     <Button fullWidth variant="outlined" startIcon={<DoneAllSharpIcon />} color="info" onClick={() => setDetailToggle(!detailToggle)}>Acknowledged</Button>
//                 </DialogActions>
//             </Dialog>


//         )
//     }


export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  emailChecker
};