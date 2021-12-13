import React,{ useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';//yarn add @material-ui/data-grid
import {  useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';





const columns = [
  
 
  { field: 'id', headerName: 'ID', minWidth: 45, },
  {
    field: 'firstname',
    headerName: 'First name',
    minWidth: 150,
    editable: true,
  },
  
  {
    field: 'lastname',
    headerName: 'Last name',
    minWidth: 150,
    editable: true,
    
  },
  { field: 'email', headerName: 'Email', editable: true, width: 140,},
  {
    field: 'address',
    headerName: 'Address',
    width: 140,
    editable: true,
  },
  { field: 'income', headerName: 'Income', minWidth: 135,editable: true, },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    minWidth: 135,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstname') || ''} ${
        params.getValue(params.id, 'lastname') || ''
      }`,
  },
];


const API_URL='https://royliao.pythonanywhere.com/medical/employees/?format=json'
const tokeninfo={Authorization: "Token 	8854d62680edf3c63c27ee8bf6d2c320cb902f51"}
export default function DataGridDemo() {
  
  const dispatch = useDispatch();
  const r = useSelector(state => state.birds);
  useEffect(() => {
    fetch(
      API_URL,
      {
        method: "GET",
        headers: tokeninfo,

      }
    )
      .then(res => res.json())
      .then(response => {
       dispatch({type: "SHOW_EMPLOYEE", arr: response});
       
      })
      .catch(error => console.log(error));
  }, "errors");
  console.log("state:")
  console.log(r)
     
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid 
        
        rows={r}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
       
      />
    </div>
  );
}