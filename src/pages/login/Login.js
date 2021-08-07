import "./login.css"
import user from "../../user.json"
import Topbar from "../topbar/Topbar"
import Register from "../register/Register"
import React, { useState } from "react"
export default function Login(){
    const [login,setLogin] = useState(false)
    const [register,setRegister] = useState(false)
    // useEffect(()=>{
    //     const data = localStorage.getItem("login")
    //     if (data){
    //         setLogin(true)
    //     }
    //     else{
    //         setLogin(false)
    //     }
    // },[])
    // useEffect (()=>{
    //     localStorage.setItem("login",JSON.stringify(login))
    //     })
    const userdata = user.user
    const loginValidate = () =>{
        const inMail = document.getElementById('email').value
        const inPassword = document.getElementById('password').value
        for (let i=0;i<userdata.length;i++){
            if (userdata[i].email === inMail.toLowerCase() && userdata[i].password === inPassword){
                setLogin(true)
            }
            else{
                document.getElementById("error").style.display="block"
            }
        }
    }
    const keyCheck = (event) => {
        if (event.charCode === 13){
            loginValidate()
        }
    }
    const createAccount = () => {
        setRegister(true)
    }
    const Disp = () => {
        return (
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">WeMeet</h3>
                        <span className="loginDesc">Connect with friends and the world around you on WeMeet.</span>
                    </div>
                    <div className="loginRight">
                        <div className="loginBox">
                            <input type="Email" placeholder="Email" className="loginInput" id="email" required/>
                            <input type="password" placeholder="Password" className="loginInput" id="password" onKeyPress={keyCheck} required/>
                            <h4 className="loginError" id="error">Invalid Username or Password!</h4>
                            <button className="loginButton" onClick={loginValidate}>Log In</button>
                            <span className="loginForgot">Forgot Password</span>
                            <button className="loginRegisterButton" onClick={createAccount}>Create a New Account</button>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    return(
        <>
            {register ? <Register/> : login ? <Topbar/> : Disp()}
        </>
    )
}