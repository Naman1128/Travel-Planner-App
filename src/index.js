import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Login';
import Blog from './Blog';
import About from './About';
import Plan from './Plan';
import Mumbai from './Blogs/Mumbai';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Blog",
    element: <Blog />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "Plan",
    element: <Plan />,
  },
  {
    path: "Blogs/Mumbai",
    element: <Mumbai />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
