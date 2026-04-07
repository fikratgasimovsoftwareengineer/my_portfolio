import React from 'react';
import Container from 'react-bootstrap/Container';
import {Row, Col, Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
const Contact = () => {
  return (
    <div className="contact-section">
      <Container className="py-6">
        <h2 className="section-heading mb-4 text-center">Get in Touch</h2>
        
        <Form>
          <Row>
            {/* Colonna Sinistra (Larghezza 6 su 12) */}
            <Col md={6}>
              {/* First Name */}
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label className="text-light">First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" className="form-custom" />
              </Form.Group>

              {/* Email - Posizionata sotto il First Name (nella stessa colonna) */}
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="text-light">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" className="form-custom" />
                <Form.Text className="text-muted">
                  I will never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>

            {/* Colonna Destra (Larghezza 6 su 12) */}
            <Col md={6}>
              {/* Last Name */}
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label className="text-light">Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" className="form-custom" />
              </Form.Group>
              
              {/* Spazio opzionale: puoi aggiungere qui un campo Messaggio o lasciarlo vuoto */}
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label className="text-light">Message (Optional)</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="How can I help you?" className="form-custom" />
              </Form.Group>
            </Col>
          </Row>

          <div className="text-center mt-4">
            <Button variant="outline-info" type="submit" className="btn-tech">
              Send Message
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;