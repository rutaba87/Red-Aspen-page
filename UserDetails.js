import {React, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import backArrow from '../src/Images/backArrow.png';
import { Button } from '@mui/material';
import CloseImg from '../src/Images/CloseImg.png';
import personImg from '../src/Images/personImg.png'
import {
  Paper,
  TableContainer, 
  Table, 
  TableHead, 
  TableRow, 
  TableCell,
  TableBody
} from '@mui/material'

const UserDetails = () => {
  const [isModalOpen, setIsModalOpen]= useState(false); 
  const location = useLocation()
  const user = location.state; 
  const navigate = useNavigate();
 
function handleChangeBack(){
  navigate('/');
}

function handleChangeModalOpen() {
   setIsModalOpen(true)
  console.log('handleChangeModalopen')
  
}

function handleChangeModalClose(){
 setIsModalOpen(false);
 console.log('handleChangeModalclose')
}

  return (
    <div className='details--styling'>
      <div style={{display: 'flex', alignItems: "left"}}>
        <img onClick={handleChangeBack} style={{height: 20, width: 25, marginTop: 28, marginLeft: 10, cursor: 'pointer'}} src={backArrow} alt='Back Arrow'/>
      <h1 style={{color: 'black', fontFamily: 'serif', fontWeight: "bold", paddingLeft: 30}}>ASN </h1>
        <p className='CheckIn'> Checked-In</p>
      </div>
       <div className='--data'>
        <div className='left--data'> 
        <div className='left-data--style'> 
          <p>ASN #</p>
          <p>AN-{user.address.number}</p>
         </div>
         <div className='left-data--style'>
          <p>Expected Date And Time</p>
          <p>August 30, 2024</p>
         </div>
         <div className='left-data--style'>
         <p>Ship Method</p>
         <p>_</p>
         </div>
         <div className='left-data--style'>
         <p>Reference No. </p>
         <p>_</p>
         </div>
         <div className='left-data--style'>
         <p>Reference 2 </p>
         <p>_</p>
         </div>
         <div className='left-data--style'>
         <p>Buyer Name </p>
         <p>{user.name.firstname}</p>
         </div>
         <div className='left-data--style'>
         <p>Container No. </p>
         <p>{user.phone}</p>
         </div>
         <div className='left-data--style'>
         <p>Checkedin Time</p>
         <p>_</p>
         </div>
        </div>
        <div className='bottom--data'>
        <div className='bottom-data--style'>
         <p>Created At</p>
         <p>30 August, 2024</p>
         </div>
         <div className='bottom-data--style'>
         <p>Trucking #</p>
         <p>{user.address.zipcode}</p>
         </div>
         <div className='bottom-data--style'>
         <p>Attachment </p>
         <p>_</p>
         </div>
         <div className='bottom-data--style'>
         <p>Reference 1</p>
         <p>_</p>
         </div>
         <div className='bottom-data--style'>
         <p>Vendor Name</p>
         <p> {user.username}</p>
         </div>
         <div className='bottom-data--style'>
         <p>Container Size</p>
         <p>_</p>
         </div>
         <div className='bottom-data--style'>
         <p>Special Instructions </p>
         <p className='ellipsis' onClick={handleChangeModalOpen} > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nibh neque, maximus posuere mauris bibendum a. Nulla tellus eros, fermentum eu consectetur at, imperdiet nec urna. Cras metus lacus, viverra sit amet interdum sed, scelerisque non quam. Donec auctor posuere justo at blandit. Aenean convallis, neque id semper lacinia, ex eros ultrices nisi, et efficitur risus massa a quam. Sed viverra, urna nec eleifend fringilla, velit lacus feugiat justo, eu luctus nisi ante eu felis. Aenean facilisis ante sed scelerisque venenatis. Duis sem risus, tincidunt a auctor id, dignissim at orci. </p>
         </div>
        </div>
        <div className='right--data'>
          <div className='right-data-style'>
          <fieldset style={{paddingTop: 2, paddingBottom: 2, marginRight: 10}}>
              <legend>ASN TO</legend>
              <p>Unique Warehouse</p>
              </fieldset> 
         </div>
         <div className='right-data--style'>
         <p>Unload Task Id No. </p>
         <p>{user.address.number}</p>
         </div>
         <div className='right-data--style'>
         <p>Receive And Putaway Task Id</p>
         <p>_</p>
         </div>
         <div className='right-data--style'>
         <p>PO #</p>
         <p>_</p>
         </div>
        </div>
        </div>

        {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div 
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 5,
              maxWidth: '80%',
              textAlign: 'center',
            }}
          >
            <div className='close--icon'> 
            <h2>Special Instructions</h2>
            <img onClick={handleChangeModalClose} src={CloseImg} alt='cross-img'/>
             </div> 
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nibh neque, maximus posuere mauris bibendum a. Nulla tellus eros, fermentum eu consectetur at, imperdiet nec urna. Cras metus lacus, viverra sit amet interdum sed, scelerisque non quam. Donec auctor posuere justo at blandit. Aenean convallis, neque id semper lacinia, ex eros ultrices nisi, et efficitur risus massa a quam. Sed viverra, urna nec eleifend fringilla, velit lacus feugiat justo, eu luctus nisi ante eu felis. Aenean facilisis ante sed scelerisque venenatis. Duis sem risus, tincidunt a auctor id, dignissim at orci.
            </p>
           <Button 
            color='error'
            variant='outlined'
            style={{cursor: 'pointer'}}
            onClick={handleChangeModalClose}>
               Close
            </Button>
          </div>
        </div>
      )}


