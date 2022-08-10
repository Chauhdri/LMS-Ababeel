

import { Grid, AppBar, Typography, Avatar, Fade, Zoom } from "@mui/material"
import { useEffect, useState } from "react";
import { colorManager } from "./data";

export const LogoAndName = () => {
  const [zooming, setZooming] = useState(false);

  let d = Date.now()

  const borderColor = "#4d8c57";



  useEffect(() => {

    setTimeout(() => {
      return (setZooming(zooming => !zooming))
    }, 1500);

  })

  return (
    <AppBar sx={{ paddingTop: "4px", backgroundColor: "rgba(225,225,225,0.5)", borderBottom: `1px solid ${borderColor}`, height: "3.25em" }}
    >

      <Grid container sx={{ alignItems: "center", justifyContent: "center" }}>

        <Zoom in={zooming} appear={false} easing={"steps(3)"}>
          <Grid item id="logoCover" sx={{ backgroundImage: "linear-gradient(180deg,#8DEBFF,#6CACFF)", height: "2.8em", width: "2.8em", position: "relative", left: "3em", borderRadius: "50% 50%", }} >
          </Grid>
        </Zoom>

        <Grid item id="logo"  >

          <Avatar variant="square" src='./ababeel-logo.png' alt="logo" sx={{ height: `2em`, width: "auto", }}>

          </Avatar>
        </Grid>
        <Grid item >
          <Typography
            variant="h6"
            sx={{ color: "rgb(22,221,22)" }}
          >
            ABABEEL
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};

// import * as React from 'react';

// import Box from '@mui/material/Box';
// import Switch from '@mui/material/Switch';
// import Paper from '@mui/material/Paper';
// import Zoom from '@mui/material/Zoom';
// import FormControlLabel from '@mui/material/FormControlLabel';

// const icon = (
//   <Paper sx={{ m: 1 }} elevation={4}>
//     <Box component="svg" sx={{ width: 100, height: 100 }}>
//       <Box
//         component="polygon"
//         sx={{
//           fill: (theme) => theme.palette.common.white,
//           stroke: (theme) => theme.palette.divider,
//           strokeWidth: 1,
//         }}
//         points="0,100 50,00, 100,100"
//       />
//     </Box>
//   </Paper>
// );

// export default function SimpleZoom() {
//   const [checked, setChecked] = React.useState(false);

//   const handleChange = () => {
//     setChecked((prev) => !prev);
//   };

//   return (
//     <Box sx={{ height: 180 }}>
//       <FormControlLabel
//         control={<Switch checked={checked} onChange={handleChange} />}
//         label="Show"
//       />
//       <Box sx={{ display: 'flex' }}>
//         <Zoom in={checked}>{icon}</Zoom>
//         <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
//           {icon}
//         </Zoom>
//       </Box>
//     </Box>
//   );
// }
