import React from "react";
import DataGridDemo from './display.js';
import Form from './MaterialUIForm2.js';
//import { Link } from "react-router-dom";

import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Paper,
  Grid,
  Box,
  Tabs,
  Tab,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    width: "100%",
    height: "96.4%",
    border:"none",
    boxShadow: "none",
  },
  
  
});
export default function NestedGrid() {
  const classes = useStyles();
  return (
    <div className="nest">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Awesome App</Typography>
          <Button color="inherit" >Login</Button>
          <Box flexGrow={1} />
          <Tabs textColor="inherit" 
  style={{width: '54%'}} >
            <Tab label="Home " style={{ 
    minWidth: "7%",
    paddingInline:'2%'
  }}/>
            <Tab label="About " style={{ 
    minWidth: "7%",
    paddingInline:'2%'
  }}/>
            <Tab label="Two jgkkk" style={{ 
    minWidth: "7%",
    paddingInline:'2%'
  }}/>
            <Tab label="Three" style={{ 
    minWidth: "7%",
    paddingInline:'2%'
  }}/>
            <Tab label="On uitioutio" style={{ 
    minWidth: "7%",
    paddingInline:'2%'
  }}/>
            <Tab label="Twot" style={{ 
    minWidth: "7%",
    paddingInline:'2%'
  }} />
            <Tab label="Three" style={{ 
    minWidth: "7%",
    paddingInline:'2%'
  }}/>
          </Tabs>
          
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "1em" }}>
        <Grid container spacing={0}>
          <Grid item container alignItems="center" xs={4}>
            <Paper className={classes.paper}>
              <Form />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}><DataGridDemo /></Paper>
          </Grid>    
        </Grid>
      </Container>
    </div>
  );
}
