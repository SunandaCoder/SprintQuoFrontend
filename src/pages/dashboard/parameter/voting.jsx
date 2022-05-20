import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import {postVoting} from '../../../components/serives/dataserives'

// import { getUser } from '../../../components/serives/dataserives';
// const accessToken = 
//     'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.lW5E-5X2qiea7mbotJorI3mAqXV3bmyHycbc7ggAB9A'

// const authAxios = axios.create({
//     headers:{
//         Authorization: 'Bearer ${accessToken}',
//     },
// }); 

const myObj = JSON.parse(localStorage.getItem('login'));
console.log(myObj.token)
let token = myObj.token
let configObj = {
    headers: {
        Authorization: token,
    },
}   
function Voting(){
    const [users, setUsers] = useState([]);
    const [sprints, setSprints] = useState([])
    const [parameters, setParameters] = useState([])
    const [choiceSprint, setChoiceSprint] = useState([])
    const [choiceUserFirst, setUserFirst] = useState([])
    const [choictUserSecond, setUserSecond] = useState([])
    const [choiceUserThird, setUserThird] = useState([])
    const [choiceUserFourth, setUserFourth] = useState([])
    const [choiceUserFifth, setUserFifth] = useState([])
    const [choiceParameterFirst, setParameterFirst] = useState([])
    const [choictParameterSecond, setParameterSecond] = useState([])
    const [choiceParameterThird, setParameterThird] = useState([])
    const [choiceParameterFourth, setParameterFourth] = useState([])
    const [choiceParameterFifth, setParameterFifth] = useState([])
    
    
    const handleSprintChange = (e) => {
        setChoiceSprint(e.target.value)
        console.log(e.target.value)
      
    };
    const handleUserChangeFirst = (e) => {
        setUserFirst(e.target.value)
        // alert(e.target.value)
      
    };
    const handleUserChangeSecond = (e) => {
        setUserSecond(e.target.value)
        // alert(e.target.value)
      
    };
    const handleUserChangeThird = (e) => {
        setUserThird(e.target.value)
        // alert(e.target.value)
      
    };
    const handleUserChangeFourth = (e) => {
        setUserFourth(e.target.value)
        // alert(e.target.value)
      
    };
    const handleUserChangeFifth = (e) => {
        setUserFifth(e.target.value)
        // alert(e.target.value)
      
    };
    const handleParameterChange = (e) => {
        // setParameters(e.target.value)
        if((e.target.value)===1){
            setParameterFirst(e.target.value)
        }else if((e.target.value)===2){
            setParameterSecond(e.target.value)
        }else if((e.target.value)===3){
            setParameterThird(e.target.value)
        }else if((e.target.value)===4){
            setParameterFourth(e.target.value)
        }else if((e.target.value)===5){
            setParameterFifth(e.target.value)
        }
    };



    useEffect(function () {
        axios
            .get("http://127.0.0.1:8000/user/user-registration")
            .then((response) => setUsers(response.data.data))
            .then((error) => console.log(error));
    },[]);
    useEffect(function () {
        axios
            .get("http://127.0.0.1:8000/api/voting-param", configObj)
            .then((response) => setParameters(response.data.data))
            .then((error) => console.log(error));
    },[]);
    useEffect(function () {
        axios
            .get("http://127.0.0.1:8000/api/sprint/",configObj)
            .then((response) => setSprints(response.data.data))
            .then((error) => console.log(error));
    },[]);
    const submit = ()=>{
        let data= {
            "vote_table":[
                  {
                      "parameter_id":choiceParameterFirst,
                      "vote_for":choiceUserFirst
                  },
                  {
                      "parameter_id":choictParameterSecond,
                      "vote_for":choictUserSecond
                  },
                  {
                      "parameter_id":choiceParameterThird,
                      "vote_for":choiceUserThird
                  },
                  {
                      "parameter_id":choiceParameterFourth,
                      "vote_for":choiceUserFourth
                  },
                  {
                    "parameter_id":choiceParameterFifth,
                    "vote_for":choiceUserFifth
                }
              ]
          }
        postVoting(data,choiceSprint).then((response)=>{
            console.log(response.data)
        }
        )
        .catch((error)=>{
            console.log(error)
        })
    }
    
    return (
        <div>
            <div>
                <select className="form-control col-md-3"
                onChange={handleSprintChange}
                >
                    <option value="">--Select Sprint--</option>
                    {sprints.map((sprint) => ( 
                            <option key={sprint.id} value={sprint.id}>{sprint.expiry_date}</option>
                    ))}
                </select>

            </div>
            <div>
                <select className="form-control col-md-3"
                onChange={handleUserChangeFirst}
                >
                    <option value="">--Select User--</option>
                    {users.map((user) => ( 
                            <option key={user.id} value={user.id}>{user.username}</option>
                    ))}
                </select>
                <select className="form-control col-md-3"
                onChange={handleParameterChange}
                >
                    <option value="">--Select parameters--</option>
                    {parameters.map((parameter) => ( 
                            <option key={parameter.id} value={parameter.id}>{parameter.parameter_name}</option>
                    ))}
                </select>
            </div>
            <div>
                <select className="form-control col-md-3"
                onChange={handleUserChangeSecond}
                >
                    <option value="">--Select User--</option>
                    {users.map((user) => ( 
                            <option key={user.id} value={user.id}>{user.username}</option>
                    ))}
                </select>
                <select className="form-control col-md-3"
                onChange={handleParameterChange}
                >
                    <option value="">--Select parameters--</option>
                    {parameters.map((parameter) => ( 
                            <option key={parameter.id} value={parameter.id}>{parameter.parameter_name}</option>
                    ))}
                </select>
            </div>
            <div>
                <select className="form-control col-md-3"
                onChange={handleUserChangeThird}
                >
                    <option value="">--Select User--</option>
                    {users.map((user) => ( 
                            <option key={user.id} value={user.id}>{user.username}</option>
                    ))}
                </select>
                <select className="form-control col-md-3"
                onChange={handleParameterChange}
                >
                    <option value="">--Select parameters--</option>
                    {parameters.map((parameter) => ( 
                            <option key={parameter.id} value={parameter.id}>{parameter.parameter_name}</option>
                    ))}
                </select>
            </div>
            <div>
                <select className="form-control col-md-3"
                onChange={handleUserChangeFourth}
                >
                    <option value="">--Select User--</option>
                    {users.map((user) => ( 
                            <option key={user.id} value={user.id}>{user.username}</option>
                    ))}
                </select>
                <select className="form-control col-md-3"
                onChange={handleParameterChange}
                >
                    <option value="">--Select parameters--</option>
                    {parameters.map((parameter) => ( 
                            <option key={parameter.id} value={parameter.id}>{parameter.parameter_name}</option>
                    ))}
                </select>
            </div>
            <div>
                <select className="form-control col-md-3"
                onChange={handleUserChangeFifth}
                >
                    <option value="">--Select User--</option>
                    {users.map((user) => ( 
                            <option key={user.id} value={user.id}>{user.username}</option>
                    ))}
                </select>
                <select className="form-control col-md-3"
                onChange={handleParameterChange}
                >
                    <option value="">--Select parameters--</option>
                    {parameters.map((parameter) => ( 
                            <option key={parameter.id} value={parameter.id}>{parameter.parameter_name}</option>
                    ))}
                </select>
            </div>
            <div className="signin-bottom-button">
                <Button variant="contained" href="#contained-buttons" onClick={submit}>
                    submit
                </Button>
            </div>
        </div>
    );
}
export default Voting;
// import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// export default function SelectSmall() {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   return (
//     <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
//       <InputLabel id="demo-select-small">Age</InputLabel>
//       <Select
//         labelId="demo-select-small"
//         id="demo-select-small"
//         value={age}
//         label="Age"
//         onChange={handleChange}
//       >
//         <MenuItem value="">
//           <em>None</em>
//         </MenuItem>
//         <MenuItem value={10}>Ten</MenuItem>
//         <MenuItem value={20}>Twenty</MenuItem>
//         <MenuItem value={30}>Thirty</MenuItem>
//       </Select>
//     </FormControl>
//   );
// }


