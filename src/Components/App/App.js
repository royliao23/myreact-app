import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="xl" className="App">
     
      <Paper>
        <Navbar />
      </Paper>
      
    </Container>
  );
}
export default App;