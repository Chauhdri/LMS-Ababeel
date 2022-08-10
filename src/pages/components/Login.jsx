//import { useState } from 'react';
import {
  Button, Card, Divider, FormControl, FormControlLabel, FormLabel,
  Grid, Input, Typography, Avatar
} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebaseServer";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Radio, { radioClasses } from '@mui/joy/Radio';
import Sheet from '@mui/joy/Sheet';
import RadioGroup from '@mui/joy/RadioGroup';
import Student from '../students';
import Parent from '../parent';
import Teacher from '../teacheer';

import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import Dashboard from '../dashboard';

//import "./Login.css";
// import "./formsTheme.css";
// import loginHandler from './handler';


export function LoginSection() {


  let [h, setH] = useState(window.innerHeight)
  window.addEventListener('resize', function (event) { setH(window.innerHeight); }, true);

  //variables for login id
  const [login, setLogin] = useState({ LoginID: "", password: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const dashboards = ["Teacher","Parent","Student"]

  const q = document.getElementsByName("loggingBody");

  useEffect(() => {
    if (loading) {
      console.log("Loading.....")
      return;
    }
    if (user) {
      for (let i = 0; i < q.length; i++)
        if (q[i].checked) {
          <Dashboard role={i}/> // 0:Teacher, 1:Parent, 2:Student
        }
          
        else (alert("At least select one role (i.e. Teacher) "))
      navigate("/student")
    }
  }, [user, loading]);

  function loginHandler() {
    logInWithEmailAndPassword(email, password)
    // for (let i = 0; i <q.length; i++)
    // if(q[i].checked) {
    //   navigate("/"+dashboards[i])
    // }
    return (
      alert("job done")

    )
  }


  const logo = [
    "./icons/professor.png",
    "./icons/parents.png",
    "./icons/student.png"
  ]




  return (

    <Grid container direction="column"
      sx={{ height: h, alignItems: "center", justifyContent: "center", }}>

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

            <Button type="submit" value="Login" variant='contained' onClick={() => loginHandler()}
              sx={{ margin: 0, width: "100%", }} >
              Let me In...
            </Button>
          </Grid>

          {/* Signin with Google */}
          <Grid item
            sx={{ margin: 0, width: "100%", }} >
            <Button variant='contained' onClick={signInWithGoogle}
              sx={{ margin: 0, width: "100%", }} >
              Register with Google
            </Button>
          </Grid>


          <Grid item
            sx={{ margin: 0, width: "100%", textAlign: "center" }} >
            <Divider>OR</Divider>
          </Grid>

          <Grid item
            sx={{ margin: 0, width: "100%", textAlign: "center" }} >

            <Button variant='outlined' color='secondary' href="/Register"
              sx={{ margin: 0, width: "100%", }}>
              Create an Account
            </Button>

          </Grid>

          <Grid item
            sx={{ margin: 0, width: "100%", textAlign: "center" }} >

            <Button variant='outlined' color='error' href="/reset"
              sx={{ margin: 0, width: "100%", }}>
              Forget Password
            </Button>

          </Grid>


        </Grid>
      </Card>
    </Grid>
  )
}




