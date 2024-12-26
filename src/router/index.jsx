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
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Gallery from '../components/Gallery';
import AboutUs from '../components/AboutUs';
import Project from '../components/Project';


export const router = createBrowserRouter([

  
  {
    path: '/',
    element: <App />,
    children: [
    
    
      {
        path: '',
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
        path: 'choose',
        element:<Choose/>    
      },
      {
        path: 'Contact',
        element:<Contact/>   
      },
      {
        path: '/gallery',
        element:<Gallery/>   
      },
      {
        path: '/aboutUs',
        element:<AboutUs/>   
      },
      {
        path: '/project',
        element:<Project/>   
      },
    ],
  },
]);
