
import axios from "axios";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";




function HomePage() {
   
      const [allCountries, setAllCountries] = useState(null)
useEffect(()=>{
    axios.get("https://ih-countries-api.herokuapp.com/countries")
     .then((response)=>{
        console.log(response);
        setAllCountries(response.data)
     }).catch((error)=>{
        console.log(error);
     })
                
        
},[])

if (allCountries === null) {
            return <h3>... buscando</h3>
        }
return(
 <>
    <h1>WikiCountries: Your Guide to the World</h1>

<div>
        {allCountries.map((eachCountry)=>{
            return(
                <li key={eachCountry.alpha3Code}>
                    <Link to={`/${eachCountry.alpha3Code}`}>{eachCountry.name.official}</Link>         
                </li>
            )
        })}</div>

     </> 
     )}
export default HomePage;
