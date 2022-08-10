import {SampleInstitues} from "./NoticesData";
import React from "react";
import {  Slide, DialogActions, DialogTitle, DialogContent, DialogContentText, Dialog,  Button, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import {  nextLectureDay, dateFormat } from "./countDown";
import DoneAllSharpIcon from '@mui/icons-material/DoneAllSharp';






let student = ["Ababeel EDU 1", "8th"];
let pathing = [];
pathing.push(SampleInstitues.findIndex(a => a.Title === student[0] ? true : false))
pathing.push(SampleInstitues[pathing[0]].Classes.findIndex(a => a.Title === student[1] ? true : false))
let courses = SampleInstitues[pathing[0]].Classes[pathing[1]].Courses;

const Transition = React.forwardRef(function Transition(props, ref) { return <Slide direction="up" ref={ref} {...props} />; });

export function DetailFn(props) {

    const [detailToggle, setDetailToggle] = React.useState(false); // to toggle dialog box
    const [detailPath, setDetailPath] = React.useState([0, 0, 0]); //to link description dialog box with pressed button in table


    let ddd = () => {
        let path = 0;
        ((props.direction === "Lectures") && (path = courses[detailPath[0]].Teachers[detailPath[1]].Lectures[detailPath[2]])) ||
        ((props.direction === "Assignments") && (path = courses[detailPath[0]].Teachers[detailPath[1]].Assignments[detailPath[2]])) ||
        ((props.direction === "Assessments") && (path = courses[detailPath[0]].Teachers[detailPath[1]].Assessments[detailPath[2]]));
        const space = (n) => String.fromCharCode(160).repeat(n);

        return (
            <Dialog
                open={detailToggle}
                TransitionComponent={Transition}
                scroll="paper"
                keepMounted
                onClose={() => setDetailToggle(!detailToggle)}
                aria-describedby="alert-dialog-cards-description"
                
            >
                <DialogTitle align="center" ><u>{`DESCRIPTION`}</u></DialogTitle>
                <DialogContent>
                    <DialogContentText id="Teacher">
                        {`Teacher: ${space(2)} ${courses[detailPath[0]].Teachers[detailPath[1]].Name}`}
                    </DialogContentText>
                    <DialogContentText id="Subject">
                        {`Subject: ${space(3)} ${courses[detailPath[0]].Title}`}
                    </DialogContentText>
                    <DialogContentText id="Topic">
                        {`Topic:   ${space(6)} ${path.Topic}`}
                    </DialogContentText>
                    <DialogContentText id="TopicID">
                        {`ID:      ${space(12)} ${path.ID}`}
                    </DialogContentText>
                    <DialogContentText id="Date">
                        {`Date:     ${space(8)} ${(new Date(path.Date)).toDateString()}`}
                    </DialogContentText>
                    <DialogContentText id="Time">
                        {`Time:    ${space(7)} ${(path.Time)} Hr`}
                    </DialogContentText>
                    <DialogContentText id="Books">
                        {`Books:   ${space(5)} ${path.Books}`}
                    </DialogContentText>
                    <DialogContentText id="Notes">
                        {`Notes:   ${space(6)} ${path.Notes}`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button fullWidth variant="outlined" startIcon={<DoneAllSharpIcon />} color="info" onClick={() => setDetailToggle(!detailToggle)}>Acknowledged</Button>
                </DialogActions>
            </Dialog>


        )
    }

    const teacher = props.value;
    const n = props.n;
    const m = props.m;


    const fn1 = (a,index) => {
        return (
            <>
                <TableHead key={index}>
                    <TableRow >
                        <TableCell style={{ padding: 1, border: 0 }} >Date</TableCell>
                        <TableCell align="center" style={{ padding: 1, border: 0 }} >Time&#160;(hr)</TableCell>
                        <TableCell align="right" style={{ padding: 1, border: 0 }} >Remaining&#160;Time</TableCell>
                    </TableRow>
                </TableHead>

                {a.map((value, o) => {
                    return (
                        <TableBody key={o + "Tbody"}>
                            <TableRow >
                                <TableCell colSpan={3} style={{ padding: 1, paddingTop: 0, border: 0 }} >
                                    <Button sx={{ color: "rgb(0,0,0)", paddingBottom: 0, paddingLeft: 0 }} onClick={() => { setDetailToggle(true); setDetailPath([n, m, o]); }} >
                                        {value.Topic}
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell style={{ padding: 1, border: 0 }} >{dateFormat((props.direction === "Assignments" && Date.parse(value["Last Date"])) || Date.parse(value.Date)) }</TableCell>
                                <TableCell align="center" style={{ padding: 1, border: 0 }} >{props.direction === "Assignments" ? (value.Marking ? "Yes" : "No") : value.Time}</TableCell>
                                <TableCell align="right" style={{ padding: 1, border: 0 }} >{(props.direction === "Assignments" && nextLectureDay(value["Last Date"])) || nextLectureDay(value.Date + ' ' + value.Time)}</TableCell>
                            </TableRow >
                        </TableBody>
                    ) })}
            </>
        ) }



    let dd2 = () => {
        return ( ((props.direction === "Lectures") && fn1(teacher.Lectures)) || ((props.direction === "Assessments") && fn1(teacher.Assessments)) || ((props.direction === "Assignments") && fn1(teacher.Assignments)))
    }


    if (detailToggle)
        return (
            <>
                {ddd()}
                {dd2()}
            </>
        )
    else return dd2()


}





