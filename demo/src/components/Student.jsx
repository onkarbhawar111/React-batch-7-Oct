import React from "react";

function Student({name, age, course}){
    return(
        <>
        <h3>Name: {name}</h3>
        <p>Age: {age}</p>
        <p>Course: {course}</p>
        </>
    )
}

export default Student