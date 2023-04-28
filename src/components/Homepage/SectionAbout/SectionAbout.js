import React from "react";
import BouttonContacter from "../BouttonContacter/BouttonContacter";
import BouttonDevis from "../BouttonDevis/BouttonDevis";
import "./SectionAbout.css";
import Stack from 'react-bootstrap/Stack';


export default function SectionAbout() {
  return (
    <main>
      <div className="SectionAbout" >
        <div class="row">
          <div class="col-md-6">
          <br/><br/><br/><br/>
            <div  className="Plateform"  >
              <p> Plateform for stanslate : the Professional Human Documents Parser</p>
            </div>
            <div className="Besoin">
              <p>Besoin d'une traduction,<br />d'une relecture ou encore<br /> de corriger vos <br />documents ?</p>
              <br/>
            </div>
          </div>
          <div class="col-md-6">
            <div className="NuageDeMots" >
              <img src="./images/nuage_de_mots.svg" alt="" />
            </div>
          </div>
        </div>
        <div  className="Description" >
          <p>Un service de traduction, relecture et de correction<br />professionnelle en toute simplicité. Par des  opérateurs<br />humains experts, optimisés par la technologie, livrés rapidement.</p>
          <br/>
        </div>
        <div className="BouttonDevisContacter">
          <Stack gap={2} direction="horizontal">
            <BouttonDevis taille={20} />
            <div className="vr" />
            <BouttonContacter />
          </Stack>
        </div>
        <br/>
      </div>
    </main>
  );
}

