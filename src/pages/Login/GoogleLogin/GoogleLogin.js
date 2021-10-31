import React, { useContext } from 'react';
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { AuthContext } from '../../../Context/AuthProvider';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication()
const GoogleLogin = () => {
   const [loginUser, setLoginUser] = useContext(AuthContext); 
   const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const GoogleProvider = new GoogleAuthProvider();
  const googleHandler = () => {
    const auth = getAuth();
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const user = result.user;
        setLoginUser(user);
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
    return (
        <div className="mt-5">
            <button className="btn btn-info mt-5" onClick={googleHandler}>
        Sign In With Google
      </button>
        </div>
    );
};

export default GoogleLogin;