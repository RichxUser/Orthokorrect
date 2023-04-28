import Header from "../Header/Header";
import { Container, Row, Col } from 'react-bootstrap';
import Footer from "../Footer/Footer";
import ReactPlayer from 'react-player';
import './NotreAgence.css';
const NotreAgence = () => {
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
                                    <p> À propos de nous<br /></p>
                                    <br />
                                </div>
                                <div className="Description" >
                                    <p>Un service de traduction, relecture et de correction<br />professionnelle en toute simplicité. Par des  opérateurs<br />humains experts, optimisés par la technologie, livrés rapidement.</p>
                                    <br />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div className="NuageDeMots" >
                                    <ReactPlayer width='450px' height='300px' url='https://youtu.be/uFjbJk4IGcs' />
                                </div>

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

export default NotreAgence