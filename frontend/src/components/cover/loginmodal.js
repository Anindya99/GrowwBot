import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { GoogleLogin } from '@react-oauth/google';
//import { useGoogleLogin } from '@react-oauth/google';
import AuthStore from '../../middleware/authstore'
import Axios from 'axios'
import './modal.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 420,
  bgcolor: 'background.paper',
  borderRadius: '9px',
  boxShadow: 24,
  p: 0,
};
const Loginmodal = ({close}) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    close();
  }
  const responseGoogle=(response)=>{
    //console.log(response)
    //dont send something directly in the body, send as object here key is sendToken(can be anything) 
    //and the token is res.tokenId
       Axios
      .post('/api/Oauth/google',{sendToken:response.credential})
      .then(res=>{
        AuthStore.storeJWT(res.data.token)    
        window.location.href = "/stocks/user/explore";
      })
      .catch(err=>{
          if (err.response) {
              // Request made and server responded
              console.log(err.response.data.msg);
              console.log(err.response.status);
              //console.log(err.response.headers);
              //seterror(err.response.data.msg)
            } else if (err.request) {
              // The request was made but no response was received
              console.log(err.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', err);
            }
      }) 
  }
  /* const login = useGoogleLogin({
    onSuccess: codeResponse => responseGoogle(codeResponse),
  }); */
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='modal-container'>
            <div className='div-left'>
                <h2>Simple,Free</h2>
                <h2>Investing.</h2>
            </div>
            <div className='div-right'>
                <div className='icon'><CloseIcon className='close-icon' style={{ fontSize: 22 }} onClick={handleClose}/></div>
                <p>Welcome to Groww</p>
                
               {/*  <GoogleLogin
                    //clientId={process.env.REACT_APP_GOOGLE_CLIENTID}
                    //cookiePolicy='single_host_origin'
                    render={renderProps=>(
                      <button onClick={renderProps.onClick}
                      disabled={renderProps.disabled} className="buttongoogle">
                      <img src="icons/google.svg" alt="google-icon" className="icong"></img>
                      <span className="buttongText">Continue with Google</span>
                      </button>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle} 
                    >
                </GoogleLogin>  */}
                <div className='newLogin'>
                    <GoogleLogin
                      onSuccess={credentialResponse => {
                        responseGoogle(credentialResponse);
                      }}
                      onError={() => {
                        console.log('Login Failed');
                      }}
                    />
                </div>

                      {/* <button onClick={()=>login()}
                       className="buttongoogle">
                      <img src="icons/google.svg" alt="google-icon" className="icong"></img>
                      <span className="buttongText">Continue with Google</span>
                      </button> */}

                <p className='terms'>By proceeding, I agree to <b>T&C</b> and <b>Privacy policy.</b></p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>

  )
}

export default Loginmodal