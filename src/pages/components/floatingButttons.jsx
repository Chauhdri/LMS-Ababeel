import * as React from 'react';
import {SpeedDial, Box, SpeedDialAction} from '@mui/material';
import { floatingButtonsDetail, speedDialIcon } from './data';



export default function FloatingButtons(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <Box sx={{ 
          bottom:props.bottom,
          left:10,
          transform: 'translateX(0px)', 
          flexGrow: 1,
          position: 'fixed', 
           }}>
        <SpeedDial
          ariaLabel="Contact buttons"
          direction="right"
          icon={speedDialIcon[props.data]}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {floatingButtonsDetail[props.data].map((button) => (
            <SpeedDialAction
              key={button.name}
              icon={button.icon}
              tooltipTitle={button.name}
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </Box>
    );
  }