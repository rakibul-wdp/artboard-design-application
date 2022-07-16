import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SignOut = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };
  return (
    <div>
      {user && (
        <button className='btn btn-primary' onClick={logout}>
          Sign Out
        </button>
      )}
    </div>
  );
};

export default SignOut;
