
import React from 'react';
import { Button, Typography } from '@mui/material';
import { Nav } from './components/dataLoader';
import { Articles } from './components/articlesAbabeel';
import { LoginSection } from './components/Login copy';
import FloatingButtons from './components/floatingButttons';
import { LogoAndName } from './components/logoAndName';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logout } from './components/firebaseServer';





export default function Ababeel() {

    let [w, setW] = React.useState(window.innerWidth)
    window.addEventListener('resize', function (event) { setW(window.innerWidth); }, true);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    return (

        <>
            {/* <Grid container direction="row" justifyContent="flex-end" alignItems="bottom" >
                {Nav(w)}
            </Grid> */}
            <LogoAndName />
            <LoginSection/>
            <FloatingButtons data="0" bottom="2em" />
            <FloatingButtons data="1" bottom="6em" />

            <Articles />

           
        </>


    )

}