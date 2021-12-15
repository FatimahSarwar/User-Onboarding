import React  from "react";

export default function Users ({details}){
    if(!details){
        return <h3> Working on it...</h3>
    }
    return (
        <div>
        <h2>{details.Name}</h2>
        <p>Email: {details.Email}</p>
        </div>
    )
}