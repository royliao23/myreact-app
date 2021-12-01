import React,{ useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';//yarn add @material-ui/data-grid
import {  useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';


const columns = [
 
  { field: 'id', headerName: 'id', width: 90 },
  {
    field: 'firstname',
    headerName: 'Finst name',
    width: 100,
    editable: true,
  },
  
  {
    field: 'lastname',
    headerName: 'Last name',
    width: 100,
    editable: true,
  },
  { field: 'email', headerName: 'Email', width: 190,editable: true, },
  {
    field: 'address',
    headerName: 'Age',
    width: 50,
    editable: true,
  },
  { field: 'income', headerName: 'Income', width: 190,editable: true, },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstname') || ''} ${
        params.getValue(params.id, 'lastname') || ''
      }`,
  },
];


const API_URL='https://royliao.pythonanywhere.com/medical/employees/?format=json'

export default function DataGridDemo() {
  
  const dispatch = useDispatch();
  const r = useSelector(state => state.birds);
  useEffect(() => {
    fetch(
      API_URL,
      {
        method: "GET",
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