import React,{useContext} from "react";
import { UserContext } from "../context/UserContext";

function Profile(){
    const context=useContext(UserContext);
    console.log(context)
     
    if(!context.user){
        return (
            <div>Please Login</div>
        )
    }

    else
    {
        return (
            <div>Hello {context.user.name} and {context.user.password}</div>
        )
    }

}

export default Profile;