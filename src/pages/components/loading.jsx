
import React from "react";
import {  Slide, DialogActions, DialogTitle, DialogContent, DialogContentText, Dialog,  Button, TableHead, TableBody, TableRow, TableCell, Typography } from "@mui/material";
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

const Transition = React.forwardRef(function Transition(props, ref) { return <Slide direction="up" ref={ref} {...props} />; });

export function Loading() {

  

        return (
            <Dialog
                open={true}
                TransitionComponent={Transition}
                scroll="paper"
                keepMounted
                aria-describedby="alert-dialog-cards-description"
                
            >
                <DialogTitle align="center" sx={{color:"red", letterSpacing:"0.2rem"}} >{`LOGIN REQUIRED!`}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="01" sx={{color:"black"}} >
                        {`Login Required to access Dashboard. This message is shown, if you are not logged in or either login session is expired `}
                    </DialogContentText>
                    
                </DialogContent>
                <DialogActions>
                    <Button fullWidth variant="outlined" startIcon={<LockOpenTwoToneIcon />} color="info" href="./login">Login Page</Button>
                </DialogActions>
                <DialogActions>
                    <Button fullWidth variant="outlined" startIcon={<HomeTwoToneIcon />} color="info" href="./">Home Page</Button>
                </DialogActions>
               
            </Dialog>


        )
    }

