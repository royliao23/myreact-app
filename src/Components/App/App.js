import React from 'react';
import './App.css';
import NestedGrid from './sidebyside.js';
import Navbar from './Navbar';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="xl" className="App">
     
      <Paper>
        
        <NestedGrid />
      </Paper>
      
    </Container>
  );
}
export default App;