//import { useState } from 'react';
import {
  Card, Button, Grid, Input, Typography, CardContent, CardActions, IconButton,
  FormControl, Avatar, FormLabel, InputLabel, MenuItem, Select, Collapse, Box
} from '@mui/material';
import { styled } from '@mui/material/styles';

//------------------
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logout, GoogleLogin } from "./firebaseServer";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { visibility, message } from "./reduxSlices";
import { useDispatch } from "react-redux";
import { ErrorMsg } from './errorMessage';
import Sheet from '@mui/joy/Sheet';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';

//import "./Login.css";



export function LoginSection() {


  let [h, setH] = useState(window.innerHeight)
  window.addEventListener('resize', function (event) { setH(window.innerHeight); }, true);

  //variables for login id
  //const [login, setLogin] = useState({LoginID: "",password: ""});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [expanded, setExpanded] = React.useState(false);
  const logo = ["/icons/professor.png", "/icons/parents.png", "/icons/student.png"];
  const dashboards = ["/teacher", "/parent", "/student"]                                                // dashboard's path to redirect on successful login.
  const q = document.getElementsByName("loggingBody");                                                  //to detect which role is checked i.e teacher student or parent.
  const navigate = useNavigate();
  const ghandler = GoogleLogin();
  const dispatch = useDispatch();
  const logInWithEmailAndPassword = async (email, password) => {                                       //to login 
    try { await signInWithEmailAndPassword(auth, email, password); }
    catch (err) {
      dispatch(message(err.message.slice(err.message.indexOf("/") + 1, err.message.indexOf(")"))));     //to trigger and pass message to error message component.
      dispatch(visibility());
    }
  };
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


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
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // function changeHandler(event) {
  //   setLogin(event.target.name = 2)
  //   //(event)=> setLogin(event.target.value)

  // }

  const [role, setRole] = React.useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
  };


  return (

    <Grid container
      component="form"
      direction="column"
      sx={{
        height: h,
        padding: 5,
        gridFlow: "row",
        alignItems: "end",
        justifyContent: "end",
        backgroundImage: "linear-gradient(to bottom,rgba(0,219,222,0.4),rgba(252,0,255,0.4))",
      }}>
      <ErrorMsg />

      <Grid item sx={{ width: "25em" }}
      >
        {/* backgroundImage:"radial-gradiant(#FC00FF,#00DBDE)" */}
        <Card raised sx={{ backgroundImage: "linear-gradient(rgba(160,150,00,0.1),rgba(60,60,00,0.3))", opacity: 0.8 }} >

          <Box sx={{ display: 'flex', margin: 0, padding: 0,height:"5em" }}>
            <CardActions sx={{ display: 'flex', flexDirection: 'column', padding: 0,margin:0, minWidth: "6em",  }} >

              <FormControl
                sx={{ margin: 0, padding: 0, width: "100%", }}>
                {/* Radio Buttons */}

                
                   {/* <InputLabel id="role">Role</InputLabel> */}

                  <Select
                    variant="standard"
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={role}
                    size="small"
                    label="Role"
                    onChange={handleChange}
                    // sx={{  margin: 1, padding: 1, border: 0, height:"inherit",width:"inherit"}}
                  >
                    <RadioGroup defaultValue="Teacher" overlay name="loggingBody" column
                  sx={{
                    gap: 2, margin: "auto",
                    [`& .${radioClasses.checked}`]: { [`& .${radioClasses.action}`]: {}, },
                    [`& .${radioClasses.radio}`]: { display: 'contents', '& > svg': { position: 'absolute', top: '-0.1em', right: '-0.2em', }, },
                  }}>
                    {['Teacher', 'Parent', 'Student'].map((value, key) => (
                      // <MenuItem value={value}  >

                        <Sheet key={value}
                          sx={{ minWidth: '3.5em', width: "auto", borderRadius: '1px', }}>
                          
                          <Avatar src={window.location+logo[key]} sx={{ height: "auto", width: "1.5em", marginLeft: "0.5em" }} />
                          <Radio id={value} value={value} checkedIcon={<CheckCircleSharpIcon color='primary' />} />
                          <FormLabel htmlFor={value} sx={{ color: "black", fontSize: "0.9em", textAlign: "center" }} >{value}</FormLabel>


                         </Sheet>
                      // </MenuItem>
                    ))}
                </RadioGroup>
                  </Select>

              </FormControl>
            </CardActions>
            <CardContent component={"div"} sx={{ width: "100%", padding: "1em", }} >


              <Input
                type="text"
                name="User-name"
                variant="standard"
                placeholder="Email ID"
                id="loginID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{ width: "100%" }}
                autoComplete="off"
              >
              </Input>

              <Input
                type="password"
                variant="standard"
                name="User-password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                sx={{ width: "100%" }}
                autoComplete="off"
              >
              </Input>
            </CardContent>
          </Box>
          <CardActions sx={{ width: "inherit", paddingBottom: 1 }}>


            {user
              ?
              (<Button fullWidth
                value="Login"
                variant='contained'
                onClick={logout}>
                LOGOUT
              </Button>)
              : <Button fullWidth
                value="Login"
                variant='contained'
                onClick={() => logInWithEmailAndPassword(email, password)}
              >Login
              </Button>
            } |
            <IconButton fullWidth
              variant='outlined'
              color='secondary'
              size="small"
              className="login__btn login__google" onClick={() => ghandler()}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="auto" height="1.8em"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" /></svg>
            </IconButton>


            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardActions sx={{ paddingBottom: 0 }} >

            </CardActions>
            <CardActions sx={{ paddingBottom: 0 }}>
              <Button fullWidth
                variant='outlined'
                color='secondary'
                size="small" href="/reset">RESET PASSWORD</Button>
            </CardActions>
            <CardActions sx={{ paddingBottom: 1 }}>
              <Button fullWidth
                variant='outlined'
                color='secondary'
                size="small" href="/register">SIGNUP</Button>

            </CardActions>
          </Collapse>
        </Card>
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
