import React from "react";
import ColorCard from "./ColorCard";

const colorlist = ["red", "blue", "yellow", "pink", "black", "white", "brown", "purple", "orange", "grey"];

function ColorContainer({ utensil, handleUtensil }) {

    const colorGrid = colorlist.map((color) => <ColorCard handleUtensil={handleUtensil} key={color} color={color} />)

    return (
        <>
            <div id="color-grid">
                {colorGrid}
            </div>
        </>
    );
}

export default ColorContainer; 