import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart!`);
  };

  return (
    <Container className="my-4">
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} md={4}>
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
              onAddToCart={() => handleAddToCart(product.name)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
