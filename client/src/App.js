
import './App.css';
import Footer from './Footer'
import { useEffect, useState } from 'react'
import CarIndex from './CarIndex'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
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
        <Route />
        
      </Routes>
      <Footer/>
    </div>
  );
}
console.log()
export default App;
