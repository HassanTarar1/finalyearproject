import React from 'react';
import Nb from "./votenavbar"
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import { useHistory } from 'react-router';
export default function App() {
  return (
      <><Nb /><MDBRow className='row-cols-1 row-cols-md-3 g-4'>


          <MDBCol>
              <MDBCard style={{ left: '3rem', top: '5rem',width: '25rem', height: '30rem' }} >
                  <MDBCardImage
                      src='https://seeklogo.com/images/P/pakistan-tehreek-e-insaf-logo-FE1F052649-seeklogo.com.png'
                      alt='...'
                      height= "300px"
            width="1px"
                      position='top' />
                  <MDBCardBody >
                      <MDBCardTitle>PTI</MDBCardTitle>
                      <MDBCardText>
                          Canidate: Ali
                      </MDBCardText>
                  </MDBCardBody>
                  <MDBBtn>vote</MDBBtn>
              </MDBCard>
          </MDBCol>
          <MDBCol>
              <MDBCard style={{ left: '3rem', top: '5rem',width: '25rem', height: '30rem' }}>
                  <MDBCardImage
                      src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Pakistan_Muslim_League_Nawaz_logo.svg/800px-Pakistan_Muslim_League_Nawaz_logo.svg.png'
                      alt='...'
                      height= "300px"
            width="1px"
                      position='top' />
                  <MDBCardBody>
                      <MDBCardTitle>PMLN</MDBCardTitle>
                      <MDBCardText>
                          Canidate: Nawaz
                      </MDBCardText>
                  </MDBCardBody>
                  <MDBBtn>vote</MDBBtn>
              </MDBCard>
          </MDBCol>
          <MDBCol>
              <MDBCard style={{ left: '3rem', top: '5rem',width: '25rem', height: '30rem' }}>
                  <MDBCardImage
                      src='https://upload.wikimedia.org/wikipedia/commons/9/94/Pakistan_Peoples_Party_Flag_with_arrow.png'
                      alt='...'
                      height= "300px"
            width="1px"
                      position='top' />
                  <MDBCardBody>
                      <MDBCardTitle>PPP</MDBCardTitle>
                      <MDBCardText>
                          Canidate: Noman
                      </MDBCardText>
                  </MDBCardBody>
                  <MDBBtn>vote</MDBBtn>
              </MDBCard>
          </MDBCol>
          <MDBCol>
              <MDBCard style={{ left: '3rem', top: '9rem',width: '25rem', height: '30rem' }}>
                  <MDBCardImage
                      src='https://upload.wikimedia.org/wikipedia/en/c/c9/PML-Q_Logo.png'
                      alt='...'
                      height= "300px"
            width="1px"
                      position='top' />
                  <MDBCardBody>
                      <MDBCardTitle>PML_Q</MDBCardTitle>
                      <MDBCardText>
                          Canidate: Haseeb
                      </MDBCardText>
                  </MDBCardBody>
                  <MDBBtn>vote</MDBBtn>
              </MDBCard>
          </MDBCol>
          <MDBCol>
              <MDBCard style={{ left: '3rem', top: '9rem',width: '25rem', height: '30rem' }}>
                  <MDBCardImage
                      src='https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Jamaat-e-Islami_Pakistan_Logo.svg/250px-Jamaat-e-Islami_Pakistan_Logo.svg.png'
                      alt='...'
                      height= "300px"
            width="1px"
                      position='top' 
                      />
                  <MDBCardBody >
                      <MDBCardTitle>Jamat e Islami</MDBCardTitle>
                      <MDBCardText>
                          Canidate: Qari Abdur Rahim
                      </MDBCardText>
                  </MDBCardBody>
                  <MDBBtn>vote</MDBBtn>
              </MDBCard>
          </MDBCol>
          <MDBCol>
              <MDBCard style={{ left: '3rem', top: '9rem',width: '25rem', height: '30rem' }}>
                  <MDBCardImage
                      src='https://lh3.googleusercontent.com/proxy/Iklasp6Na9cTTgUtrYLU1epIratzqqxGezPL8VDjVUo5qSIr7UZ-IZj7UrzM7Ey-P_k9HfezIfrkx2Qcg0vqr4EcQt2tplSiAWTdFEVJoDFwe8hcoSE'
                      alt='...'
                      height= "300px"
            width="1px"
                      position='top' />
                  <MDBCardBody>
                      <MDBCardTitle>Independent Canidate</MDBCardTitle>
                      <MDBCardText>
                          Canidate: Tarar
                      </MDBCardText>
                  </MDBCardBody>
                  <MDBBtn>vote</MDBBtn>
              </MDBCard>
          </MDBCol>

      </MDBRow></>
  );
}