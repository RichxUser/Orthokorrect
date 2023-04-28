import React from "react";
import Header from "../Header/Header";
import SectionServices from "../SectionServices/SectionServices";
import SectionAbout from "./SectionAbout/SectionAbout";
import SectionTarifs from "../SectionTarifs/SectionTarifs";
import Demo from "../Demo/Demo";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { Container, Row, Col } from 'react-bootstrap';

export default function Homepage() {
  return (
    <Container >
      <Row className="flex flex-column">
        <Col >
          <Header />
        </Col>
        <Col>
          <SectionAbout />
        </Col>
        <Col>
          <SectionServices />
        </Col>
        <Col>
          <SectionTarifs />
        </Col>
        {/* <SectionServices /> */}
        {/* <SectionTarifs /> */}

        <Col >
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}
