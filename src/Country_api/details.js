
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './details.css'

const Details = () => {
    const params=useParams()
    const[countryData,setCountry]=useState({})
    const {id}=params
    useEffect( ()=>{
      fetchData()
  },[id])
  const fetchData=async ()=>{
      const response= await axios.get(`https://restcountries.com/v3.1/all`)
      const{data,status}=response

      if(status===200){
          setCountry(data[id])
      }
  }
    
  return (
    <div>
      {
        Object.keys(countryData).length > 0 ?<>
        {
          <div className="detailsContainer">
            <div className="Details">
          <div className="round">
          <img src={countryData.flags.svg} alt="Flag" className="flagImage" />
          </div>
          <h2>{countryData.name.common}</h2>
              <table className="Table">
                <tr>
                  <th>Capital:</th>
                  <td>{countryData.capital[0]}</td>
                </tr>
                <tr>
                  <th>Continent:</th>
                  <td>{countryData.continents[0]}</td>
                </tr>
                <tr>
                  <th>Population:</th>
                  <td>{countryData.population}</td>
                </tr>
                <tr>
                  <th>Latitudes and Longitudes are:</th>
                  <td>{countryData.latlng[0]} {countryData.latlng[1]}</td>
                </tr>
                <tr>
                  <th>Currency:</th>
                  <td> {countryData.currencies[
                          Object.keys(countryData.currencies)[0]
                      ].name}{' '}
                      - {Object.keys(countryData.currencies)[0]}</td>
                </tr>
                <tr>
                  <th>Common Languages:</th>
                  <td>{Object.values(countryData.languages)
                          .toString()
                          .split(',')
                          .join(', ')}</td>
                </tr>
                <tr>
                  <th>Borders:</th>
                  <td> {(countryData.borders) ? Object.values(countryData.borders)
                          .toString()
                          .split(',')
                          .join(', ') : "NAN"}</td>
                </tr>
                <tr>
                  <th>Area:</th>
                  <td>{countryData.area}</td>
                </tr>
                <tr>
                  <th>Calling Are:</th>
                  <td>{countryData.idd.root}{countryData.idd.suffixes[0]}</td>
                </tr>
                <tr>
                  <th>Capital Latitudes and Longitudes are:</th>
                  <td>{countryData.capitalInfo.latlng[0]} {countryData.capitalInfo.latlng[1]}</td>
                </tr>
                <tr>
                  <th>TimeZones:</th>
                  <td>{Object.values(countryData.timezones)
                          .toString()
                          .split(',')
                          .join(', ')}</td>
                </tr>
                <tr>
                  <th></th>
                  <td></td>
                </tr>
                <tr>
                  <th></th>
                  <td></td>
                </tr>
              </table>
      </div>
          </div>
        }
        </> :null
      }
    </div>
  )
};

export default Details;
