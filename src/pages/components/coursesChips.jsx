
import { Grid, Box, ListItem, Chip, Paper } from '@mui/material'
import React from 'react';
import { courses } from "./NoticesData";
import {colorManager} from "./data"




export function CoursesChips(props) {
    

    const course = courses("Ababeel EDU 1", "8th");
//    const overflowHandle= ()=> {
//        document.getElementById("chipBase").style.height="6em"
//    }

    return (
        <Grid container item color="transparent" sx={{
            paddingTop: "8em",
            maxWidth:"90%"

        }} >
            <Paper component="ul"
                    variant="elevation" 
                    elevation={1}
                    id="chipBase"
            sx={{
                listStyle: 'none',
                display: 'flex',
                borderRadius:"50px 50px",
                height:"2.5em",
                p: 0,
                overflowX:"hidden",
                backgroundColor:"rgba(180,180,180,0.3)",
                border:"2px double grey"


            }}  >

                <ListItem component="h1" 
                sx={{
                    textJustify: "center",
                    position:"relative",
                    textAlign:"center",
                    margin: "0px",
                    backgroundImage: colorManager(6),
                }}>
                    Courses
                </ListItem>

                {course.map((data) => {


                    return (
                        <ListItem key={data.ID} sx={{ m: 0 }}>
                            <Chip sx={{
                                m: 0,
                                p:0,
                                backgroundImage: colorManager(0),
                            }}

                                label={data.Title}
                               
                               />
                        </ListItem>
                    );
                })}


            </Paper>
        </Grid>
    )
}

