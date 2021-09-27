import * as React from 'react';
import { Button } from '@material-ui/core';
import { XGrid } from '@material-ui/x-grid';
import { DataGrid } from '@material-ui/data-grid';
import Nb from "./votenavbar"
import { useHistory } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";
const rows = [

  {
    id: 1,
    City_Name: 'Lahore',


  },
  {
    id: 2,
    City_Name: 'Bahawalpur',


  },
  {
    id: 3,
    City_Name: 'Gujranwala',


  },
  {
    id: 4,
    City_Name: 'Gujrat',


  },
  {
    id: 5,
    City_Name: 'Mandibahudin',


  },
  {
    id: 6,
    City_Name: 'Jehlum',


  },
  {
    id: 7,
    City_Name: 'Sargodha',


  },
  {
    id: 8,
    City_Name: 'Multan',


  },
  {
    id: 9,
    City_Name: 'Rawalpindi',


  },
  {
    id: 10,
    City_Name: 'Attock',


  },
  {
    id: 11,
    City_Name: 'Okara',


  },
  {
    id: 12,
    City_Name: 'Kharian',


  },
  {
    id: 13,
    City_Name: 'okara',


  },
  {
    id: 14,
    City_Name: 'kasur',


  },
  {
    id: 15,
    City_Name: 'Chinot',


  },
  {
    id: 16,
    City_Name: 'Gojra',


  },
  {
    id: 17,
    City_Name: 'Daska',


  },
  {
    id: 18,
    City_Name: 'Wazirabad',


  },
  {
    id: 19,
    City_Name: 'Layyah',


  },
  {
    id: 20,
    City_Name: 'Bhalwal',


  },
  {
    id: 21,
    City_Name: 'Narowal',


  },
  {
    id: 22,
    City_Name: 'Mianwali',


  },
  {
    id: 23,
    City_Name: 'Vehari',


  },
  {
    id: 24,
    City_Name: 'Daska',


  },
  {
    id: 25,
    City_Name: 'Jangh',


  },
  {
    id: 26,
    City_Name: 'Shaiwal',


  },


];
 const columns=[
  { field: 'id' },
  { field: 'City_Name' , width: 150},
  { field: 'Select',
  width: 150,
  renderCell: (params) => (
    <strong>
      <Link to ="https://papandas.github.io/react-voting-system/" >
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
      >
        Open
      </Button>
      </Link>
    </strong>
  ),
},
];


export default function RenerCellGrid() {
  return (
    <><Nb /><div style={{ height: 800, width: '100%' }}>
      <DataGrid

        rows={rows} columns={columns} />
    </div></>
  );
}
