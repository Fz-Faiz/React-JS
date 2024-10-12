import React,{useEffect, useState} from "react";
import { useLoaderData } from "react-router-dom";

function GitHub(){
    const data = useLoaderData();
    // const[data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Fz-Faiz')
    //     .then(response=> response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })

    // },[])
    return(

        <div className="bg-gray-500 text-white text-3xl p-5 hover:text-white hover:text-5xl shadow-2xl hover:shadow-inner inset-7">Github followers : <b>{data.followers} <img src={data.avatar_url}alt="Git picture" width={300}/></b></div>
        
    )
}

export default GitHub

export const githubInfoLoader = async ()=>{
    const response = await fetch("https://api.github.com/users/Fz-Faiz")
    return response.json()
}