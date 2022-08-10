import { navData } from './data.jsx';
import { Grid, Button, AppBar, Toolbar, Typography, SwipeableDrawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Item from '@mui/material/ListItem';
import React from 'react';


export function Nav(w) {

  let [state, setState] = React.useState(false)

  const handleState = () => {
    state ? setState(false) : setState(true);
  }

  const simpleNav = navData.map((value, index) => {
   return ((value.visibility)&&
      (
        <Grid item key={index} >
          <Item key={index}>
            <Button href={value.src} startIcon={value.icon}>
              {value.title}
            </Button>
            
          </Item>
        </Grid>
      ))})

  function drawer(text) {
    return (
      <Grid container direction="column" sx={{ borderColor: "red" }}>
        <SwipeableDrawer width={200} anchor='left' open={text} onOpen={() => handleState()} onClose={() => handleState()}>
          {simpleNav}
        </SwipeableDrawer>
      </Grid>
    )}

  function barNav() {
    return (
      <Grid item xs={12}>
        <AppBar color="transparent" position="sticky" >
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleState}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Ababeel
            </Typography>
            {drawer(state)}
          </Toolbar>
        </AppBar>

      </Grid>
    )
  }

  return (w < 900 ? barNav() : simpleNav)
}