<div className='taskbar'>
           <Paper>
            <TableContainer >
              <Table>
              <TableHead>
                <TableRow style={{backgroundColor: '#e6eefa'}}>
                  <TableCell align='center' style={{fontWeight: "bold"}}>L.No.</TableCell>
                  <TableCell align='center' style={{fontWeight: "bold"}}>I.O #</TableCell> 
                  <TableCell align='center' style={{fontWeight: "bold"}}>SKU</TableCell>
                  <TableCell align='center' style={{fontWeight: "bold"}}>SKU Qty</TableCell>
                  <TableCell align='center' style={{fontWeight: "bold"}}>SKU Cost</TableCell>
                  <TableCell align='center' style={{fontWeight: "bold"}}>UOM</TableCell>
                  <TableCell align='center' style={{fontWeight: "bold"}}>Req. Delivery Date</TableCell>
                  <TableCell align='center' style={{fontWeight: "bold"}}>Assign To</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                <TableCell align="center">1</TableCell>
                <TableCell align="center">_</TableCell>
                <TableCell>
                <div style={{display: 'flex', alignItems: 'center', top: 2, left: 10
                }}> 
                  <img src={personImg}
                   alt='personImg'
                   style={{height: 30, width: 20, marginRight: 20 }}
                   />
                   
                  <div>
                  <p style={{fontSize: 14, marginLeft:10, marginTop: 10, marginBottom: 0}}>TRI-CUP</p>
                  Triwizard Cup
                </div>
                </div>
                </TableCell>
                <TableCell align="center">2</TableCell>
                <TableCell align="center">$1,000.00</TableCell>
                <TableCell align="center">Case</TableCell>
                <TableCell align="center">Aug 30,2024 </TableCell>
                <TableCell align="center">_</TableCell>
                </TableRow>
                <TableRow>
                <TableCell align="center">2</TableCell>
                <TableCell align="center">_</TableCell>
                <TableCell>
                <div style={{display: 'flex', alignItems: 'center', top: 2, left: 10
                }}> 
                  <img src={personImg}
                   alt='personImg'
                   style={{height: 30, width: 20, marginRight: 20 }}
                   />
                  <div>
                  <p style={{fontSize: 14, marginLeft:10, marginTop: 10, marginBottom: 0}}>SG-A7</p>
                 Galaxy A7
                </div>
                </div>
                </TableCell>
                <TableCell align="center">2</TableCell>
                <TableCell align="center">$0.00</TableCell>
                <TableCell align="center">EA</TableCell>
                <TableCell align="center">Aug 30,2024 </TableCell>
                <TableCell align="center">_</TableCell>
                </TableRow>
                <TableRow>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                </TableRow>
              </TableBody>
              </Table>
            </TableContainer>
           </Paper>
          </div>
    </div>
  );
};
export default UserDetails;