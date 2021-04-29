// Code EyesOnMe Component Here
import React from "react"
function EyesOnMe(){

    // function handleClick(){
    //     console.log("Good!")
    // }
    return(
        <div>
            <button onFocus={()=>console.log("Good!")} onBlur={(e)=>console.log("Hey! Eyes on me!")}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;