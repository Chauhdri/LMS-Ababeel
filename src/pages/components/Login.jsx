//import { useState } from 'react';
import { Button, Card, Divider, FormControl, FormLabel, Grid, Input, Typography, Avatar } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle, db, EmailLogin, GoogleLogin } from "./firebaseServer";
import { signInWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc, } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import { visibility, message, code } from "./reduxSlices";
import { useDispatch } from "react-redux";
import {ErrorMsg} from "./errorMessage";
import Radio, { radioClasses } from '@mui/joy/Radio';
import Sheet from '@mui/joy/Sheet';
import RadioGroup from '@mui/joy/RadioGroup';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';





export function LoginSection() {

  let [h, setH] = useState(window.innerHeight)
  window.addEventListener('resize', function (event) { setH(window.innerHeight); }, true);

  //variables for login id
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const dashboards = ["/teacher", "/parent", "/student"]                                                // dashboard's path to redirect on successful login.
  const logo = ["./icons/professor.png", "./icons/parents.png", "./icons/student.png"];
  const q = document.getElementsByName("loggingBody");                                                  //to detect which role is checked i.e teacher student or parent.
  const dispatch = useDispatch();
  const ghandler = GoogleLogin();                                                                       //login with google
  const logInWithEmailAndPassword = async (email, password) => {                                        //to login 
    try { await signInWithEmailAndPassword(auth, email, password); }
    catch (err) {
      dispatch(message(err.message.slice(err.message.indexOf("/") + 1, err.message.indexOf(")"))));     //to trigger and pass message to error message component.
      dispatch(visibility());
    }
  };

  useEffect(() => {
    if (loading) {
      console.log("Loading.....")
      return;
    }
    if (user) {
      for (let i = 0; i < q.length; i++)
        if (q[i].checked) {
          navigate(dashboards[i])                                                                         // 0:Teacher, 1:Parent, 2:Student
        }

    }
  }, [user, loading]);









  return (

    <Grid container direction="column"
      sx={{ height: h, alignItems: "center", justifyContent: "center", }}>
      <ErrorMsg />

      <Card
        sx={{ height: "auto", width: "20em", padding: 2, backgroundColor: "rgba(12,9,10,0.1)", }}>

        <Typography variant='h5' sx={{ marginBottom: "1em" }}>
          LOGIN
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
              <RadioGroup defaultValue="Teacher" overlay name="loggingBody" row
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

          {/* Email Id */}
          <Grid item
            sx={{ margin: 0, width: "100%", }} >

            <Input required type="text" variant="standard" name="User-name" placeholder="Email ID" id="loginID" value={email} onChange={(e) => setEmail(e.target.value)}
              sx={{ margin: 0, width: "100%", }} />


          </Grid>

          {/* Set Password */}
          <Grid item
            sx={{ margin: 0, width: "100%", }} >

            <Input type="password" variant="standard" name="User-password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
              sx={{ margin: 0, width: "100%", }} />


          </Grid>


          <Grid item
            sx={{ margin: 0, width: "100%", }} >

            <Button value="Login" variant='contained' onClick={() => logInWithEmailAndPassword(email, password)}
              sx={{ margin: 0, width: "100%", }} >
              Let me In...
            </Button>
          </Grid>

          {/* Signin with Google */}
          <Grid item
            sx={{ margin: 0, width: "100%", }} >
            <Button variant='contained' onClick={() => ghandler()}
              sx={{ margin: 0, width: "100%", }} >
              Sign in with Google
            </Button>
          </Grid>


          <Grid item
            sx={{ margin: 0, width: "100%", textAlign: "center" }} >
            <Divider>OR</Divider>
          </Grid>

          <Grid item
            sx={{ margin: 0, width: "100%", textAlign: "center" }} >

            <Button variant='outlined' color='secondary' href="Register"
              sx={{ margin: 0, width: "100%", }}>
              Create an Account
            </Button>

          </Grid>

          <Grid item
            sx={{ margin: 0, width: "100%", textAlign: "center" }} >

            <Button variant='outlined' color='error' href="reset"
              sx={{ margin: 0, width: "100%", }}>
              Forget Password
            </Button>

          </Grid>


        </Grid>
      </Card>
    </Grid>
  )
}




