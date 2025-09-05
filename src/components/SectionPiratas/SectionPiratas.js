import React from "react";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
const SectionPiratas = () => {
    const imgOnePiece =
        "https://i.pinimg.com/564x/ef/4e/ee/ef4eee4bf6d27438cef7ad91c8167e20.jpg";
    const imgOnePiece2 =
        "https://www.lavanguardia.com/peliculas-series/images/all/movie/posters/2007/3/movie-25278/w1280/kIvL8KvVxRAXw0wjzwZhYH4XZxf.jpg";
    const imgOnePiece3 =
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/08/one-piece_0.jpg?tf=1200x1200";

    const [texto, setTexto] = useState(false);
    const cambiarTitulo = () => {
        setTexto(!texto);
    };


    return (
        <div>
            <section className="first-background" id="second-container-page">
                <div className="left-div">
                    <div className="first-container">
                        <h5>Piratas Sombrero de Paja</h5>
                        <span>April 2023 | Tokyo, Japan</span>
                        <h1>{texto ? "One Piece" : "Top 1"}</h1>
                        <p>
                            La tripulación de los Sombrero de Paja está liderada por Monkey D.
                            Luffy y está compuesta por Zoro, Nami, Usopp, Sanji, Chopper,
                            Robin, Franky, Brook y Jinbe, un grupo unido por la amistad y sus
                            sueños en la gran aventura por el mar.
                        </p>
                        <button
                            className="btn btn-dark rounded rounded-5 sizeBtn"
                            onClick={cambiarTitulo}
                            style={{ padding: "10px" }}
                        >
                            Pincha aqui <FaArrowDown />
                        </button>
                        <div
                            className="img-container-second-page"
                            style={{ height: "100%", marginBottom: "26px" }}
                        >
                            <img
                                src={imgOnePiece3}
                                alt="onePiece"
                                style={{ width: "77%", objectFit: "" }}
                                className="rounded rounded-3 style-img"
                            />
                        </div>
                    </div>
                </div>
                <div className="second-container-right-div" style={{ height: "100vh" }}>
                    <div className="img-container">
                        <img
                            src={imgOnePiece2}
                            alt="onePiece"
                            style={{ width: "50%", objectFit: "cover", height: "100%" }}
                            className="rounded rounded-3 style-img"
                        />
                        <img
                            src={imgOnePiece}
                            alt="onePiece"
                            style={{ width: "50%", objectFit: "cover", height: "100%" }}
                            className="rounded rounded-3 style-img"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SectionPiratas;
