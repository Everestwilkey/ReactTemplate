import { Button, Col, Container, Form, Row } from 'react-bootstrap';

function ContactForm() {
  return (
    <>
      <Container className="bg-body-secondary rounded pb-3">
        <Row>
          <Col sm>
            <h3 className="p-3">Have Questions?</h3>
          </Col>
        </Row>
        <Row>
          <Col sm></Col>
          <Col xs={12} md={8} lg={6}>
            <Form className="text-start bg-light p-3 rounded">
              <Form.Group className="mb-3  " controlId="formBasicEmail">
                <Form.Label className="fw-bold">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="EnterEmail"
                ></Form.Control>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="ContactQuestion">
                <Form.Label className="fw-bold">Inquiry's</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Questions go here..."
                ></Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col sm></Col>
          <Col sm></Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactForm;
