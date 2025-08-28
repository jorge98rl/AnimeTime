import React from "react";
import "../assets/css/landing.css";
import SectionLuffy from "../components/SectionLuffy/SectionLuffy";
import SectionPiratas from "../components/SectionPiratas/SectionPiratas";
import SectionPiratas2 from "../components/SectionPiratas2/SectionPiratas2";
import SectionPiratas3 from "../components/SectionPiratas3/SectionPiratas3";
function Landing() {



    return (
        <div className="global-container">
            {/** Primer Bloque */}
            <SectionLuffy />
            {/** Segundo Bloque */}
            <SectionPiratas />
            {/** Tercer Bloque */}
            <SectionPiratas2 />
            {/**Cuarto Bloque */}            
            <SectionPiratas3/>
        </div>
    );
}

export default Landing;
