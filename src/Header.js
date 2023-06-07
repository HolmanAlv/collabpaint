import React, { useState } from "react";
import ColorContainer from "./ColorContainer";
import Tools from "./Tools";
import './Header.css';
import ColorPicker from "./ColorPicker";

function Header({handleUtensil}) {

    function handleColorPicker(){
        <ColorPicker/>
    }

    return (
        <>
            <div id="top-page">
            <p>🎨 Untittled - Paint</p>
            </div>
            <div id="header">  
                <hr/>
                <Tools handleUtensil={handleUtensil}/>
                <hr/>
                <ColorContainer handleUtensil={handleUtensil}/>
                <hr/>
                <ColorPicker handleUtensil={handleUtensil}/>
                <hr/>
            </div>
        </>
    );
}

export default Header;
