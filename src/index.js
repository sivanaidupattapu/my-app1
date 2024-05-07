import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Country from './countries';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CountryDetails from './countrydetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"countries",
        element:<Country></Country>,
        children:[
          {
            path:'countrydetails/:cname',
            element:<CountryDetails></CountryDetails>
          }
        ]
      },
     
    ]
  },
  
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}></RouterProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
