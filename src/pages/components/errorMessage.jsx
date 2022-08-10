// import {SampleInstitues} from "./NoticesData";
import React from "react";
import {  Slide, DialogActions, DialogTitle, DialogContent, DialogContentText, Dialog,  Button, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
// import {  nextLectureDay, dateFormat } from "./countDown";
import DoneAllSharpIcon from '@mui/icons-material/DoneAllSharp';


const Transition = React.forwardRef(function Transition(props, ref) { return <Slide direction="up" ref={ref} {...props} />; });

export function ErrorMsg(props) {

    const [detailToggle, setDetailToggle] = React.useState(false); // to toggle dialog box
 

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
                <DialogTitle align="center" ><u>{`ERROR`}</u></DialogTitle>
                <DialogContent>
                    <DialogContentText id="Teacher">
                        {`Message: ${space(2)} ${props.messagae}`}
                    </DialogContentText>
                    
                </DialogContent>
                <DialogActions>
                    <Button fullWidth variant="outlined" startIcon={<DoneAllSharpIcon />} color="info" onClick={() => setDetailToggle(!detailToggle)}>Acknowledged</Button>
                </DialogActions>
            </Dialog>


        )
    }


    // let dd2 = () => {
    //     return ( ((props.direction === "Lectures") && fn1(teacher.Lectures)) || ((props.direction === "Assessments") && fn1(teacher.Assessments)) || ((props.direction === "Assignments") && fn1(teacher.Assignments)))
    // }


    // if (detailToggle)
    //     return (
    //         <>
    //             {ddd()}
    //             {dd2()}
    //         </>
    //     )
    // else
    //  return ddd()


// }





