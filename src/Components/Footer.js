import { Col, Container, Row } from "react-bootstrap"

import Logo from "../assets/img/logo.svg";
import NavIcon1 from '../assets/img/nav-icon1.svg'
import NavIcon2 from '../assets/img/nav-icon2.svg'
import NavIcon3 from '../assets/img/nav-icon3.svg'
import { MailchimpForm } from "./MailchimpForm";

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                  <MailchimpForm/>
                  <Col sm={6}>
                    <img src={Logo} alt="logo" />
                  </Col>
                  <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href=""><img src={NavIcon1} alt="" /></a>
                        <a href=""><img src={NavIcon2} alt="" /></a>
                        <a href=""><img src={NavIcon3} alt="" /></a>
                    </div>
                    <p>CopyRight 2022 .All Right Reserved</p>
                  </Col>
                </Row>
            </Container>
        </footer>
    )
}