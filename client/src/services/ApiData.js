import axios from "axios"

const base = process.env.REACT_APP_AIRTABLE_BASE
const key = process.env.REACT_APP_AIRTABLE_KEY

const config = {
  headers: {
    Authorization: `Bearer ${key}` 
  }
}
export const getCars= async()=> {
  const url = `https://api.airtable.com/v0/${base}/cartable`

  const res = await axios.get(url, config);
  console.log(res.data);
  return res.data.records 
}
