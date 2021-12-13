//https://mui.com/components/menus/#BasicMenu.js
import * as React from 'react';
import { Button,Menu,MenuItem } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import NestedGrid from './sidebyside.js';
import DataGridDemo from './display.js';
import { Link,Route,Switch, Routes, BrowserRouter as Router } from 'react-router-dom';
//import { Switch} from 'react-router';




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
        <MenuItem onClick={handleClose}><Link to="/about">about</Link></MenuItem>
        <MenuItem onClick={handleClose} to="/logout">
            Logout2
        </MenuItem>
      </Menu>
      <Switch>
          <Route path="/about" component={NestedGrid}/>
          <Route path="/data">
            <DataGridDemo />
          </Route>
          <Route path="/form">
            <NestedGrid />
          </Route>
          
      </Switch>
    </Router>
  );
}

function Home(){
    return(<h4>Home</h4>)
}
function About(){
    return(<h4>About</h4>)
}