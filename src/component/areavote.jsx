import React from 'react';
import Fq from "./Fa1"
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn , } from 'mdb-react-ui-kit';
import Navbar from "./votenavbar";
import {BrowserRouter, withRouter} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";


export default function App() {
  let h =useHistory();

  return (

    <BrowserRouter>
      <Switch>
    <><Navbar/><MDBRow className='row-cols-1 row-cols-md-2 g-4'>

      <MDBCol>
        <MDBCard style={{ width: '30rem' , top:"3rem" ,left:"10rem"}} >
          <MDBCardImage
            src="https://image.shutterstock.com/image-photo/islamabad-pakistan-april-25-2019-600w-1407461093.jpg"
            alt=''

            height= "330px"
            width ="10px"

            position='top' />
          <MDBCardBody >
            <MDBCardTitle  >Islamabad</MDBCardTitle>
            <MDBCardText>
            Capital of Pakistan
            </MDBCardText>
<Link to ="https://papandas.github.io/react-voting-system/" >
            <MDBBtn
        
            rounded className='mx-2' color='success'>

              Select voting Area</MDBBtn>
</Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard style={{ width: '30rem' , top:"3rem" ,left:"3rem"}}>
          <MDBCardImage
            src='https://image.shutterstock.com/image-photo/badshahi-masjid-known-kings-mosque-600w-1409837084.jpg'
            alt='...'
            height= "330px"
            width="1px"
            position='top' />
          <MDBCardBody>
            <MDBCardTitle>Punjab</MDBCardTitle>
            <MDBCardText>
              lahore
            </MDBCardText>
            <MDBBtn
             rounded className='mx-2' color='success'
             onClick={
              ()=>{h.push("/finalarea");}}

              >Select voting Area</MDBBtn>


          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard style={{ width: '30rem' , top:"3rem" ,left:"10rem"}}>
          <MDBCardImage
            src='https://image.shutterstock.com/image-photo/peshawar-landmark-khyber-pakhtunkhwa-pakistan-600w-1459768916.jpg'
            alt='...'
            height= "330px"
            width="1px"
            position='top' />
          <MDBCardBody>
            <MDBCardTitle>KPK</MDBCardTitle>
            <MDBCardText>
              Peshaware
            </MDBCardText>
            <MDBBtn  rounded className='mx-2' color='success'
              onClick={
                ()=>{h.push("/Fa2");}}
              >Select voting Area</MDBBtn>


          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard style={{ width: '30rem' , top:"3rem" ,left:"3rem"}}>
          <MDBCardImage
            src='https://image.shutterstock.com/image-photo/mazarequaid-tomb-muhammad-ali-jinah-600w-1036915798.jpg'
            alt='...'
            height= "330px"
            width="1px"
            position='top' />
          <MDBCardBody>
            <MDBCardTitle>Sindh</MDBCardTitle>
            <MDBCardText>
              Karachi
            </MDBCardText>
            <MDBBtn  rounded className='mx-2' color='success'
              onClick={
                ()=>{h.push("/Fa1");}}

              >Select voting Area</MDBBtn>


          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard style={{ width: '30rem' , top:"3rem" ,left:"10rem" }}>
          <MDBCardImage
            src='https://image.shutterstock.com/image-photo/image-ziarat-residency-quaideazam-situated-600w-1677441808.jpg'
            alt='...'
            height= "330px"
            width="1px"
            position='top' />
          <MDBCardBody>
            <MDBCardTitle>Balochistan</MDBCardTitle>
            <MDBCardText>
              Quetta
            </MDBCardText>
            <MDBBtn  rounded className='mx-2' color='success'
              onClick={
                ()=>{h.push("/Fa3");}}
              >Select voting Area</MDBBtn>


          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard style={{ width: '30rem' , top:"3rem" ,left:"3rem"}}>
          <MDBCardImage
             src="https://image.shutterstock.com/image-photo/kalam-valleykp-pakistan-600w-1128017360.jpg"
            alt='...'
            height= "330px"
            width="1px"
            position='top' />
          <MDBCardBody >
            <MDBCardTitle>Tribal Area</MDBCardTitle>
            <MDBCardText>
              Beauty of Pakistan
            </MDBCardText>
            <MDBBtn  rounded className='mx-2' color='success'
              onClick={
                ()=>{h.push("/Fa4");}}
              >Select voting Area</MDBBtn>


          </MDBCardBody>
        </MDBCard>
      </MDBCol>

    </MDBRow></>

    </Switch>
  </BrowserRouter>

  );
}
