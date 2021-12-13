//https://mui.com/components/menus/#BasicMenu.js
import * as React from 'react';
import { Button,Menu,MenuItem } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import NestedGrid from './sidebyside.js';
import DataGridDemo from './display.js';
import { Link,Route,Routes, BrowserRouter as Router } from 'react-router-dom';


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    

  };

  return (
    <Router>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
        
        <MenuItem onClick={handleClose}><Link to="/data">Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/form">Form</Link></MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        <MenuItem onClick={handleClose} to="/logout">
            Logout2
        </MenuItem>
      </Menu>
       <Route path="/data" > <Home /></Route>
     
    </Router>
  );
}

function Home(){
    return(<hi>Home</hi>)
}
function About(){
    return(<hi>About</hi>)
}