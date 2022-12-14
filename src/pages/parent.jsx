import React, { useEffect, useState } from 'react';
import { Nav } from "./components/dataLoader";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "./components/firebaseServer";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Grid, Box, Button } from "@mui/material";
import StudentNotices from './components/studentNotices';
import { colorManager } from './components/data';
import { LogoAndName } from './components/logoAndName';
import { BottomBar } from './components/bottomBar'

export default function Students() {

  let [w, setW] = React.useState(window.innerWidth)
  window.addEventListener('resize', function (event) { setW(window.innerWidth); }, true);

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    } 
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]); 

  // return (
  //   <div className="dashboard">
  //      <div className="dashboard__container">
  //       Logged in as
  //        <div>{name}</div>
  //        <div>{user?.email}</div>

  //      </div>
  //    </div>
  // );

  return (
    <Box sx={{ backgroundImage: "url('./images/1 (10).jpg')", backgroundSize: w }}>
      <LogoAndName />
      
      <StudentNotices />
      <Button style={{
        marginBottom:220
      }}
      onClick={logout}>
        Logout
      </Button>
      <BottomBar name={name} email={user?.email} />
     
    </Box>
  )
}
