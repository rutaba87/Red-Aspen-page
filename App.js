import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Container from './Container';
import SubContainer1 from './SubContainer1';
import SubContainer2 from './SubContainer2';
import UserDetails from './UserDetails';
import Modal from './Modal';

function App() {
  return (
    <Router>
      <div>
        
        
        <Routes>
        
          <Route path="/" element={
            <>
              <Navbar /> 
              <Container />
              <SubContainer1 />
              <SubContainer2 />
            </>
          } />
         
          <Route path="/user/:id" element={
           <UserDetails/>
            } />
            <Route path="/user/:id" element={
              <Modal/>
            }>
            </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
