import logo from './logo.svg';
import './App.css';
import Navbar1 from './Navbar'
import Navbar2 from './Navbar2'
import Footer from './Footer'
import addCarData from './Form'
import axios from 'axios'
import { useEffect } from 'react'
import LoadCarData from './carIndex'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Homepage'


function App() {
  
  useEffect(() => {
    async function fetchData() {
      const url = `https://api.airtable.com/v0/appxLxkK1FdeF1Dgo/cartable?api_key=keyLyNsVvtpTEUADg`
      const res = await axios.get(url);
      console.log(res.data);
    }
    fetchData()
  }, [])
  
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={HomePage}/>
        <Route path='' elemnet={LoadCarData, addCarData} />
        <Route/>
      </Routes>
      
    </div>
  );
}
console.log()
export default App;
