import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements ,Route, RouterProvider } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import Layout from './Layout.jsx';
import HomePage from './components/HomePage.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Gallery from './components/Gallery.jsx'
import Services from './components/Services.jsx'
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<HomePage/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='Gallery' element={<Gallery/>}/>
    <Route path='Services' element={<Services/>}/>
    <Route path='signup' element={<SignUp/>}/>
    <Route path='login' element={<Login/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
);