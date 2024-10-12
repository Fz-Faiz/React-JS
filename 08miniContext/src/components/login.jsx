import React,{useState,useContext} from "react";

import UserContext from "../Context/UserContext";

function Login(){
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')

    const {setUser}=useContext(UserContext)

    const handleSumbit=(e)=>{
        e.preventDefault()
        setUser({username,password})

    }
    return(
        <div>
            <h2>Login</h2>
            <input value={username} onChange={(e)=>{
                e.preventDefault()
                setUsername(e.target.value)

            }}type="text" placeholder="username"/>
            {" "}
            <input value={password}
            onChange={(e)=>{
                setPassword(e.target.value)

            }} type="text" placeholder="password"/>
            <button onClick={ handleSumbit}>Submit</button>
        </div>
    )
}

export default Login