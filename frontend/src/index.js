import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; // Import your App component

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root using createRoot

root.render(
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>  
    <App />
  </BrowserRouter>
);
