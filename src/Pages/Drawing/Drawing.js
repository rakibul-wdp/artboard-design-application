import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Drawing = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };
  return (
    <div>
      <h2>Drawing page</h2>
      {user && (
        <button className='btn btn-ghost' onClick={logout}>
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Drawing;
