import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import LoginModal from './loginmodal'
import './cover.css'

const Getstart = () => {
    localStorage.setItem("route","login-none");
    const [showModal,setShowModal]= useState(false);
    
  return (
    <div className='leftcover'>
        
        <p>Trusted by <b>Millions</b> of Indians. Start investing <br/>today.</p>
        <Button variant="contained" className='start' onClick={()=>setShowModal(true)}><b>Get Started</b></Button>
        {showModal && <LoginModal close={()=>setShowModal(false)}/>}        
    </div>
  )
}

export default Getstart