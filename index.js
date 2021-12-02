
async function fetchData() {
  const url = "https://airtable.com/appxLxkK1FdeF1Dgo/tbl2eyrfSyrjHRGQC/viw8bkOrdSazHx8P5?blocks=hide";
  try {
    const res = await axios.get(url);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

// const axios = require("axios").default;

// const  options = {
//   method: 'GET',
//   url: 'https://yh-finance.p.rapidapi.com/auto-complete',
//   params: {q: 'tesla', region: 'US'},
//   headers: {
//     'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
//     'x-rapidapi-key': 'deb7bea3cbmshfb81420f26eba26p1c5f3ajsn4d19a6a13a90'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });