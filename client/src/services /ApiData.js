async function fetchData() {
  const url = "https://airtable.com/appxLxkK1FdeF1Dgo/tbl2eyrfSyrjHRGQC/viw8bkOrdSazHx8P5?blocks=hide";
  try {
    const res = await axios.get(url);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
fetchData();