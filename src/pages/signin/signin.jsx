import React from "react";
import '../signin/signin.css'
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import {postSignin} from '../../components/serives/dataserives'
// import {useNavigate } from "react-router-dom"


function Signin(){
    // const navigate = useNavigate()
    const[email, setEmail] = React.useState("")
    const[password, setPassword] = React.useState("")

    const takeEmail = (e)=>{
        setEmail(e.target.value)
    }
    const takePassword = (e)=>{
        setPassword(e.target.value)
    }
    const submit = ()=>{
        let data= {
            "username": email,
            "password": password

        }
        postSignin(data).then((response)=>{
            console.log(response.data.data)
            localStorage.setItem('login',JSON.stringify(response.data.data))
            // navigate('/voting')
        }
        )
        .catch((error)=>{
            console.log(error)
        })
    }
    return(
        <div className="signin-box">
            <div className="signin-form">
                <div className="signin-header">
                    <div className="signin-header-signin">
                        <h2>Sign in</h2>
                    </div>
                    <div className="signin-header-signin2">
                        <h3>Use your sprint Account</h3>
                    </div>
                </div>
                <div className="signin-email-phone">
                    <div>
                        <TextField label="username" id="fullWidth" size="small" onChange={takeEmail} />
                    </div>
                    <div>
                        <TextField fullWidth label="Password"  id="fullWidth" size="small" onChange={takePassword}/>
                    </div>
                    <div>
                        <Link href="#" underline="hover">
                            {'Forgot email OR password'}
                        </Link>
                    </div>
                </div>
                <div className="signin-botton">
                    <div className="signin-bottom-link">
                        <Link href="#" underline="hover">
                            {'Create account'}
                        </Link>
                    </div>
                    <div className="signin-bottom-button">
                        <Button variant="contained" href="#contained-buttons" onClick={submit}>
                            Next
                        </Button>

                    </div>
                </div>
            </div>

        </div>
    )

}
export default Signin;