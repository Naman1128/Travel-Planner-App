import React from 'react';
import './App.css';
import Navbar from './Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import SignOutButton from './SignOutButton'; // Import the SignOutButton component
import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App() {
  // Set the URL of the single image you want to display
  const imageUrl = '/travel.jpeg';

  const backgroundImageUrl = `${process.env.PUBLIC_URL}${imageUrl}`;

  const bannerStyle = {
    backgroundColor: '#333',
    flex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="App">
      <Navbar />
      <div style={bannerStyle}></div>
      <SignOutButton /> {/* Include the SignOutButton component for sign out */}
    </div>
  );
}

export default withAuthenticator(App);
