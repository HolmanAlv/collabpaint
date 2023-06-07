import React from "react";
import Brush from "../img/brush.svg"
import Bucket from "../img/paint-bucket.svg"
import Eraser from "../img/eraser.svg"

function Tools({handleUtensil}) {
    return (
        <div style={{ padding:'10px', width:'300px', textAlign:'center'}}>  
            <button name="brush" class="btn" onClick={event=>handleUtensil(event.target.name, "tool") }><img src={Brush} width={20}/></button>
            <button name="bucket" class="btn" onClick={event=>handleUtensil(event.target.name, "tool")}><img src={Bucket} width={20}/></button>    
            <button name="eraser" class="btn" onClick={event=>handleUtensil(event.target.name, "tool")}><img src={Eraser} width={20}/></button>
        </div>
    );
}

export default Tools;
