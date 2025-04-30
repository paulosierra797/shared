import React, { useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom"; 

const LoginPage = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);
  const [registeredUsername, setRegisteredUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("registeredUsername");
    if (storedUsername) {
      setRegisteredUsername(storedUsername);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      setError(true);
    } else {
      navigate("/home");
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
            <h3 className="text-center mb-4 text-primary">Welcome!</h3>
            <Form noValidate validated={validated} onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" />
                <Form.Control.Feedback type="invalid">
                  Please provide a password.
                </Form.Control.Feedback>
              </Form.Group>

              {error && (
                <Alert variant="danger" className="text-center">
                  Invalid input. Try again.
                </Alert>
              )}

              <div className="d-grid mb-2">
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </div>

              {/* 👇 "No account? Register" Link */}
              <p className="text-center mt-3">
                No account? <Link to="/register">Register</Link>
              </p>
            </Form>

            {registeredUsername && (
              <div className="text-muted mt-3 text-center">
                Registered User: <strong>{registeredUsername}</strong>
              </div>
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

export default LoginPage;
