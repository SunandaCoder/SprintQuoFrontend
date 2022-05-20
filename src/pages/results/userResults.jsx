import { Table } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {table} from 'react-bootstrap';
 

const myObj = JSON.parse(localStorage.getItem('login'));
console.log(myObj.token)
let token = myObj.token
let configObj = {
    headers: {
        Authorization: token,
    },
}   
function Result(){
    const [result, setResult] = useState([]);
    
   console.log(result)
   
    useEffect(function () {
        axios
            .get("http://127.0.0.1:8000/api/sprint/3/votes",configObj)
            .then((response) => setResult(response.data))
            .then((error) => console.log(error));
    },[]);
    
    
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                    </tr>   
                </thead>
                <tbody>
                    
                        <tr>
                            <td>{result.vote_by}</td>
                            {/* <td>{result.vote_details.parameter}</td> */}
                        </tr>
                </tbody>
            </Table>
            
            
        </div>
    );
}
export default Result;