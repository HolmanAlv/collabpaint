import React, { useState } from "react";
import ColorContainer from "./ColorContainer";
import Tools from "./Tools";
import './Header.css'

function Header({handleUtensil}) {

    return (
        <>
            <div id="top-page">
            <p>🎨 untilted - Paint</p>
            </div>
            <div id="header">  
                <Tools handleUtensil={handleUtensil}/>
                <ColorContainer handleUtensil={handleUtensil}/>
            </div>
        </>
    );
}

export default Header;
