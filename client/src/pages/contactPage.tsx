import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "../componnents/contactform";
import Footer from "../componnents/footer";
import Header from "../componnents/header";

function ContactPage() {
    return (
        <>
        <Header></Header>
        <div className="d-flex justify-content-center align-items-center pt-4 bg-secondary">
        <Container className="m-0 px-0 pb-5 container-fluid max-width-container  ">
        <Container >
        <Row>
            <Col>
            </Col>
            <Col className="p-3 bg-light rounded mb-3"
            xs={12}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 6, offset: 4 }}>
            <h1 className="p-3">Contact Us</h1>
            <p className="p-3">We are here to help. Please fill out the form below and we will get back to you shortly.</p>
            <ContactForm></ContactForm>
            </Col>
            <Col>
            </Col>
        </Row>
        </Container>
        
        </Container>
        </div>
        <Footer></Footer>
        
        </>
    );
}

export default ContactPage;