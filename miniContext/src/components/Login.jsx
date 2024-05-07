import React,{useContext,useState} from "react";
import { UserContext } from "../context/UserContext";

function Login(){
    const context=useContext(UserContext)
    const [name,setName]=useState("");
    const [password,setPassword]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        context.setUser({name,password})
    }
    return (
       <div>
       <h2>Login</h2>
       <input type="text" placeholder="username" value={name} onChange={(e)=>setName(e.target.value)}></input>
       <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
       <button onClick={handleSubmit}>Submit</button>
       </div>
    )
}

export default Login