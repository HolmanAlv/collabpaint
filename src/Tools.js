import React from "react";

function Tools({handleUtensil}) {
    return (
        <div style={{backgroundColor:'lightgrey', padding:'Spx', width:'120px', textAlign:'center'}}>  
            <button name="brush" onClick={event=>handleUtensil(event.target.name, "tool")}>✏️</button>
            <button name="bucket" onClick={event=>handleUtensil(event.target.name, "tool")}>🪣</button>    
            <button name="eraser" onClick={event=>handleUtensil(event.target.name, "tool")}>❌</button>
        </div>
    );
}

export default Tools;
