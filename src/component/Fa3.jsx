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
    City_Name: 'Quetta',


  },
  {
    id: 2,
    City_Name: 'Turbat',


  },
  {
    id: 3,
    City_Name: 'Khuzdar',


  },
  {
    id: 4,
    City_Name: 'Gwadar',


  },
  {
    id: 5,
    City_Name: 'Dera Allah Yar',


  },
  {
    id: 6,
    City_Name: 'Sui Town',


  },
  {
    id: 7,
    City_Name: 'Sibi',


  },
  {
    id: 8,
    City_Name: 'Loralai',


  },
  {
    id: 9,
    City_Name: 'Nushki',


  },
  {
    id: 10,
    City_Name: 'Zhob',


  },
  {
    id: 11,
    City_Name: 'Kharan',


  },
  {
    id: 12,
    City_Name: 'Chitkan	',


  },
  {
    id: 13,
    City_Name: 'Khanozai',


  },
  {
    id: 14,
    City_Name: 'Buleda',


  },
  {
    id: 15,
    City_Name: 'Qalat',


  },
  {
    id: 16,
    City_Name: 'Surab',


  },
  {
    id: 17,
    City_Name: 'Pishin',


  },
  {
    id: 18,
    City_Name: 'Mastung',


  },
  {
    id: 19,
    City_Name: 'Pasni',


  },
  {
    id: 20,
    City_Name: 'Uthal',


  },
  {
    id: 21,
    City_Name: 'Huramzai',


  },
  {
    id: 22,
    City_Name: 'Dera Bugti',


  },
  {
    id: 23,
    City_Name: 'Machh',


  },
  {
    id: 24,
    City_Name: 'Jiwani',


  },
  {
    id: 25,
    City_Name: 'Kohlu',


  },
  {
    id: 26,
    City_Name: 'Dalbandin	',


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
