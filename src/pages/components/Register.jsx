
import {
  Button, Card, Divider, FormControl, FormControlLabel, FormLabel,
  Grid, Input, Typography, Avatar
} from '@mui/material';

import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Radio, { radioClasses } from '@mui/joy/Radio';
import Sheet from '@mui/joy/Sheet';
import RadioGroup from '@mui/joy/RadioGroup';
import React, { useEffect, useState } from "react";
import PasswordChecklist from "react-password-checklist";
import { useAuthState } from "react-firebase-hooks/auth";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, GoogleLogin,db} from "./firebaseServer";
import { getFirestore, query, getDocs, collection, where, addDoc, } from "firebase/firestore";
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import { useDispatch } from 'react-redux';
import {visibility,message} from "./reduxSlices";
import {ErrorMsg} from "./errorMessage"
//import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ghandler =GoogleLogin();
  let [h, setH] = useState(window.innerHeight)
  window.addEventListener('resize', function (event) { setH(window.innerHeight); }, true);
  const logo = [
    "./icons/professor.png",
    "./icons/parents.png",
    "./icons/student.png"
  ]

  
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
    dispatch(message(err.message.slice(err.message.indexOf("/") + 1, err.message.indexOf(")"))));
    dispatch(visibility());
  }
};


  useEffect(() => {
    if (loading) return;
    if (user) navigate("/student");
  }, [user, loading]);





  return (

    <Grid container direction="column"
      sx={{ height: h, alignItems: "center", justifyContent: "center", }}>

        <ErrorMsg />
      <Card
        sx={{ height: "auto", width: "20em", padding: 2, backgroundColor: "rgba(12,9,10,0.1)", }}>

        <Typography variant='h5' sx={{ marginBottom: "1em" }}>
          Create an Account
        </Typography>

        <Grid container item component="form" gap={2}
          sx={{ alignItems: "center", justifyContent: "center", padding: 2, }}>

          <Grid container item
            sx={{
              alignItems: "center",
              justifyContent: "center",
              direction: "Row",
              margin: 0,
              marginBottom: '1em',
              padding: 0,
              width: "auto",
            }} >

            <FormControl
              sx={{ margin: 0, padding: 0, width: "100%" }}>
              {/* Radio Buttons */}
              <RadioGroup defaultValue="Teacher" overlay name="logingBody" row
                sx={{
                  gap: 2,
                  [`& .${radioClasses.checked}`]: { [`& .${radioClasses.action}`]: { borderBottom: '4px solid rgb(0,0,255)', }, },
                  [`& .${radioClasses.radio}`]: { display: 'contents', '& > svg': { position: 'absolute', top: '-0.5em', right: '-0.1em', }, },
                }}>

                {['Teacher', 'Parent', 'Student'].map((value, key) => (

                  <Sheet key={value}
                    sx={{ minWidth: '4em', width: "100%", borderRadius: '1px', }}>

                    <Avatar src={logo[key]} sx={{ height: "auto", width: "1.75em", marginLeft: "0.5em" }} />
                    <Radio id={value} value={value} checkedIcon={<CheckCircleSharpIcon color='primary' />} />
                    <FormLabel htmlFor={value} >{value}</FormLabel>

                  </Sheet>

                ))}

              </RadioGroup>

            </FormControl>
          </Grid>

          {/* //Full Name */}
          <Grid item
            sx={{ margin: 0, width: "100%", }} >

            <Input required type="text" variant="standard" name="Full Name" placeholder="Full Name" id="FullName" value={name} onChange={(e) => setName(e.target.value)}
              sx={{ margin: 0, width: "100%", }} />

          </Grid>

          {/* Email Id */}
          <Grid item
            sx={{ margin: 0, width: "100%", }} >

            <Input required type="text" variant="standard" name="User-name" placeholder="Email ID" id="loginID" value={email} onChange={(e) => setEmail(e.target.value)}
              sx={{ margin: 0, width: "100%", }} />

          </Grid>

          {/* Set Password */}
          <Grid item
            sx={{ margin: 0, width: "100%", }} >

            <Input required type="password" variant="standard" name="User-password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
              sx={{ margin: 0, width: "100%", }} />

          </Grid>

          {/* Retype Password */}
          
          <Grid item
            sx={{ margin: 0, width: "100%", marginBottom: "1em" }} >

            <Input required type="password" variant="standard" name="retypedpassword" placeholder="Retype Password" id="repassword" value={rePassword} onChange={(e) => setRePassword(e.target.value)}
              sx={{ margin: 0, width: "100%", }} />

          </Grid>

          <Grid item
            sx={{ margin: 0, width: "100%", marginBottom: "1em" }} >

            <PasswordChecklist rules={["minLength", "number", "letter", "match", "nonEmpty"]}
              minLength={8} value={password} valueAgain={rePassword}
              messages={{
                minLength: "Minimum 8 characters are required.",
                number: "Atleast include one number.",
                letter: "Atleast include one letter.",
                match: "Password and Retype-password must be same."
              }}
            />
          </Grid>

          <Grid item
            sx={{ margin: 0, width: "100%", }} >
            <Button value="Login" variant='contained' onClick={() => registerWithEmailAndPassword(name, email, password)}
              sx={{ margin: 0, width: "100%", }}>
              Sign up
            </Button>
          </Grid>

          <Grid item
            sx={{ margin: 0, width: "100%", textAlign: "center" }} >
            <Divider> </Divider>
          </Grid>

          {/* Register with Google */}
          <Grid item
            sx={{ margin: 0, width: "100%", }} >
            <Button variant='outlined' onClick={() => ghandler()}
              sx={{ margin: 0, width: "100%", }} >
              Login with Google
            </Button>
          </Grid>

          {/* <Grid item
            sx={{ margin: 0, width: "100%", textAlign: "center" }} >
            <Divider>Already have an Account? </Divider>
          </Grid> */}

          <Grid item
            sx={{ margin: 0, width: "100%", textAlign: "center" }} >

            <Button variant='outlined' color='secondary' href="login"
              sx={{ margin: 0, width: "100%", }}>
              Login with Email
            </Button>

          </Grid>

        </Grid>


      </Card>
    </Grid>
  );
}
export default Register;