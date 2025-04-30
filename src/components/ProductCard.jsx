import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ image, name, price,description, onAddToCart }) => {
  return (
    <Card className="shadow-sm">
      <Card.Img variant="top" src={image} height="200px" style={{ objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="fw-bold text-success">${price}</Card.Text>
        <Button variant="primary" onClick={onAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;



