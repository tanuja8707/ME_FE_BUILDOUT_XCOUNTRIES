import logo from './logo.svg';
import './App.css';
import  { useState, useEffect } from 'react'

function App() {
  const [countries,setCountries] = useState([]);
  const getCountriesData = async () => {
    try {
      const data = await fetch("https://restcountries.com/v3.1/all");
      const res = await data.json();
      console.log(res,"res")
      setCountries(res)
    } catch(e) {
      console.log("Error", e)

    }
  };

  useEffect(() => {
    getCountriesData();
  },[])

  const imageStyle = {
    width: "100px",height:"100px"
  };

  const container = {
    display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",height:"100vh"
  };

  const cardStyle = {
    width:"200px",border:"1px solid #ccc",borderRadius:"10px",margin:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"
  }

  return (
    <div style={container}>
      {countries.map((country) => ( 
        <div key={country.cca3} style={cardStyle}>
          <img src={country.flags.png} alt={`Flag of ${country.name.common}`} style={imageStyle} />
          <h3>{country.name.common}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
