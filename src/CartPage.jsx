import React from "react";
import { Container, Table, Card, Button, Alert } from "react-bootstrap";

// Mock cart items 
const cartItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    quantity: 1,
    image:
      "https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch720_Primary_image?$categorypdpnav$&fmt=png-alpha",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 129.99,
    quantity: 2,
    image: "https://www.leafstudios.in/cdn/shop/files/1_1099cd20-7237-4bdf-a180-b7126de5ef3d_1024x1024.png?v=1722230645",
  },
];

const CartPage = () => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container className="my-5">
      <Card className="shadow-lg p-4">
        <h3 className="mb-4 text-center">🛒 Your Cart</h3>

        {cartItems.length === 0 ? (
          <Alert variant="info" className="text-center">
            Your cart is currently empty.
          </Alert>
        ) : (
          <>
            <Table responsive bordered hover>
              <thead className="table-dark">
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} alt={item.name} width="60" />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div className="text-end">
              <h5>
                Total Amount: <strong>${total.toFixed(2)}</strong>
              </h5>
              <Button variant="success" className="mt-3">
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </Card>
    </Container>
  );
};

export default CartPage;
