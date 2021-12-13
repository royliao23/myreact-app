import * as React from "react";
import NestedGrid from './sidebyside.js';
import BasicMenu from './menulist.js';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  CssBaseline,
  Box,
  Tabs,
  
  Tab,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export default function Navbar() {
  const [value, setValue] = React.useState(0);
  const handleChange = (_, newValue) => setValue(newValue);

  return (
    <>
      <CssBaseline />
      <AppBar position="static" style={{height:"80px", width:"99.2%"}}>
        <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
           
        </IconButton>
        <Typography variant="h6">Awesome App</Typography>
        <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="on"
        style={{ width:"80%"}}
        aria-label="scrollable"
      >
            <Tab label="Home" style={{  minWidth: "7%", paddingInline:'2%' }} />
            <Tab label="About" style={{  minWidth: "7%", paddingInline:'2%' }}/>
            <Tab label="Contact" style={{  minWidth: "7%", paddingInline:'2%' }} />
            <Tab label="Four" style={{  minWidth: "7%", paddingInline:'2%' }} />
            <Tab label="Five" style={{  minWidth: "7%", paddingInline:'2%' }} />
            <Tab label="Six" style={{  minWidth: "7%", paddingInline:'2%' }} />
        </Tabs>
        <Box flexGrow={1} />
        <Button color="inherit" >Login</Button>    
        </Toolbar>
      </AppBar>

      <div index={value} onChangeIndex={setValue}>
        <TabPanel value={value} index={0}>
          <NestedGrid />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <NestedGrid />
        </TabPanel>

        <TabPanel value={value} index={2}>
          Item Three

          <NestedGrid />
        </TabPanel>

        <TabPanel value={value} index={3}>
          Item 4
          <NestedGrid />

          afkhhak
        </TabPanel>

        <TabPanel value={value} index={4}>
          Item 5
          <NestedGrid />

          afkhhak
        </TabPanel>

        <TabPanel value={value} index={5}>
          Item 
          <NestedGrid />
        </TabPanel>
      </div>
    </>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
