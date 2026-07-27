import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login';
import App from './App.js';
import './index.css'
import Home from './pages/home.js';
import Records from './pages/records.js';
import Reports from './pages/reports.js';
import Users from './pages/users.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />,
      },{
        path: '/login',
        element: <Login />,
      },{
        path: "/home",
        element: <Home/>
      },{
        path: "/records",
        element: <Records/>
      },{
        path: "/reports",
        element: <Reports/>
      },{
        path: "/users",
        element: <Users/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);