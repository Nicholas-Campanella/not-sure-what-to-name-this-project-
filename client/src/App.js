import logo from './logo.svg';
import './App.css';
import Navbar1 from './Navbar'
import Navbar2 from './Navbar2'
import Footer from './Footer'
import addCarData from './Form'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CarIndex from './CarIndex'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Homepage'
import {getCars} from './services/ApiData'


function App() {
  
  const [cars, setCars] = useState([])
  
  useEffect(() => {
   const fetchData = async()=> {
      const res = await getCars();
      setCars(res);
    }
    fetchData()
  }, [])
  
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/CarIndex' element={<CarIndex cars={cars}/>}  />
        <Route/>
      </Routes>
      
    </div>
  );
}
console.log()
export default App;
