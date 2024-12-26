import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Choose from '../components/Choose';
import Nearby from '../components/Nearby';
import Features from '../components/Features';
import Projects from '../components/Projects';
import Gallery from '../components/Gallery';

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
            <Choose/>
            <Nearby/>
            <Features/>
          <Projects/>
          <Footer/>
          </>
        ),
      },
      {
        path: '/gallery',
        element:<Gallery/>
          
           
          
        
      },
    ],
  },
]);
