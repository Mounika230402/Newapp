
import React, { useEffect, useState } from "react"
import axios from "axios";
import CardComponent from "./card";
import NavBar from "./Navbar";
import "./index.css"

const CountryComponent = (props) => {
  const[Data,setData]=useState([])
    const[offical,setoffical]=useState([])
    const[country,setCountry]=useState("")

    
    useEffect( ()=>{
        fetchData()
    },[])
    const fetchData=async ()=>{
        const response= await axios.get("https://restcountries.com/v3.1/all")
        const{data,status}=response

        if(status===200){
            console.log(data)
            setData(data)
        }
    }
    

   function CountryHandler(event){
    setCountry(event.target.value)
    console.log(country)
  
    const offical=Data.filter(each=> each.name.official.toLowerCase().includes(event.target.value))
    setoffical(offical)
    }
  return (
    <>
    <NavBar className="navbar"/>
    <div className="MainDiv">
    <input type="text" value={country} onChange={CountryHandler} placeholder="Enter the country" className="input-box"/>
    <div className="card-container">
      {
        offical.length>0 ?
        offical.map((each,index)=>{
          return(
            <CardComponent country={each.name.official} flag={each.flags.png} population={each.population} id={index} capital={each.capital} key={index} region={each.region}  />
           
          )
        }):
        Data.map((each,index)=>{
          return(
            <CardComponent country={each.name.official} flag={each.flags.png} population={each.population} capital={each.capital} key={index} id={index} region={each.region}/>
           
          )
        })
      }
    
    </div>
    </div>
    </>
  )
};

export default CountryComponent;


