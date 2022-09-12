// import {SampleInstitues} from "./NoticesData";
import React from "react";
import {  Slide, DialogActions, DialogTitle, DialogContent, DialogContentText, Dialog,  Button, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
// import {  nextLectureDay, dateFormat } from "./countDown";
import DoneAllSharpIcon from '@mui/icons-material/DoneAllSharp';
import { useSelector,useDispatch } from "react-redux";

import { visibility } from "./reduxSlices";


const Transition = React.forwardRef(function Transition(props, ref) { return <Slide direction="up" ref={ref} {...props} />; });

export function ErrorMsg(props) {

    const [detailToggle, setDetailToggle] = React.useState(true); // to toggle dialog box
    const visi=useSelector(state=>state.errVisible.visibility);
    console.log(visi)
    const space = (n) => String.fromCharCode(160).repeat(n);
    const dispatch=useDispatch()

        return (
            <Dialog
                open={visi}
                TransitionComponent={Transition}
                scroll="paper"
                keepMounted
                onClose={() => dispatch(visibility())}
                aria-describedby="alert-dialog-cards-description"
                
            >
                <DialogTitle align="center" ><u>{`ERROR`}</u></DialogTitle>
                <DialogContent>
                    <DialogContentText id="Teacher">
                        {`Message: ${space(2)} ${props.message}`}
                    </DialogContentText>
                    
                </DialogContent>
                <DialogActions>
                    <Button fullWidth variant="outlined" startIcon={<DoneAllSharpIcon />} color="info" onClick={() => dispatch(visibility())}>Acknowledged</Button>
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





