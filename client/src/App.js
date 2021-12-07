import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Footer from './Footer'
import addCarData from './Form'
import axios from 'axios'
import { useEffect } from 'react'
import LoadCarData from './carIndex'
import {Route, Routes} from 'react-router-dom'
 
// const base = process.env.REACT_APP_AIRTABLE_BASE
// const key = process.env.REACT_APP_AIRTABLE_KEY
// const config = {
//   headers: {
//     Authrization: `Bearer keyLyNsVvtpTEUADg` 
//   }
// }





function App() {
  
  useEffect(() => {
    async function fetchData() {
      const url = `https://api.airtable.com/v0/appxLxkK1FdeF1Dgo/cartable?api_key=keyLyNsVvtpTEUADg`
      const res = await axios.get(url);
      console.log(res.data);
  
      // try {
      //   const res = await axios.get(url, config);
      //   console.log(res.data);
      // } catch (error) {
      //   console.log(error);
      // }
    }
    fetchData()
  }, [])
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element='div'/>
        <Route />
     </Routes>
    </div>
  );
}
console.log()
export default App;
