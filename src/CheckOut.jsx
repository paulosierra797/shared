import React, { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate checkout confirmation
    setSubmitted(true);
    console.log("Order submitted:", formData);
  };

  return (
    <Container className="my-5">
      <Card className="shadow-lg p-4">
        <h3 className="mb-4 text-center">🧾 Checkout</h3>

        {submitted ? (
          <Alert variant="success" className="text-center">
            ✅ Your order has been placed successfully!
          </Alert>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Shipping Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="text-end">
              <Button variant="primary" type="submit">
                Confirm Order
              </Button>
            </div>
          </Form>
        )}
      </Card>
    </Container>
  );
};

export default Checkout;
