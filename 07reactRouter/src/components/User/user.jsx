import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid} = useParams()
    return (
        <div className="bg-gray-500 text-white text-3xl p-5 hover:bg-red-600 hover:text-white hover:text-5xl hover:shadow-2xl">User : <b>{userid}</b></div>
    )
}

export default User