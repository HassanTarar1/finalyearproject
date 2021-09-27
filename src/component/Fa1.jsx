import * as React from 'react';
import { Button } from '@material-ui/core';
import { XGrid } from '@material-ui/x-grid';
import { DataGrid } from '@material-ui/data-grid';
import { useHistory } from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";
import Nb from "./votenavbar"


const rows = [


  {
    id: 1,
    City_Name: 'Karachi',


  },
  {
    id: 2,
    City_Name: 'Dadu',


  },
  {
    id: 3,
    City_Name: 'Guddu barrage',


  },
  {
    id: 4,
    City_Name: 'Hyedrabad',


  },
  {
    id: 5,
    City_Name: 'Badin',


  },
  {
    id: 6,
    City_Name: 'Islamkot',


  },
  {
    id: 7,
    City_Name: 'Jacobabad',


  },
  {
    id: 8,
    City_Name: 'Jamshoro',


  },
  {
    id: 9,
    City_Name: 'Kotri',


  },
  {
    id: 10,
    City_Name: 'Sinjhoro',


  },
  {
    id: 11,
    City_Name: 'Okara',


  },
  {
    id: 12,
    City_Name: 'Kandiaro',


  },
  {
    id: 13,
    City_Name: 'Khipro',


  },
  {
    id: 14,
    City_Name: 'Kot Diji',


  },
  {
    id: 15,
    City_Name: 'Kotri',


  },
  {
    id: 16,
    City_Name: 'Larkana',


  },
  {
    id: 17,
    City_Name: 'Daska',


  },
  {
    id: 18,
    City_Name: 'Malir',


  },
  {
    id: 19,
    City_Name: 'Mian Sahib',


  },
  {
    id: 20,
    City_Name: 'Mithi',


  },
  {
    id: 21,
    City_Name: 'Naushahro Feroze',


  },
  {
    id: 22,
    City_Name: 'Mianwali',


  },
  {
    id: 23,
    City_Name: 'Rohri',


  },
  {
    id: 24,
    City_Name: 'Tando Adam Khan',


  },
  {
    id: 25,
    City_Name: 'Shikarpaur',


  },
  {
    id: 26,
    City_Name: 'Thatta',


  },


];
const columns=[
  { field: 'id' ,  },
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
        style={{ marginLeft: 20 }}
      >
        Open
      </Button >
</Link>
    </strong>

  ),
},
];



export default function RenerCellGrid() {


  let f=useHistory();
  return (


      <>  <Nb /><div style={{  height: 800, width: '100%', top:20}}>

          <DataGrid


              rows={rows} columns={columns} />

      </div></>
  );
}
