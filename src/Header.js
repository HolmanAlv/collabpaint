import React, { useState } from "react";
import ColorContainer from "./ColorContainer";
import Tools from "./Tools";
import Brush from "./Brush";
import './Header.css'

function Header({handleUtensil}) {

    return (
        <>
            <div id="top-page">
            <p>🎨 untilted - Paint</p>
            </div>
            <div id="header">  
                <Tools handleUtensil={handleUtensil}/>
                <Brush handleUtensil={handleUtensil}/>
                <ColorContainer handleUtensil={handleUtensil}/>
            </div>
        </>
    );
}

export default Header;
