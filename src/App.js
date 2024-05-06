import {useState,useEffect,createContext} from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Careers from './components/Careers';
import Products from './components/Products';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Feedback from './components/Feedback';
import Partners from './components/Partners';
import Services from './components/Services';
import About from './components/About';
import ScrollToTopOnRouteChange from './components/ ScrollToTopOnRouteChange';
import { AnimatePresence } from 'framer-motion';
import RouteTransition from './components/RouteTransition';
import Careercard from './components/Careercard';
import Career2 from './components/Careercard/Career/career2';
import Career3 from './components/Careercard/Career/career3';
import Career4 from './components/Careercard/Career/career4';
import Career5 from './components/Careercard/Career/career5';
import Career6 from './components/Careercard/Career/career6';
import Apply from './components/Apply';
import './App.css'

export const store=createContext()
const App = () =>{
  const [count,setCount]=useState(0);


  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await axios.put("http://localhost:8081/api/v1/auth/countupdate/");
        console.log(res.data.message);
        setCount(res.data.message);
      } catch (error) {
        console.error("Error fetching count:", error);
      }
    };

    fetchCount(); // Call fetchCount inside useEffect

  }, []); // Empty dependency array to run once on mount
  
  
  
  return(
  <div className="body">
    <BrowserRouter>
      <ScrollToTopOnRouteChange />
      <Navbar />
  
        <Routes>
          <Route
            path="/"
            element={
              <RouteTransition>
                <Home />
              </RouteTransition>
            }
          />
          <Route
            path="/careers"
            element={
              <RouteTransition>
                <Careers />
              </RouteTransition>
            }
          />
          <Route
            path="/products"
            element={
              <RouteTransition>
                <Products />
              </RouteTransition>
            }
          />
            <Route
            path="/apply/:jobname"
            element={
              <RouteTransition>
                <Apply />
              </RouteTransition>
            }
          />
          <Route
            path="/about"
            element={
              <RouteTransition>
                <About />
              </RouteTransition>
            }
          />
          <Route
            path="/services"
            element={
              <RouteTransition>
                <Services />
              </RouteTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <RouteTransition>
                <Contact />
              </RouteTransition>
            }
          />
          {/* <Route
            path="/feedback"
            element={
              <RouteTransition>
                <Feedback />
              </RouteTransition>
            }
          /> */}
          <Route
            path="/clients"
            element={
              <RouteTransition>
                <Partners />
              </RouteTransition>
            }
          />
            <Route
            path="/career1"
            element={
              <RouteTransition>
                <Careercard />
              </RouteTransition>
            }
          />

<Route
            path="/career2"
            element={
              <RouteTransition>
                <Career2 />
              </RouteTransition>
            }
          />
             <Route
            path="/career3"
            element={
              <RouteTransition>
                <Career3 />
              </RouteTransition>
            }
          />
             <Route
            path="/career4"
            element={
              <RouteTransition>
                <Career4 />
              </RouteTransition>
            }
          />
             <Route
            path="/career5"
            element={
              <RouteTransition>
                <Career5 />
              </RouteTransition>
            }
          />
             <Route
            path="/career6"
            element={
              <RouteTransition>
                <Career6 />
              </RouteTransition>
            }
          />
          
        </Routes>
      
      <Footer count={count} />
    </BrowserRouter>
  </div>
);
          }

export default App;
