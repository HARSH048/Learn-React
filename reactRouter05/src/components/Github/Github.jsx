import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function Github(){
    // const [data,setData]=useState([])
    // const {id}=useParams();
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/HARSH048`)
    //     .then(response=>response.json())
    //     .then(data=>{
    //         setData(data)
    //     })
    // },[])

    const data = useLoaderData()
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">GitHub Followers:{data.followers}
        <img src={data.avatar_url} alt="Git Picture" />
        </div>
       
    )
}

export async function githubLoader(){
    const response =await fetch(`https://api.github.com/users/HARSH048`)
    return response.json();
}