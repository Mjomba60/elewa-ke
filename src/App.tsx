import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/layout';
import About from './pages/about';
import Invest from './pages/invest';
import SocialImpact from './pages/socialImpact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path= "/" element= {<Layout />}>
              <Route 
                index element = {<About />}/>
              <Route 
                path='/social-impact' element= {<SocialImpact />}/>
              <Route 
                path='/invest' element= {<Invest />}/>
            </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
