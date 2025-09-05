import React from 'react'

const SectionPiratas3 = () => {


    const tripu1 =
        "https://pm1.aminoapps.com/6260/ef49c3a3e9de1ea645e2d1cf1859ab880c5163d8_hq.jpg";
        
    const tripu4 = "https://preview.redd.it/new-official-one-piece-art-to-celebrate-the-28th-anniversary-v0-r6mzac5bs8ef1.jpeg?auto=webp&s=7c122453ffa2a4b7fc61a75167888dc0548bc04a";

    return (
        <div>
            <section className="section-layout">
                <div className="grid-layout">
                    {/* Columna izquierda */}
                    <div className="left-content">
                        <span>April 2023 | Tokyo, Japan</span>
                        <h2>Piratas Sombrero de Paja</h2>
                        <p>
                            La tripulación de los Sombrero de Paja está liderada por Monkey D.
                            Luffy y está compuesta por Zoro, Nami, Usopp, Sanji, Chopper,
                            Robin, Franky, Brook y Jinbe, un grupo unido por la amistad y sus
                            sueños en la gran aventura por el mar.
                        </p>
                        <button className="btn btn-info rounded rounded-5 sizeBtn">
                            <a
                                href="https://www3.animeflv.net/anime/one-piece-tv"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Ir al Anime
                            </a>
                        </button>

                        {/* Foto pequeña debajo */}
                        <div className="small-photo img-fluid">
                            <img src={tripu1} alt="one piece" />
                        </div>
                    </div>

                    {/* Columna derecha */}
                    <div className="right-photo img-fluid">
                        <img src={tripu4} alt="one piece" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SectionPiratas3