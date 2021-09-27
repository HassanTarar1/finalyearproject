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
    Tehsil_Name: 'Khara Bajaur',

  },
  {
    id: 2,
    Tehsil_Name: 'Utman Khel',

  },
  {
    id: 3,
    Tehsil_Name: 'Salarzai',

  },
  {
    id: 4,
    Tehsil_Name: 'Nawagai',

  },
  {
    id: 5,
    Tehsil_Name: 'Mamund ',

  },
  {
    id: 6,
    Tehsil_Name: 'Barang',

  },
  {
    id: 7,
    Tehsil_Name: 'Bar Chamer Kand',

  },
  {
    id: 8,
    Tehsil_Name: 'Yake Ghund',

  },
  {
    id: 9,
    Tehsil_Name: 'Ambar Utman Khel',

  },
  {
    id: 10,
    Tehsil_Name: 'Pindiali',

  },
  {
    id: 11,
    Tehsil_Name: 'Safi',

  },
  {
    id: 12,
    Tehsil_Name:'Jamrud ',

  },
  {
    id: 13,
    Tehsil_Name: 'Mula Gori',

  },
  {
    id: 14,
    Tehsil_Name: 'Landi Kotal',

  },
  {
    id: 15,
    Tehsil_Name: 'Bara',

  },
  {
    id: 16,
    Tehsil_Name: 'Ismail Zai',

  },
  {
    id: 17,
    Tehsil_Name: 'Mir Ali',

  },

  {
    id: 18,
    Tehsil_Name: 'Spinwam',

  },
  {
    id: 19,
    Tehsil_Name: 'Miran Shah',

  },
  {
    id: 20,
    Tehsil_Name: 'Dossali',

  },
  {
    id: 21,
    Tehsil_Name: 'Serwekai',

  },


];
 const columns=[
  { field: 'id' },
  { field: 'Tehsil_Name' , width: 150},
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
      <><Nb/>
      <div style={{ height: 800, width: '100%' }}>
          <DataGrid

              rows={rows} columns={columns} />
      </div></>
  );
}
