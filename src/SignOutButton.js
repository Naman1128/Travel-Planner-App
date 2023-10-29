// SignOutButton.js
import React from 'react';
import { Auth } from 'aws-amplify';

const SignOutButton = () => {
  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      // Optionally, you can redirect the user to a sign-out confirmation page or do other post-sign-out actions.
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <button onClick={handleSignOut}>Sign Out</button>
  );
};

export default SignOutButton;