// import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { getUser } from '../../../components/serives/dataserives';
// import {getParameter} from '../../../components/serives/dataserives'


// getUser().then((response)=>{
//     console.log(response.data)
//     const newarr = (response.data).map(function(cvalue){
//         return cvalue
//     })
//     console.log(newarr)
// }
// )
// function Voting(){
//     const[data, setData] = React.useState([])
    // const[sprint, setSprint] = React.useState("")
    // const[voteFor, setVoteFor] = React.useState("")
    // const[parameter, setParameter] = React.useState("")
  
    // const[regexObj, setRegexObj] = React.useState({emailBorder:false,passwordBorder:false,emailHelper:"",passwordHelper:""})
    // React.useEffect(()=>{
    //     getUser().then((response)=>
    //         setData(response.data)
    //     )
    // },[])
    // console.warn(data)
    // {
    //     data.map((item)=>
    //     <p>{item.username}</p>

    //     )
    // }

    // const takeParameter = (e)=>{
    //     console.warn(e.target.value)
    //     setParameter(e.target.value)
    // }
    // const takeVoteFor = (e)=>{
    //     console.warn(e.target.value)
    //     setData(e.target.value)
    // }
    // const takeSprint = (e)=>{
    //     console.warn(e.target.value)
    //     setSprint(e.target.value)
    // // }
    // const submit = ()=>{
    //     let emailTest=emailRegex.test(email)
    //     let passwordTest=passwordRegex.test(password)
    //     if (emailTest===true)
    //     {
    //         setRegexObj({...regexObj,emailBorder:false,emailHelper:""})
    //     }
    //     else{
    //         setRegexObj({...regexObj,emailBorder:true,emailHelper:"Enter correct email"})
    //     }
    //     if (passwordTest===true)
    //     {
    //         setRegexObj({...regexObj,passwordBorder:false,passwordHelper:""})
    //     }
    //     else{
    //         setRegexObj({...regexObj,passwordBorder:true,passwordHelper:"Enter correct password"})
    //     }
    //     let data= {
    //         "vote_table":[
    //               {
    //                   "parameter_id":parameter,
    //                   "vote_for":voteFor
    //               },
    //               {
    //                   "parameter_id":parameter,
    //                   "vote_for":voteFor
    //               },
    //               {
    //                   "parameter_id":3,
    //                   "vote_for":3
    //               },
    //               {
    //                   "parameter_id":4,
    //                   "vote_for":3
    //               }
    //           ]
    //       }
    //     postSignin(data).then((response)=>{
    //         console.log(response.data)
    //     }
    //     )
    //     .catch((error)=>{
    //         console.log(error)
    //     })
    // }
//     return(
//         <div className="signin-box">
//             <h1> voting Dashboard</h1>
//             <Select value={sprint}
//             displayEmpty
//             onChange={takeSprint}
//             >
//             <MenuItem value="" disabled>Select Sprint</MenuItem>
//                 <MenuItem value={1}> google app</MenuItem>
//                 <MenuItem value={2}>apple app</MenuItem>
//             </Select>
//             { data.map((item)=>
//             <Select value={voteFor}
//             displayEmpty
//             onChange={takeVoteFor}
//             >
//             <MenuItem value="" disabled>Select User</MenuItem>
//                 <MenuItem value={item.id}>{item.username}</MenuItem>
//             </Select>
//             )
//             }
//             <Select value={parameter}
//             displayEmpty
//             onChange={takeParameter}
//             >
//             <MenuItem value="" disabled>Select Parameter</MenuItem>
//                 <MenuItem value={1}> help</MenuItem>
//                 <MenuItem value={2}>desigen</MenuItem>
//             </Select>

//         </div>
//     )

// }
// export default Voting;
