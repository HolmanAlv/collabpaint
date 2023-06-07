import React, { useState } from "react";
import ColorContainer from "./ColorContainer";
import Tools from "./Tools";
// import '../styles/Header.css';
import Back from "../img/arrow-left-circle-fill.svg";
import Back2 from "../img/caret-left-fill.svg";

function Header({ handleUtensil }) {

    return (
        <>
            <nav class="navbar bg-body-tertiary">
                <div class="g-col-4">
                    <a class="navbar-brand" href="#">
                        <img src={Back} alt="Logo" width="50" height="24" class="d-inline-block align-text-top" />

                    </a>
                    Untitled

                </div>

                {/* aqui van los usuarios */}

                {/* boton descargar */}

                <div class="">

                    <button type="button" class="btn btn-primary">Descargar</button>
                </div>
            </nav >


            <div class="container" >
                <div class="row">
                    <div class="col-3">
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
                    </div>
                    <div class="col">
                    </div>
                </div>
            </div>

        </>
    );
}

export default Header;
