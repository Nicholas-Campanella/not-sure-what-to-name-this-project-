import REACT_APP_AIRTABLE_BASE from './.env.development.local'

import REACT_APP_AIRTABLE_KEY from './.env.development.local'


async function fetchData() {
  const url = "https://api.airtable.com/v0/REACT_APP_AIRTABLE_KEY/REACT_APP_AIRTABLE_BASE";
  try {
    const res = await axios.get(url);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
fetchData();