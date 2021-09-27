import * as React from 'react';
import { Button } from '@material-ui/core';
import { XGrid } from '@material-ui/x-grid';
import { DataGrid } from '@material-ui/data-grid';
import Nb from "./votenavbar"
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
    City_Name: 'Peshawar',


  },
  {
    id: 2,
    City_Name: 'Mardan',


  },
  {
    id: 3,
    City_Name: 'Kohat',


  },
  {
    id: 4,
    City_Name: 'Abbottabad',


  },
  {
    id: 5,
    City_Name: 'Karak',


  },
  {
    id: 6,
    City_Name: 'Topi',


  },
  {
    id: 7,
    City_Name: 'Chitral',


  },
  {
    id: 8,
    City_Name: 'Bannu',


  },
  {
    id: 9,
    City_Name: 'Hangu',


  },
  {
    id: 10,
    City_Name: 'Laki Marwat',


  },
  {
    id: 11,
    City_Name: 'Tank',


  },
  {
    id: 12,
    City_Name: 'Dir',


  },
  {
    id: 13,
    City_Name: 'Bahrain',


  },
  {
    id: 14,
    City_Name: 'Tordher',


  },
  {
    id: 15,
    City_Name: 'Swabi',


  },
  {
    id: 16,
    City_Name: 'Kabal',


  },
  {
    id: 17,
    City_Name: 'Daska',


  },
  {
    id: 18,
    City_Name: 'Barikot',


  },
  {
    id: 19,
    City_Name: 'Shabqadar',


  },
  {
    id: 20,
    City_Name: 'Paharpur',


  },
  {
    id: 21,
    City_Name: 'Charsadda',


  },
  {
    id: 22,
    City_Name: 'Batkhela',


  },
  {
    id: 23,
    City_Name: 'Jehangira',


  },
  {
    id: 24,
    City_Name: 'Khwazakhela	',


  },
  {
    id: 25,
    City_Name: 'Matta',


  },
  {
    id: 26,
    City_Name: 'Risalpur',


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
