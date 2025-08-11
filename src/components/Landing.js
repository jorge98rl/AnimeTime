import React from "react";
import "../assets/css/landing.css";
import { FaArrowDown } from "react-icons/fa";
import { useState } from "react";
function Landing() {
    const imgOnePiece =
        "https://imgs.search.brave.com/QOWaic86CePxzmiuD_9sy5Km0WLuYP9CHfOpU3rCvvY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ5LzZk/LzA4LzQ5NmQwODdl/NjBjMDUxYjM2YmQ3/MmRmZGNkZDZhMjAy/LmpwZw";

    const [texto, setTexto] = useState("One Piece");
    const [color, setColor] = useState("#1d1b19");
    const cambiarTitulo = () => {
        setTexto("Top 1");
    };

    const cambiarColor =()=>{
        setColor("red");
    }
    return (
        <div>
            {/** Primer Bloque */}
            <div className="first-background">
                <div className="left-div">
                    <div className="first-container">
                        <h5>Monkey D.Luffy</h5>
                        <p>
                            Gracias a la Gomu Gomu no Mi, su cuerpo tiene propiedades de goma,
                            lo que le permite estirarse y luchar de forma única. Aunque es
                            impulsivo y a veces ingenuo, su valentía, su inquebrantable
                            lealtad a sus amigos y su espíritu libre lo convierten en el
                            corazón de los Piratas del Sombrero de Paja.
                        </p>
                    </div>
                    <div className="second-container">
                        <h1 style={{color}}>One Piece</h1>
                        <button
                            className="btn btn-dark rounded rounded-5 sizeBtn"
                            onClick={cambiarColor}
                        >
                            Pincha aqui <FaArrowDown />
                        </button>
                    </div>
                    <div className="third-container">
                        <p>
                            Gracias a la Gomu Gomu no Mi, su cuerpo tiene propiedades de goma,
                            lo que le permite estirarse y luchar de forma única. Aunque es
                            impulsivo y a veces ingenuo, su valentía, su inquebrantable
                            lealtad a sus amigos y su espíritu libre lo convierten en el
                            corazón de los Piratas del Sombrero de Paja.
                        </p>
                    </div>
                </div>

                <div className="right-div">
                    <div className="img-container">
                        <img
                            src={imgOnePiece}
                            alt="onePiece"
                            style={{ width: "60%" }}
                            className="rounded rounded-3 style-img"
                        />
                    </div>
                </div>
            </div>

            {/** Segundo Bloque */}
            <div className="first-background" id="second-container-page">
                <div className="left-div">
                    <div className="first-container">
                        <h5>Monkey D.Luffy</h5>
                        <span>April 2023 | Tokyo, Japan</span>
                        <h1>{texto}</h1>
                        <p>
                            Gracias a la Gomu Gomu no Mi, su cuerpo tiene propiedades de goma,
                            lo que le permite estirarse y luchar de forma única. Aunque es
                            impulsivo y a veces ingenuo, su valentía, su inquebrantable
                            lealtad a sus amigos y su espíritu libre lo convierten en el
                            corazón de los Piratas del Sombrero de Paja.
                        </p>
                        <button
                            className="btn btn-dark rounded rounded-5 sizeBtn"
                            onClick={cambiarTitulo}
                            style={{padding: '10px' }}
                        >
                            Pincha aqui <FaArrowDown />
                        </button>
                        <div className="img-container-second-page">
                        <img
                            src={imgOnePiece}
                            alt="onePiece"
                            style={{ width: "60%"}}
                            className="rounded rounded-3 style-img"
                        />
                    </div>
                    </div>
                </div>
                <div className="second-container-right-div">
                    <div className="img-container">
                        <img
                            src={imgOnePiece}
                            alt="onePiece"
                            style={{ width: "60%" }}
                            className="rounded rounded-3 style-img"
                        />
                        <img
                            src={imgOnePiece}
                            alt="onePiece"
                            style={{ width: "60%" }}
                            className="rounded rounded-3 style-img"
                        />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Landing;
