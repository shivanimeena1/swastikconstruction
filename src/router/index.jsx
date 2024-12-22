import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
    
    
      {
        path: 'home',
        element: (
          <>
            <Navbar />
            <Hero />
          </>
        ),
      },
    ],
  },
]);
