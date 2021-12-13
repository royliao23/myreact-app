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
      <Container style={{ marginTop: "1em" }}>
        <Grid container spacing={0}>
          <Grid item container alignItems="center" md={3}>
            <Paper className={classes.paper}>
              <Form />
            </Paper>
          </Grid>
          <Grid item container alignItems="center" md={9}>
            <Paper className={classes.paper}><DataGridDemo  /></Paper>
          </Grid>    
        </Grid>
      </Container>
    </div>
  );
}
