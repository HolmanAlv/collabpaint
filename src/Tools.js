import React from "react";

function Tools({handleUtensil}) {
    return (
        <div id="tools">  
            <button class="toolButton" name="brush" onClick={event=>handleUtensil(event.target.name, "tool")}>✏️</button>
            <button class="toolButton" name="bucket" onClick={event=>handleUtensil(event.target.name, "tool")}>🪣</button>    
            <button class="toolButton" name="eraser" onClick={event=>handleUtensil(event.target.name, "tool")}>❌</button>
        </div>
    );
}

export default Tools;
