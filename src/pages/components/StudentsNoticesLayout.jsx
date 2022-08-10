import {SampleInstitues} from "./NoticesData";
import React from "react";
import { Card, Grid, Button, CardContent, Collapse, Box, Table, TableHead, TableBody, TableRow, TableCell, Typography } from "@mui/material";
import { nextLectureDate } from "./countDown";
import { DetailFn } from "./detailDialogBox";
import {colorManager} from "./data";

let student = ["Ababeel EDU 1", "8th"];
let pathing = [];
pathing.push(SampleInstitues.findIndex(a => a.Title === student[0] ? true : false))
pathing.push(SampleInstitues[pathing[0]].Classes.findIndex(a => a.Title === student[1] ? true : false))
let courses = SampleInstitues[pathing[0]].Classes[pathing[1]].Courses;



// Toggle button data for table
let open = new Array([]);
for (let i = 0; i < courses.length; i++) {
    open.push(new Array([]))
    for (let j = 0; j < courses[i].Teachers.length; j++)
        open[i][j] = false;
}





export default function StudentsNoticesLayout(props) {


    // let detailID = new Array();  
    const [toggle, setToggle] = React.useState([...open]); //  X-axis => courses , Y-axis => teachers



    let tableData = courses.map((course, n) => {
        return (
            <Grid item component="article" key={n}  >
                < Card raised sx={{ margin:"5px 15px",minWidth:"200px",width:"100%" , maxWidth: "500px",  backgroundImage: colorManager(1),borderRadius:"11px 30px"  }}>
                    <CardContent sx={{ padding: 1, border: 0 }} >
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ padding: 0, paddingTop: 0 }} >
                                        <Typography variant="h5">
                                            {course.Title}
                                        </Typography>
                                    </TableCell>
                                </TableRow>

                            </TableHead >
                            <TableBody sx={{ border: 0 }}>
                                <TableRow>
                                    <TableCell style={{ padding: 0, paddingTop: 0, border: 0 }} >
                                        <Box>
                                            {course.Teachers.map((teacher, m) => {
                                                 teacher.Lectures.sort((a, b) => Date.parse(a.Date) - Date.parse(b.Date)) 
                                                return (<Table key={m}  >
                                                    <TableHead sx={{ backgroundColor: "rgba(255,255,255,0.3)", border: 0 }}>
                                                        <TableRow sx={{ border: 0 }}>
                                                            <TableCell style={{ padding: 0, paddingTop: 0, border: 0 }} >
                                                                <Button aria-label="expand row" onClick={() => { for (let i = 0; i < course.Teachers.length; i++) (i === m) ? open[n][m] = !open[n][m] : open[n][i] = false; setToggle([...open]) }} >
                                                                    <Typography variant="subtitle2">
                                                                        {teacher.Name}
                                                                    </Typography>
                                                                </Button>
                                                            </TableCell>
                                                            <TableCell align="right" style={{ padding: 0, paddingTop: 0, paddingRight: 7, border: 0, }} >
                                                                <Typography>
                                                                    {(props.data === "Lectures") && nextLectureDate(teacher.Lectures, props.data)}
                                                                    {(props.data === "Assessments") && nextLectureDate(teacher.Assessments, props.data)}
                                                                    {(props.data === "Assignments") && nextLectureDate(teacher.Assignments, props.data)}
                                                                </Typography>
                                                            </TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody sx={{ backgroundColor: "rgba(255,255,255,0.55)", border: 0 }}>
                                                        <TableRow sx={{ marginTop: 1 }}>
                                                            <TableCell colSpan={2} style={{ padding: 0, paddingTop: 0 }} >
                                                                <Collapse in={toggle[n][m]} timeout="auto" unmountOnExit>
                                                                    <Box width="auto" sx={{ margin: 0, padding: 1, height: 190, overflowY: "scroll" }}>
                                                                        <Table aria-label="collapsible table" size="small" >
                                                                            <DetailFn value={teacher} n={n} m={m} direction={props.data} />
                                                                        </Table>
                                                                    </Box>
                                                                </Collapse>
                                                            </TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>)
                                            })}
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card >
            </Grid>
        )
    })




    return tableData;
}


