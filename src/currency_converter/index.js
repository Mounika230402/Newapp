import React, { useEffect, useState } from "react";
import { currencies } from "./data";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import './index.css';
import NavBar from "../Country_api/Navbar"

const CurrencyConverter = (props) => {
    const [selectFrom, setSelectFrom] = useState('');
    const [selectTo, setSelectTo] = useState('');
    const [amountEntered, setAmount] = useState(1);
    const[FromSymbol,setFromSymbol]=useState()
    const[ToSymbol,setToSymbol]=useState()
    const [object, setObject] = useState({});
    const [details, setDetails] = useState({});
    const [error, setError] = useState(false);
    const [result,setResult]=useState(false)
    const currencyDetails=Object.values(currencies)
    // console.log(currencyDetails)
    useEffect(() => {
        fetchData();
    }, [object]);
    const fetchSymbol=(country)=>{
        if(country!=="")
        {
            const Countrysymbol= currencyDetails.find(each=> each.code===country)
            return Countrysymbol.symbol
        }
       
    }
    const fetchData = async () => {
        try {
            if (selectTo !== "" && selectFrom !== "" && amountEntered) {
                setError(false);
                const response = await axios.get(`https://v6.exchangerate-api.com/v6/ab61f7c904f1ac8ec4d7443b/pair/${selectFrom}/${selectTo}/${amountEntered}`);
                setDetails(response.data);
                setResult(true)
            } else {
                setError(true);
            }
        } catch (error) {
            setError(true);
        }
    };

    const amountHandler = (event) => {
        event.preventDefault();
        setAmount(event.target.value);
        setObject({ ...object, amount: event.target.value });
        
    };

    const selectHandlerFrom = (event) => {
        event.preventDefault();
        setObject({ ...object, from: event.target.value });
        setSelectFrom(event.target.value);
        setFromSymbol(fetchSymbol(event.target.value))
    };

    const selectHandlerTo = (event) => {
        event.preventDefault();
        setSelectTo(event.target.value);
        setObject({ ...object, to: event.target.value });
        setToSymbol(fetchSymbol(event.target.value))
    };

    return (
       <div className="Currency_Main_Div">
        <NavBar/>
         <div className="Currency_Div">
            <form className="currency-converter">
                <label>From</label>
                <Form.Select aria-label="Default select example" value={selectFrom} onChange={selectHandlerFrom}>
                    <option value="">Select Value</option>
                    {Object.keys(currencies).map((each, index) => (
                        <option value={each} key={index}>{`${each} - ${currencies[each].name_plural}`}</option>
                    ))}
                </Form.Select>

                <label>To</label>
                <Form.Select aria-label="Default select example" value={selectTo} onChange={selectHandlerTo}>
                    <option value="">Select Value</option>
                    {Object.keys(currencies).map((each, index) => (
                        <option value={each} key={index}>{`${each} - ${currencies[each].name_plural}`}</option>
                    ))}
                </Form.Select>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="text" value={amountEntered} onChange={amountHandler} />
                </Form.Group>
                {result && <h4>{`${FromSymbol}${amountEntered} = ${ToSymbol}${details.conversion_result}`}</h4>}
            </form>
        </div>
       </div>
    );
};

export default CurrencyConverter;
