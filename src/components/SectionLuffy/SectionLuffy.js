import React from 'react'

import { FaArrowDown } from "react-icons/fa";
import { useState } from "react";
const SectionLuffy = () => {

    const luffy = "https://storage.googleapis.com/pod_public/1300/212827.jpg";
    const [color, setColor] = useState(false);

    const cambiarColor = () => {
        setColor(!color);
    };

    const textStyle = {
        color: color? "#fc0000" : "#333",
    }

    const parrafo = <p> Gracias a la Gomu Gomu no Mi, su cuerpo tiene propiedades de goma,
                        lo que le permite estirarse y luchar de forma única. Aunque es
                        impulsivo y a veces ingenuo, su valentía, su inquebrantable
                        lealtad a sus amigos y su espíritu libre lo convierten en el
                        corazón de los Piratas del Sombrero de Paja. </p> 
    const titulo = <h5>Monkey D.Luffy</h5>;
    
    return (
        <section className="first-background">
            <div className="left-div">
                <div className="first-container">
                    {titulo}
                    {parrafo}
                </div>
                <div className="second-container">
                    <h1 style={ textStyle }>One Piece</h1>
                    <button
                        className="btn btn-dark rounded rounded-5 sizeBtn"
                        onClick={cambiarColor}
                        
                    >
                        Pincha aqui <FaArrowDown />
                    </button>
                </div>
                <div className="third-container">
                    {parrafo}
                </div>
            </div>

            <div className="right-div">
                <div className="img-container">
                    <img
                        src={luffy}
                        alt="luffy"
                        style={{ width: "100%" }}
                        className="rounded rounded-3 style-img"
                    />
                </div>
            </div>
        </section>
    )
}

export default SectionLuffy