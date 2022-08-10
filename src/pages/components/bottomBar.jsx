import { AppBar, Paper, Typography } from "@mui/material";
import { colorManager } from "./data";





export function BottomBar(props) {

    return (
        <AppBar position="fixed" bottom="0%" color="transparent"
            sx={{
                top: 'auto',
                bottom: 0,
                height:"5.2em",
                backgroundImage:colorManager(8,20)

            }}>
                <Paper component="img" src="./default-profile-icon.jpg" sx={{
                    border:"1px double grey",
                    borderRadius:"50px 50px",
                    height:"6.8em",
                    width:"6em",
                    position:"fixed",
                    left:"1.5em",
                    bottom:"1.5em",
                    overflow:"hidden",

                    
                }} >

                </Paper>
                <Typography variant="h6" sx={{
                    position:"relative",
                    left:"6.5em",
                    marginBottom:"-0.3em",
                    color:"black",
                    p:0,

                }}>
                {props.name} 
                </Typography>
                <Typography variant="subtitle1" sx={{
                    position:"relative",
                    left:"8.1em",
                    marginBottom:"-0.4em",
                    color:"black",
                    m:0,
                    p:0,

                }}>
                    S. M. Govt. Science College
                </Typography>
                
                <Typography variant="caption" sx={{
                    position:"relative",
                    left:"10.9em",
                    color:"black",
                    m:0,
                    p:0,

                }}>
                    12th Class, 5 Subjects
                </Typography>
        </AppBar>
    )
}


