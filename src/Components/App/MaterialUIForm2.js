import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import axios from 'axios';
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";

const defaultValues = {
  firstname: "",
  lastname: "",
  email: "",
  address:"",
  income: "",
};
const Form = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const dispatch = useDispatch();
  const handleInput = e => {
    const name = e.target.name;
    const newValue = e.target.value;
    setFormValues({ 
      ...formValues,
      [name]: newValue 
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    
    
    axios.post('https://royliao.pythonanywhere.com/medical/employees/', formValues).then((response)=>
    {dispatch({type: "ADD_EMPLOYEE", rec: response.data});
    console.log("add the reco:");
    console.log(response);
    setFormValues(defaultValues);
    
  });
  };
  return (
    <form onSubmit={handleSubmit} >
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <TextField
            id="firstname-input"
            name="firstname"
            label="firstname"
            type="text"
            value={formValues.firstname}
            onChange={handleInput}
          />
        </Grid>
        <Grid item>
          <TextField
            id="lastname-input"
            name="lastname"
            label="lastname"
            type="text"
            value={formValues.lastname}
            onChange={handleInput}
          />
        </Grid>
        <Grid item>
          <TextField
            id="email-input"
            name="email"
            label="email"
            type="text"
            value={formValues.email}
            onChange={handleInput}
          />
        </Grid>
        <Grid item>
          <TextField
            id="address-input"
            name="address"
            label="address"
            type="text"
            value={formValues.address}
            onChange={handleInput}
          />
        </Grid>
        <Grid item>
          <TextField
            id="income-input"
            name="income"
            label="income"
            type="text"
            value={formValues.income}
            onChange={handleInput}
          />
        </Grid>
        
        <Button variant="contained" color="primary" style={{marginTop: '65px'}} type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};
export default Form;