import React from "react";
import "./ri.css"

function Cuadros() {
    return(
        <div className="cuadro">
            <div className="container-md p-5">
                <div className="row pt-5">
                    <div className="text-center pb-5 pt-5 h1 titulo">Acerca de las aves en Chile</div>
                </div>
                <div>
                    <figure>
                        <blockquote>
                            <p className="text-center h3 info">
                            De norte a sur, de mar a cordillera, 439 especies de aves se encuentran en Chile. 296 de éstas anidan en el país, mientras las otras son visitantes habituales u ocasionales del territorio.
                    Por otro lado, existen en Chile 11 especies de aves que no se encuentran en ninguna otra parte del planeta, de las cuales 6 son continentales y 5 insulares.
                            </p>
                        </blockquote>
                        <figcaption className='blockquote-footer text-white mt-3'>GOCHILE.</figcaption>
                    </figure>
                </div>
            </div>
                <div className="row justify-content-center">
                    <div className="col-2">
                        <div className="card w-100 card-border mb-5">
                            <img src="./imagenes/norte.jpg"/>
                            <div className="card-body">
                                <h5 className="card-tittle">Zona Norte</h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card w-100 card-border mb-5">
                            <img src="./imagenes/centro.jpg"/>
                            <div className="card-body">
                                <h5 className="card-tittle">Zona Centro</h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card w-100 card-border mb-5">
                            <img src="./imagenes/sur.jpg"/>
                            <div className="card-body">
                                <h5 className="card-tittle">Zona Sur</h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card w-100 card-border mb-5">
                            <img src="./imagenes/austral.jpg"/>
                            <div className="card-body">
                                <h5 className="card-tittle">Zona Austral</h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Cuadros