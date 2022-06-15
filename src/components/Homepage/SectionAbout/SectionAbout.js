import React from "react";
import BouttonContacter from "../BouttonContacter/BouttonContacter";
import BouttonDevis from "../BouttonDevis/BouttonDevis";
import "./SectionAbout.css";
import { Stack, useMediaQuery, useTheme } from "@mui/material"


export default function SectionAbout() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div className="SectionAbout">

      {isMatch ? (
        <>
          <div className="Plateform">
            <p>Plateform for stanslate : the Professional  Human Documents Parser</p>
          </div>
          <div className="Besoin">
            <p>Besoin d'une traduction,<br />d'une relecture ou encore<br /> de corriger vos <br />documents ?</p>
          </div>
          <div className="Description">
            <p>Un service de traduction, relecture et de correction<br />professionnelle en toute simplicité. Par des  opérateurs<br />humains experts, optimisés par la technologie, livrés rapidement.</p>
          </div>
          <div className="BouttonDevisContacter">
            <Stack spacing={2} direction="row">
              <BouttonDevis taille={20} />
              <BouttonContacter />
            </Stack>
          </div>
        </>
      ) : (
        <>

          <div className="Plateform">
            <p>Plateform for stanslate : the Professional  Human Documents Parser</p>
          </div>
          <div className="Besoin">
            <p>Besoin d'une traduction,<br />d'une relecture ou encore<br /> de corriger vos <br />documents ?</p>
          </div>
          <div className="NuageDeMots">
            <img src="./images/nuage_de_mots.svg" alt="" />
          </div>
          <div className="Description">
            <p>Un service de traduction, relecture et de correction<br />professionnelle en toute simplicité. Par des  opérateurs<br />humains experts, optimisés par la technologie, livrés rapidement.</p>
          </div>
          <div className="BouttonDevisContacter">
            <Stack spacing={2} direction="row">
              <BouttonDevis taille={20} />
              <BouttonContacter />
            </Stack>
          </div>
        </>
      )}
    </div>
  );
}

