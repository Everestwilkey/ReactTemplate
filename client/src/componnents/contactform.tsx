
import { useState, useEffect } from 'react';

import { Button, Col, Container, Form, Row, Alert } from 'react-bootstrap';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., sending data to a server
    console.log({ email, inquiry });
    setSubmitted(true);
    setShowAlert(true);
    // Reset form fields
    setEmail('');
    setInquiry('');
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setShowAlert(false);
        setSubmitted(false);
      }, 5000); // Alert will disappear after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <>
      <Container className="bg-body-secondary rounded pb-3">
        {showAlert && (
          <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
            Your inquiry has been received. We'll get back to you shortly.
          </Alert>
        )}
        <Row>
          <Col sm>
            <h3 className="p-3">Have Questions?</h3>
          </Col>
        </Row>
        <Row>
          <Col sm></Col>
          <Col xs={12} md={8} lg={6}>
            <Form className="text-start bg-light p-3 rounded" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="ContactQuestion">
                <Form.Label className="fw-bold">Inquiry's</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Questions go here..."
                  value={inquiry}
                  onChange={(e) => setInquiry(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col sm></Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactForm;
