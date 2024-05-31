import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from '../componnents/header';





import ContactForm from '../componnents/contactform';
import Footer from '../componnents/footer';
const logo = '../assets/image/logo.png';
function AboutPage() {
  return (
    <>
      <Header></Header>
      <div className="d-flex justify-content-center align-items-center pt-4 bg-secondary">
        <Container
          fluid
          className="m-0 px-0 pb-5 container-fluid max-width-container  "
        >
          <Row className="bg-dark rounded">
            <Col className="pt-4 mx-3 ">
              <blockquote className="blockquote text-white text-center fs-2 ">
                Leaving Businesses Better Than We Found Them
              </blockquote>
              <figcaption className="blockquote-footer text-body-tertiary text-center ">
                Everest Wilkey
              </figcaption>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="p-3"></div>
            </Col>
          </Row>
          <Row className="mt-4 mx-0 mx-md-3 mx-lg-5 px-4 ">
            <Col className="d-none d-md-block text-end justify-content-center">
              <img
                src={logo}
                alt="Logo"
                width="200"
                height="200"
                className="d-inline-block bg-dark rounded"
              />
            </Col>
            <Col
              xs={12}
              md={{ span: 8, offset: 2 }}
              lg={{ span: 6, offset: 4 }}
              className="p-3 bg-light rounded m-0 "
            >
              <h3>Web Development</h3>
              <p>
                We love helping business create there dream web sites that
                convert.
              </p>
              <Button variant="primary" href="https://www.example.com">
                Click Here for Web Development
              </Button>
            </Col>
          </Row>
          <Row className="mt-4 mx-0 mx-md-3 mx-lg-5 px-4 pb-3 ">
            <Col
              xs={12}
              md={{ span: 8, offset: -2 }}
              lg={{ span: 6, offset: -4 }}
              className="p-3 bg-light rounded "
            >
              <h3>Web Development</h3>
              <p>
                We love helping business create there dream web sites that
                convert.
              </p>
              <Button variant="primary" href="https://www.example.com">
                Click Here for Web Development
              </Button>
            </Col>
            <Col className="d-none d-md-block justify-content-center">
              <img
                src={logo}
                alt="Logo"
                width="200"
                height="200"
                className="d-inline-block bg-dark rounded"
              />
            </Col>
          </Row>
          <ContactForm />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
