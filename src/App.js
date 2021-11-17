import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import {VATContext} from './Context/VATcontext'

import Home from './Component/App/Home'

function App() {

  const [ noVAT, setNoVAT ] = useState(false)
  const [ isAnnual, setIsAnnual ] = useState(false)
  const [ isMonthly, setIsMonthly ] = useState(false)
  const [ isTrimester, setIsTrimester ] = useState(false)

  return (
    <div id="container">
      <div className="App">
        <BrowserRouter>
        <VATContext.Provider value={{ 
          noVAT,
          isAnnual,
          isMonthly,
          isTrimester,
          setNoVAT,
          setIsAnnual,
          setIsMonthly,
          setIsTrimester
          }}>
          <Routes>
            <Route path='/' element={<Home />} />

          </Routes>
        </VATContext.Provider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
