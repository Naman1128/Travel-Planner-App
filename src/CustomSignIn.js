import React from 'react';

const CustomSignIn = (props) => {
  return (
    <div className="custom-signin">
      <h2>Custom Sign In</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button onClick={props.onSignIn}>Sign In</button>
      </form>
    </div>
  );
};

export default CustomSignIn;
