import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../componnents/header';
import ContactForm from '../componnents/contactform';
import Footer from '../componnents/footer';

function Home() {
  return (
    <>
      <Header />
      <div className="bg-secondary pt-4 pb-5">
        <Container className="d-flex flex-column align-items-center rounded mb-3 p-3">
          <Row>
            <Col xs={12} md={6} className="offset-md-3">
              {/* Message from the system or company */}
              <div className="bg-primary text-white p-3 rounded message-box message-left">
                <h2>Welcome To 208 DIGITAL!</h2>
              </div>
            </Col>
            <Col xs={12} md={6} className="offset-md-3">
              {/* User's message */}
              <div className="bg-custom-color text-white p-3 rounded message-box message-right">
                <h3>What do you do?</h3>
              </div>
            </Col>
            <Col xs={12} md={6} className="offset-md-3">
              <div className="bg-primary text-white p-3 rounded message-box message-left">
                <h3>
                  We are a Digital Media Company that does everything from
                  Websites to ads.
                </h3>
              </div>
            </Col>
          </Row>
        </Container>

        <ContactForm />
      </div>

      <Footer />
    </>
  );
}

export default Home;
