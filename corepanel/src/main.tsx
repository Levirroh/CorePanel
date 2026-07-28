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
import Interface from './pages/interface';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />,
      }, {
        path: '/login',
        element: <Login />,
      }, {
        path: "/",
        element: <Interface />,
        children: [
          { path: "home", Component: Home },
          { path: "records", Component: Records },
          { path: "reports", Component: Reports },
          { path: "users", Component: Users },
        ]
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);