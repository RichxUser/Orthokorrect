import { Row, Col } from 'react-bootstrap';
import './footer.css';
const Footer = () => {
    var today = new Date();
    return (
        <footer className="footer">
            <div className='' >
                <div >
                    
                    <Row className="flex flex-column">
                        <div>

                            <Row className="flex flex-column">
                                <div className="TarifTitle">
                                    <br />
                                </div>
                            </Row>
                            <Row className="flex">
                                <Col >
                                    <div className="">
                                        <div className="titre">
                                            <p>Ce que nous offrons</p>
                                        </div>
                                        <p>Traduction de documents<br />
                                        Localisation<br />
                                        Génération de contenu<br />
                                        </p>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="">
                                        <div className="titre">
                                            <p>Industrie</p>
                                        </div>
                                        <p>Traductions spécifiques<br />Start-up</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="">
                                        <div className="titre">
                                            <p>Langues</p>
                                        </div>
                                        <p>Français<br /> Anglais<br /> Espagnol<br /> Allemand <br /> Chinois</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="">
                                        <div className="titre">
                                            <p>À propos de nous</p>
                                        </div>
                                        <p>Contactez-nous <br /> À propos de nous <br />Carrière <br />Freelancers</p>


                                    </div>
                                </Col>

                            </Row>
                            <hr/> 
                            <Row className="flex flex-column">
                                <div className="DescriptionLangues">
                                <p>Termes et conditions<br />
Politique de confidentialité<br />
Accord de traitement des données<br />
Sécurité

                                     </p>
                                    <p> Copyright Ⓒ - {today.getFullYear()} Ortho-correct. Tous les droits sont réservés. </p>
                                </div>
                            </Row>
                        </div>

                    </Row>
                </div>
            </div>
        </footer>
    )
}

export default Footer