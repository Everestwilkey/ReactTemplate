import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from '../componnents/contactform';
import Footer from '../componnents/footer';
import Header from '../componnents/header';

function ContactPage() {
  return (
    <>
      <Header></Header>
      <div className="bg-secondary d-flex justify-content-center align-items-center">
        <Container className="m-0 px-0 pt-3 pb-5 container-fluid max-width-container align-items-center ">
          <Container>
            <Row>
              <Col></Col>
              <Col className=" bg-light rounded " xs={12}>
                <h1 className="p-3">Contact Us</h1>
                <p className="p-3">
                  We are here to help. Please fill out the form below and we
                  will get back to you shortly.
                </p>
                <ContactForm></ContactForm>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ContactPage;
