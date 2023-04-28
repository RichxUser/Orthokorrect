import React from "react";
import { Stack, useMediaQuery, useTheme } from "@mui/material"
import BouttonDevis from "../Homepage/BouttonDevis/BouttonDevis";
import { Container, Row, Col } from 'react-bootstrap';
import "./SectionTarifs.css"

export default function SectionTarifs() {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const taille = 40;

    return (

        <div className="SectionTarifs">


            {isMatch ? (
                <>
                    <div className="mobileResponsive">
                        <div className="TarifTitle">
                            <p>Ortho-korrect, responsive</p>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <Row className="flex flex-column">
                        <div>

                            <Row className="flex flex-column">
                                <div className="TarifTitle">
                                <br/>
                                    <p>Prix & tarifs</p>
                                </div>
                            </Row>
                            <Row className="flex">
                                    <Col >
                                        <div className="PrixTraductionFrame1">
                                            <p>Texte générique : 0,08 €<br />
                                                Contrat : 0,10 €<br />
                                                Manuels : 0,10 €<br />
                                                Web : 0,10 €<br />
                                                Catalogues : 0,09 €<br />
                                                Rapports techniques : 0,01 €<br />
                                                Thèses de Master : 0,12 €<br />
                                                Thèses de doctorat : 0,12 €<br />
                                                Livres : 0,12 €<br />
                                                Revues : 0,12 €<br />
                                                Comptes annuels : 0,09 €
                                            </p>
                                            <div className="PrixTraductionFrameRectancgleArondi_1">
                                                <p>Traduction</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="PrixTraductionFrame2">
                                            <p>Texte générique : 0,08 €<br />
                                                Contrat : 0,10 €<br />
                                                Manuels : 0,10 €<br />
                                                Web : 0,10 €<br />
                                                Catalogues : 0,09 €<br />
                                                Rapports techniques : 0,01 €<br />
                                                Thèses de Master : 0,12 €<br />
                                                Thèses de doctorat : 0,12 €<br />
                                                Livres : 0,12 €<br />
                                                Revues : 0,12 €<br />
                                                Comptes annuels : 0,09 €
                                            </p>
                                            <div className="PrixTraductionFrameRectancgleArondi_2">
                                                <p>Relecture / Correction</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="PrixTraductionFrame3">
                                            <p>Interprétation simultanée : 0,08 €<br />
                                                Interprétation Consécutive : 0,10 €<br />
                                                Réunions d'affaires : 0,09 €<br />
                                                Présentations : 0,01 €<br />
                                                Evènements multilingues : 0,12 €
                                            </p>

                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            
                                            <div className="PrixTraductionFrameRectancgleArondi_3">
                                                <p>Interprète</p>
                                            </div>
                                        </div>
                                    </Col>
                                
                            </Row>
                            <Row className="flex flex-column">
                                <div className="DescriptionLangues">
                                    <p>Français, Anglais, Espagnol, Allemand et Italien.<br />
                                        Nos principales langues de travail sont le Français, l'Espagnol, l'Anglais, l'Allemand et l'Italien.<br />
                                        Dans ces 5 langues nous pouvons vous offrir des prix et tarifs vraiment imbattables !
                                    </p>
                                </div>
                            </Row>
                            <Row className="flex flex-column">
                                <div className="ObtenezDevisInstantane">
                                    <Row className="flex flex-column">
                                        <p className="ObtenezDevisInstantaneTitre">Obtenez un devis instantané</p>
                                        <p className="ObtenezDevisInstantaneDetails">Un moyen simple et facile de faire traduire vos documents<br />
                                            rapidement. Faites une demande en quelques clics.</p>
                                    </Row>
                                    <Row className="flex flex-column">
                                        <div className="ObtenezDevisInstantaneBouttonDevisContacter">
                                            <Stack spacing={2} direction="row">
                                                <BouttonDevis taille={40} />
                                            </Stack>
                                        </div>
                                    </Row>
                                </div>
                            </Row>
                        </div>

                    </Row>
                </>
            )}

        </div>
    );
}

