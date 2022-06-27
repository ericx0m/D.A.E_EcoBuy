import React from "react";
import { Link } from "react-router-dom";
import "./ri.css"

function Ribbon() {
    return (
        <div className="ribbon">
            <div className="birthday container w-50 pl-5">
                <div className="row align-items-center">
                    <div className="col-sm p-3">
                        <img src="./imagenes/ave2.png" className="w-75 mx-auto d-block" alt=""/>
                    </div>
                    <div className="col-sm p-3 text-light text-center">
                        <p className="texto text-warining h3">Biblioteca</p>
                        <h4 className="h2 text-shadow">de aves nacionales</h4>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Ribbon