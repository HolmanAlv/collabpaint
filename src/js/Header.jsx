import React, { useState } from "react";
import ColorContainer from "./ColorContainer";
import Tools from "./Tools";
import '../styles/Header.css';
import Back from "../img/arrow-left-circle-fill.svg";
import Back2 from "../img/caret-left-fill.svg";
import Saver from "./Saver";
import ColorPicker from "./ColorPicker";


function Header({ handleUtensil }) {

    function handleColorPicker() {
        <ColorPicker />
    }

    return (
        <>
            <nav class="navbar bg-body-tertiary">
                <div class="g-col-4">
                    <a class="navbar-brand" href="####">
                        <img src={Back} alt="Logo" width="50" height="24" class="d-inline-block align-text-top" />

                    </a>
                    image

                </div>

                {/* aqui van los usuarios */}

                {/* boton descargar */}

                <div class="">
                    <button type="button" class="btn btn-primary" onClick={Saver}>Descargar</button>
                </div>
            </nav >


            <div class="container" >
                <div class="row">
                    <div class="col-2">
                        <a class="navbar-brand" href="#">
                            <img src={Back2} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                        </a>
                        Volver
                    </div>
                    <div class="col">
                        <Tools handleUtensil={handleUtensil} />
                    </div>
                    <div class="col">

                    </div>
                    <div class="col">
                        <ColorContainer handleUtensil={handleUtensil} />
                    </div>
                    <div class="col">
                    </div>
                    <div class="col">
                        <ColorPicker handleUtensil={handleUtensil} />
                    </div>
                    
                </div>
            </div>

        </>
    );
}

export default Header;
