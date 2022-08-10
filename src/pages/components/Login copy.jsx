//import { useState } from 'react';
import { autocompleteClasses, Button, Grid, Input, Typography } from '@mui/material';

//------------------
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebaseServer";
import { useAuthState } from "react-firebase-hooks/auth";
//import "./Login.css";



export function LoginSection() {


  let [h, setH] = useState(window.innerHeight)
  window.addEventListener('resize', function (event) { setH(window.innerHeight); }, true);

  //variables for login id
  //const [login, setLogin] = useState({LoginID: "",password: ""});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  // function changeHandler(event) {
  //   setLogin(event.target.name = 2)
  //   //(event)=> setLogin(event.target.value)

  // }

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/student");
  }, [user, loading]);

  return (

    <Grid container
      component="form"
      direction="column"
      sx={{
        height: h,
        padding: 10,
        gridFlow: "row",
        alignItems: "end",
        justifyContent: "end",
        backgroundColor: "rgba(12,9,10,0.1)",
      }}>
      <Grid item
        sx={{

        }} >
        <Input
          type="text"
          variant="standard"
          name="User-name"
          placeholder="Email ID"
          id="loginID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}


        >
        </Input>
      </Grid> <br />
      <Grid item>
        <Input
          type="password"
          variant="standard"
          name="User-password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          //value={login.password}
          //onChange={changeHandler}
          required={true}
        >
        </Input>
      </Grid>
      <Grid item >
        <Typography>
          <Button
            type="submit"
            value="Login"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >Login
          </Button>
          |
          <Button className="login__btn login__google"
            onClick={signInWithGoogle}>
            Login with Google
          </Button>
          </Typography>
          <Typography>
            <Link to="/reset">Forgot Password</Link>
          </Typography>
          <Typography>
            Don't have an account? <Link to="/register">Register</Link> now.
          </Typography>
          <Typography>
          <Button href="/student">
            New Account
          </Button>
        </Typography>
      </Grid>
    </Grid>
  )
}

//------------------------------------------------------------


// function Login() {




//   return (
//     <div className="login">
//       <div className="login__container">
//         <input
//           type="text"
//           className="login__textBox"
//         />
//         <input
//           type="password"
//           className="login__textBox"
//           placeholder="Password"
//         />
//         <button
//           className="login__btn"
//         >
//           Login
//         </button>
//         <button className="login__btn login__google" onClick={signInWithGoogle}>
//           Login with Google
//         </button>
//         <div>
//           <Link to="/reset">Forgot Password</Link>
//         </div>
//         <div>
//           Don't have an account? <Link to="/register">Register</Link> now.
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Login;

//--------------------------
