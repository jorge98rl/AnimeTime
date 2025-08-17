import React from "react";
import "../assets/css/landing.css";
import { FaArrowDown } from "react-icons/fa";
import { useState } from "react";
function Landing() {
    const imgOnePiece =
        "https://i.pinimg.com/564x/ef/4e/ee/ef4eee4bf6d27438cef7ad91c8167e20.jpg";
    const imgOnePiece2 =
        "https://www.lavanguardia.com/peliculas-series/images/all/movie/posters/2007/3/movie-25278/w1280/kIvL8KvVxRAXw0wjzwZhYH4XZxf.jpg";
    const imgOnePiece3 =
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/08/one-piece_0.jpg?tf=1200x1200";
    const luffy = "https://storage.googleapis.com/pod_public/1300/212827.jpg";


    const tripu1 = "https://pm1.aminoapps.com/6260/ef49c3a3e9de1ea645e2d1cf1859ab880c5163d8_hq.jpg";
    const tripu2 = "https://img.asmedia.epimg.net/resizer/v2/YFFD3QBX2ZHX5CQCLGKWBTBUJA.png?auth=36c623cae111b8cb33e03f29a9d01acf02bbe47543da3edd735fccb8f7d64a29&width=1200&height=1200&smart=true";
    const tripu3 = "https://i.blogs.es/c1c587/mv5bntdizge5n2utztkyzi00m2fllwixngytn2uzytewyzu1ntgyxkeyxkfqcgc-._v1_/375_375.jpeg";
    const [texto, setTexto] = useState("One Piece");
    const [color, setColor] = useState("#1d1b19");
    const [imagen, setImagen] = useState ("https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GRMG8ZQZR-backdrop_wide");


    const cambiarTitulo = () => {
        setTexto("Top 1");
    };

    const cambiarColor = () => {
        setColor("red");
    };

    const cambiarImagen = () => {
        setImagen("https://i.blogs.es/bee0c2/one-piece/1366_521.jpeg");
    }
    return (
        <div className="global-container">
            {/** Primer Bloque */}
            <section className="first-background">
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
                        <h1 style={{ color }}>One Piece</h1>
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
                            src={luffy}
                            alt="luffy"
                            style={{ width: "100%" }}
                            className="rounded rounded-3 style-img"
                        />
                    </div>
                </div>
            </section>

            {/** Segundo Bloque */}
            <section className="first-background" id="second-container-page">
                <div className="left-div">
                    <div className="first-container">
                        <h5>Piratas Sombrero de Paja</h5>
                        <span>April 2023 | Tokyo, Japan</span>
                        <h1>{texto}</h1>
                        <p>
                            La tripulación de los Sombrero de Paja está liderada por Monkey D. Luffy y está compuesta por Zoro, Nami, Usopp, Sanji, Chopper, Robin, Franky, Brook y Jinbe, un grupo unido por la amistad y sus sueños en la gran aventura por el mar.
                        </p>
                        <button
                            className="btn btn-dark rounded rounded-5 sizeBtn"
                            onClick={cambiarTitulo}
                            style={{ padding: "10px" }}
                        >
                            Pincha aqui <FaArrowDown />
                        </button>
                        <div className="img-container-second-page" style={{height: "100%", marginBottom : "26px"}}>
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
             {/** Tercer Bloque */}
            <section className="container-third">
                <div className="grid-container">
                    <div className="first-grid"><img src={imagen} alt="one piece"></img>
                        <div className="align-container">
                        <span>April 2023 | Tokyo, Japan</span>
                        <h5>Piratas Sombrero de Paja</h5>
                        <p>
                            La tripulación de los Sombrero de Paja está liderada por Monkey D. Luffy y está compuesta por Zoro, Nami, Usopp, Sanji, Chopper, Robin, Franky, Brook y Jinbe, un grupo unido por la amistad y sus sueños en la gran aventura por el mar.
                        </p>
                        <button
                            className="btn btn-dark rounded rounded-5 sizeBtn"
                            onClick={cambiarImagen}
                            style={{ padding: "10px" }}
                        >
                            Pincha aqui <FaArrowDown />
                        </button>
                        </div>
                    </div>         
                </div>
                <div className="grid-container" id="collage-photos">
                    <div className="first-grid">
                        <img className="photo" src={tripu1} alt="one piece"></img>
                        <img className="photo" src={tripu2} alt="one piece"></img>
                        <img className="photo" src={tripu3} alt="one piece"></img>
                    </div>         
                </div>
            </section>
        </div>
    );
}

export default Landing;
