import React from "react";
import {  useMediaQuery, useTheme } from "@mui/material"
import "./SectionServices.css"

export default function SectionServices() {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    return (

        <div className="SectionServices">


            {isMatch ? (
                <>
                    <div className="mobileResponsive">
                        <div className="ServicesTitle">
                            <p>Ortho-korrect, assure votre satisfaction pour vos besoins</p>
                        </div>
                        <div className="ServicesTable">
                            <div className="ServiceTraduction">
                                <div className="ServiceTraductionIcon">
                                    <img src="./images/Translation.svg" alt="" />
                                </div>
                            </div>
                            <div className="SubTitle1">
                                <p>Traduction<br />professionnelle</p>
                            </div>
                            <div className="Describe1">
                                <p>Catalogues, manuels d'utilisation, rapports<br />techniques, thèses de doctorat, flyers,<br /> revues, livres, contrats, comptes annuels.<br />etc.<br />Nous traduisons toute sorte de documents.</p>
                            </div>
                        </div>
                        <div className="ServicesTable1">
                            <div className="ServiceRelecture">
                                <div className="ServiceRelectureIcon">
                                    <img src="./images/ReadOnline.svg" alt="" />
                                </div>
                            </div>
                            <div className="SubTitle2">
                                <p>Relecture<br />de documents</p>
                            </div>
                            <div className="Describe2">
                                <p>Catalogues, manuels d'utilisation, rapports<br />techniques, thèses de doctorat, flyers,<br /> revues, livres, contrats, comptes annuels.<br />etc.<br />Nous traduisons toute sorte de documents.</p>
                            </div>
                        </div>
                        <div className="ServicesTable2">
                            <div className="ServiceCorrection">
                                <div className="ServiceCorrectionIcon">
                                    <img src="./images/EditProperty.svg" alt="" />
                                </div>
                            </div>
                            <div className="SubTitle3">
                                <p>Correction de<br />documents</p>
                            </div>
                            <div className="Describe3">
                                <p>Par de professionnelles assermentées<br />réalisées par des traducteurs experts agrées<br /> auprès des grandes universités Américaine,<br />Européennes et africaines, Certifiées, avec<br />cachet et signature. </p>
                            </div>
                        </div>
                        <div className="ServicesTable3">
                            <div className="ServiceInterpretes">
                                <div className="ServiceInterpretesIcon">
                                    <img src="./images/CustomerSupport.svg" alt="" />
                                </div>
                            </div>
                            <div className="SubTitle4">
                                <p>Interprètes</p>
                            </div>
                            <div className="Describe4">
                                <p>Traducteurs interprètes au Amériques, Europe,<br />Afrique, etc. Interprétation simultanée et<br />consécutive pour des réunions d'affaires, <br />présentations, conférences ou autres <br />évènements multilingues. </p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="ServicesTitle">
                        <p>Ortho-korrect, assure votre satisfaction pour vos besoins</p>
                    </div>
                    <div className="ServicesTable">
                        <div className="ServiceTraduction">
                            <div className="ServiceTraductionIcon">
                                <img src="./images/Translation.svg" alt="" />
                            </div>
                        </div>
                        <div className="SubTitle1">
                            <p>Traduction<br />professionnelle</p>
                        </div>
                        <div className="Describe1">
                            <p>Catalogues, manuels d'utilisation, rapports<br />techniques, thèses de doctorat, flyers,<br /> revues, livres, contrats, comptes annuels.<br />etc.<br />Nous traduisons toute sorte de documents.</p>
                        </div>
                    </div>
                    <div className="ServicesTable1">
                        <div className="ServiceRelecture">
                            <div className="ServiceRelectureIcon">
                                <img src="./images/ReadOnline.svg" alt="" />
                            </div>
                        </div>
                        <div className="SubTitle2">
                            <p>Relecture<br />de documents</p>
                        </div>
                        <div className="Describe2">
                            <p>Catalogues, manuels d'utilisation, rapports<br />techniques, thèses de doctorat, flyers,<br /> revues, livres, contrats, comptes annuels.<br />etc.<br />Nous traduisons toute sorte de documents.</p>
                        </div>
                    </div>
                    <div className="ServicesTable2">
                        <div className="ServiceCorrection">
                            <div className="ServiceCorrectionIcon">
                                <img src="./images/EditProperty.svg" alt="" />
                            </div>
                        </div>
                        <div className="SubTitle3">
                            <p>Correction de<br />documents</p>
                        </div>
                        <div className="Describe3">
                            <p>Par de professionnelles assermentées<br />réalisées par des traducteurs experts agrées<br /> auprès des grandes universités Américaine,<br />Européennes et africaines, Certifiées, avec<br />cachet et signature. </p>
                        </div>
                    </div>
                    <div className="ServicesTable3">
                        <div className="ServiceInterpretes">
                            <div className="ServiceInterpretesIcon">
                                <img src="./images/CustomerSupport.svg" alt="" />
                            </div>
                        </div>
                        <div className="SubTitle4">
                            <p>Interprètes</p>
                        </div>
                        <div className="Describe4">
                            <p>Traducteurs interprètes au Amériques, Europe,<br />Afrique, etc. Interprétation simultanée et<br />consécutive pour des réunions d'affaires, <br />présentations, conférences ou autres <br />évènements multilingues. </p>
                        </div>
                    </div>
                </>
            )}

        </div>
    );
}

