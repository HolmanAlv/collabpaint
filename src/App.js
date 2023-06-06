import React, {useState} from "react";
import Header from "./Header";
import Container from "./Container";

function App() {

    const [utensil, SetUtensil] = useState({
        tool: "Brush",
        weight: "normal",
        color: "black"
    })

    function handleUtensil(updateItem, keyHolder){
        const newUtensil={...utensil}
        if(updateItem === "eraser"){
            newUtensil["color"] = "white";
            newUtensil["tool"] = "brush";
            SetUtensil(newUtensil)
        } else {
            newUtensil[keyHolder] = updateItem.toLowerCase();
            SetUtensil(newUtensil)
        }
        console.log(newUtensil)
    }


    return (
        <>
            <h1>Aqui empieza la magia!</h1>
            <Header handleUtensil={handleUtensil}/>
            <Container utensil={utensil}/>
        </>
    );
}

export default App;