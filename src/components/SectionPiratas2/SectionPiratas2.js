import React from 'react'
import { FaArrowDown } from "react-icons/fa";
import { useState } from 'react';
const SectionPiratas2 = () => {


    const tripu1 =
        "https://pm1.aminoapps.com/6260/ef49c3a3e9de1ea645e2d1cf1859ab880c5163d8_hq.jpg";


    const tripu2 =
        "https://img.asmedia.epimg.net/resizer/v2/YFFD3QBX2ZHX5CQCLGKWBTBUJA.png?auth=36c623cae111b8cb33e03f29a9d01acf02bbe47543da3edd735fccb8f7d64a29&width=1200&height=1200&smart=true";
    const tripu3 =
        "https://i.blogs.es/c1c587/mv5bntdizge5n2utztkyzi00m2fllwixngytn2uzytewyzu1ntgyxkeyxkfqcgc-._v1_/375_375.jpeg";
    const [imagen, setImagen] = useState(
        "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GRMG8ZQZR-backdrop_wide"
    );
    const cambiarImagen = () => {
        setImagen("https://i.blogs.es/bee0c2/one-piece/1366_521.jpeg");
    };

    return (
        <div>
            <section className="container-third">
                <div className="grid-container">
                    <div className="first-grid">
                        <img src={imagen} alt="one piece" className='img-fluid'></img>
                        <div className="align-container">
                            <span>April 2023 | Tokyo, Japan</span>
                            <h5>Piratas Sombrero de Paja</h5>
                            <p>
                                La tripulación de los Sombrero de Paja está liderada por Monkey
                                D. Luffy y está compuesta por Zoro, Nami, Usopp, Sanji, Chopper,
                                Robin, Franky, Brook y Jinbe, un grupo unido por la amistad y
                                sus sueños en la gran aventura por el mar.
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
                    <div className="first-grid img-fluid">
                        <img className="photo" src={tripu1} alt="one piece"></img>
                        <img className="photo" src={tripu2} alt="one piece"></img>
                        <img className="photo" src={tripu3} alt="one piece"></img>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SectionPiratas2