import React from "react";


function SecondsCounter(props) {

    const cienMiles = Math.floor(props.seconds / 100000) % 10;
    const diezMiles = Math.floor(props.seconds / 10000) % 10;
    const miles = Math.floor(props.seconds / 1000) % 10;
    const centenas = Math.floor(props.seconds / 100) % 10;
    const decenas = Math.floor(props.seconds / 10) % 10;
    const unidades = Math.floor(props.seconds / 1) % 10;

    return (


      <div className="container text-center mt-4">
            
            <div className="mb-3">
                <button className="btn btn-warning mx-1" onClick={props.onPause}>Pausar</button>
                <button className="btn btn-success mx-1" onClick={props.onResume}>Reanudar</button>
                <button className="btn btn-danger mx-1" onClick={props.onReset}>Reiniciar</button>
            </div>

            
            <div className="bg-dark text-white d-flex justify-content-center align-items-center p-3 fs-1 gap-2 rounded">
                <div className="p-2 bg-secondary rounded border border-dark">
                    <i className="fas fa-clock"></i>
                </div>

                <div className="p-2 bg-secondary rounded border border-dark">{cienMiles}</div>
                <div className="p-2 bg-secondary rounded border border-dark">{diezMiles}</div>
                <div className="p-2 bg-secondary rounded border border-dark">{miles}</div>
                <div className="p-2 bg-secondary rounded border border-dark">{centenas}</div>
                <div className="p-2 bg-secondary rounded border border-dark">{decenas}</div>
                <div className="p-2 bg-secondary rounded border border-dark">{unidades}</div>
            </div>
        </div>
        

    )
     

};

export default SecondsCounter;