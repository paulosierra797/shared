import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const purchaseData = [
  {
    id: 1,
    product: 'Wireless Headphones',
    quantity: 1,
    total: 59.99,
    date: '2025-04-20',
    image: 'https://via.placeholder.com/50',
  },
  {
    id: 2,
    product: 'Smart Watch',
    quantity: 2,
    total: 259.98,
    date: '2025-04-20',
    image: 'https://via.placeholder.com/50',
  },
];

const PurchaseHistory = () => {
  return (
    <div className="container my-5">
      <div className="card shadow">
        <div className="card-body">
          <h3 className="card-title mb-4 d-flex align-items-center">
            🧾 <span className="ms-2">Purchase History</span>
          </h3>
          <div className="table-responsive">
            <table className="table table-bordered table-striped align-middle">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Product</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Total</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {purchaseData.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} alt={item.product} width="50" height="50" />
                    </td>
                    <td>{item.product}</td>
                    <td>{item.quantity}</td>
                    <td>${item.total.toFixed(2)}</td>
                    <td>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistory;
