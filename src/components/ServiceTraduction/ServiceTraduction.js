import Header from "../Header/Header";
import { Container, Row, Col } from 'react-bootstrap';
import Footer from "../Footer/Footer";
import BouttonContacter from "../Homepage/BouttonContacter/BouttonContacter";
import BouttonDevis from "../Homepage/BouttonDevis/BouttonDevis";
import Stack from 'react-bootstrap/Stack';
import './ServiceTraduction.css';
const ServiceTraduction = () => {
    return (
        <main >
            <Header />
            <Container >
                <Row className="flex flex-column">
                    <Col >
                        <div class="row">
                            <div class="col-md-6">
                                <br /><br /><br /><br />
                                <div className="Besoin">
                                    <br />
                                    <p>Votre agence de<br /></p>
                                    <p>traduction en ligne<br /></p>
                                    <br />
                                </div>
                                <div className="Description" >
                                    <p>Traductions professionnelles sur vos fichiers d'origine dans<br />plus de 90 langues quel que soit votre secteur d'activité,<br />grâce à nos chefs de projet et nos 5 000 traducteurs.</p>
                                    <br />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div className="ServiceNuageDeMots" >

                                    <img src="./images/header.jpg" alt="" width='80%' height='80%' />

                                </div>

                            </div>
                            <div className="BouttonDevisContacter">
                                <Stack gap={2} direction="horizontal">
                                    <BouttonDevis taille={20} />
                                </Stack>
                            </div>
                        </div>
                    </Col>
                    <br />
                    <Col>
                        <div className="notreAgencebg" >

                            <br /><br /><br /><br /><br />
                            <h1>''</h1>
                            <p>Nous créons un espace où les traducteurs professionnels peuvent partager leur passion pour les langues ainsi que où les clients peuvent trouver la solution à leurs besoins linguistiques.</p>
                            <br /><br /><br /><br /><br />
                        </div>
                        <br /><br /><br />
                    </Col>
                    <Col>

                    </Col>
                    <Col>
                    </Col>


                </Row>
                <Row className="flex flex-column">
                    <Col>
                        <div className="WeAreNot" >
                            <br />
                            <h4>PAS UNE AGENCE DE TRADUCTION !</h4>
                            <p>Nous sommes Ortho-korrect</p>
                            <br /><br />
                        </div>

                    </Col>
                    <Col >
                        <div class="row">
                            <div class="col-md-6">
                                <div className="" >
                                    <img src="./images/equipe.png" alt="" height='300px' width='45cd cd0px' />
                                </div>

                            </div>
                            <div class="col-md-6">

                                <div className="Besoin">

                                    <p> LAISSEZ-NOUS VOUS FACILITER LA TACHE<br /></p>
                                    <br />
                                </div>
                                <div className="Description" >
                                    <p>Nous offrons une plate-forme où les clients et les linguistes se<br />rencontrent pour connecter les cultures et célébrer la diversité à<br />travers les langues.</p>
                                    <br />
                                </div>
                            </div>

                        </div>
                    </Col>
                    <br />
                    <Col>

                    </Col>
                    <Col>
                    </Col>

                    <Col >
                        <Footer />
                    </Col>
                </Row>
            </Container>
            <br />
            <br />
            <br />
        </main>

    )
}

export default ServiceTraduction