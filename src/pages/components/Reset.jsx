

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
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "./firebaseServer";
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
//import "./Reset.css";


function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  let [h, setH] = useState(window.innerHeight)
  window.addEventListener('resize', function (event) { setH(window.innerHeight); }, true);
  const logo = [
    "./icons/professor.png",
    "./icons/parents.png",
    "./icons/student.png"
  ]


  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (

    <Grid container component="form" direction="column"
      sx={{ height: h, alignItems: "center", justifyContent: "center", }}>

      <Card
        sx={{ height: "auto", width: "20em", padding: 2, backgroundColor: "rgba(12,9,10,0.1)", }}>

        <Typography variant='h5' sx={{ marginBottom: "1em" }}>
          Create an Account
        </Typography>

        <Grid container item component="form" gap={2}
          sx={{ alignItems: "center", justifyContent: "center", padding: 2, }}>

          <FormControl
            sx={{ margin: 0, padding: 0, width: "100%" }}>

            {/* Email Id */}
            <Grid item
              sx={{ margin: 0, width: "100%", }} >

              <Input required type="text" variant="standard" name="User-name" placeholder="Email ID" id="loginID" value={email} onChange={(e) => setEmail(e.target.value)}
                sx={{ margin: 0, width: "100%", paddingBottom: "0.5em" }} />

            </Grid>


            <Grid item
              sx={{ margin: 0, width: "100%", paddingBottom: "1em", paddingTop: "0.5em" }} >
              <Button type="submit" value="Login" variant='contained' onClck={() => sendPasswordReset(email)}
                sx={{ margin: 0, width: "100%", }}>
                Send Email
              </Button>
            </Grid>


            <Grid item
              sx={{ margin: 0, width: "100%", textAlign: "center" }} >
              <Divider>OR</Divider>
            </Grid>

          </FormControl>

          <Grid item
            sx={{ margin: 0, width: "100%", textAlign: "center" }} >

            <Button variant='outlined' color='secondary' href="/Register"
              sx={{ margin: 0, width: "100%", }}>
              Create an Account
            </Button>

          </Grid>
        </Grid>
      </Card >
    </Grid >
  );
}
export default Reset;
