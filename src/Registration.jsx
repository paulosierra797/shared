import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false || !formData.role) {
      e.stopPropagation();
      setValidated(true);
      setError(true);
    } else {
      localStorage.setItem("registeredUsername", formData.username);
      localStorage.setItem("userRole", formData.role);
      setIsRegistered(true);
      setError(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right,rgb(245, 245, 245),rgb(0, 0, 0))",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="d-flex justify-content-center align-items-center h-100">
        <Card
          className="shadow-lg"
          style={{ width: "25rem", borderRadius: "1rem" }}
        >
          <Card.Body>
            <h3 className="text-center mb-4 text-primary">Create Account</h3>

            {isRegistered ? (
              <>
                <Alert variant="success" className="text-center">
                  Registration successful!
                </Alert>
                <div className="text-center mt-4">
                  <h5>Welcome, {formData.username}!</h5>
                  <p>Your account has been created successfully.</p>
                  <Link to="/" className="btn btn-outline-primary mt-3">
                    Go back to Login
                  </Link>
                </div>
              </>
            ) : (
              <Form noValidate validated={validated} onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a username.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a password.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formRole">
                  <Form.Label>Role</Form.Label>
                  <Form.Select
                    required
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                  >
                    <option value="">Select a role</option>
                    <option value="Seller">Seller</option>
                    <option value="Buyer">Buyer</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please select a role.
                  </Form.Control.Feedback>
                </Form.Group>

                {error && (
                  <Alert variant="danger" className="text-center">
                    Please fill out all fields correctly.
                  </Alert>
                )}

                <div className="d-grid mb-2">
                  <Button variant="primary" type="submit">
                    Register
                  </Button>
                </div>

                <p className="text-center mt-3">
                  Already have an account? <Link to="/">Login</Link>
                </p>
              </Form>
            )}
          </Card.Body>

          <Card.Footer className="text-muted text-center small">
            &copy; 2025 LaboratoryAct Inc.
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
