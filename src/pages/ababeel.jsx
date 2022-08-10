
import React from 'react';
import { Button, Typography } from '@mui/material';
import { Nav } from './components/dataLoader';
import { Articles } from './components/articlesAbabeel';
import { LoginSection } from './components/Login copy';
import FloatingButtons from './components/floatingButttons';
import { LogoAndName } from './components/logoAndName';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';





export default function Ababeel() {

    let [w, setW] = React.useState(window.innerWidth)
    window.addEventListener('resize', function (event) { setW(window.innerWidth); }, true);
    const navigate = useNavigate();
    const loginState = useSelector((state)=>state.loginState.state)

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

            {loginState
            ?
            <Button onClick={() => navigate("./login")}>
                <Typography>
                    SIGN OUT
                </Typography>
            </Button>
            :
            <Button onClick={() => navigate("./login")}>
                <Typography>
                    SIGN IN
                </Typography>
            </Button>
}
        </>


    )

}