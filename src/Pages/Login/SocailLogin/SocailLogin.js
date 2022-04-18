import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.int';
import google from '../../../images/social/download.png'


const SocailLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    

    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
      }
      if(user){
        navigate('/home')
      }

    return (
        <div className='container mx-auto w-50' >
           <div className='d-flex align-items-center'>
           <div style={{height:'1px'}} className='bg-primary w-50'></div>
            <p className='mt-2 px-2'>or</p>
            <div style={{height:'1px'}} className='bg-primary w-50'></div>
           </div>
           <div>
                <p>{errorElement}</p>
               <button className='btn btn-info d-block mx-auto w-50 my-2'>
               <img src={google} alt="" />
                  <span className='px-2' onClick={()=>{signInWithGoogle()}}> Google Sign In</span>
                   </button>
               <button className='btn btn-info d-block mx-auto w-50 my-2'>
               <img src="" alt="" />
                   <span className='px-2'>Github Sin In</span>
                   </button>
           </div>
        </div>
    );
};

export default SocailLogin;