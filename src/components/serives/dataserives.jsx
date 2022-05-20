import axios from "axios"
const myObj = JSON.parse(localStorage.getItem('login'));
console.log(myObj.token)
let token = myObj.token
let configObj = {
    headers: {
        Authorization: token,
    },
}   
// let configObj = {
//     headers: {
//         "Content-Type": "application/json"
//     },
// }
console.log(configObj)
export const postSignin = async (Obj) =>{
    console.log(Obj)
    let response = await axios.post("http://127.0.0.1:8000/user/user-login",Obj,configObj)
    return response
}
// export const getUser = async (Obj) =>{
//     console.log(Obj)
//     let response = await axios.get("http://127.0.0.1:8000/user/user-registration",Obj)
//     return response
// }
// export const getParameter = async (Obj) =>{
//     console.log(Obj)
//     let response = await axios.get("http://127.0.0.1:8000/api/voting-param",Obj,configObj)
//     return response
// }
export const postVoting = async (Obj,sprint) =>{
    console.log(Obj)
    console.log(sprint)
    let response = await axios.post("http://127.0.0.1:8000/api/sprint/"+sprint+"/votes",Obj,configObj)
    return response
}
