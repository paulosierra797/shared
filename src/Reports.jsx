import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const mockReportData = {
  totalProductsSold: 430,
  totalRevenue: 12890.5,
  recentOrders: [
    { id: 101, user: 'John Doe', total: 89.99, date: '2025-04-29' },
    { id: 102, user: 'Jane Smith', total: 149.49, date: '2025-04-28' },
    { id: 103, user: 'Mike Brown', total: 45.0, date: '2025-04-27' },
  ],
  productSummary: [
    { id: 1, name: 'Wireless Headphones', totalSold: 50, stock: 20 },
    { id: 2, name: 'Smart Watch', totalSold: 92, stock: 8 },
    { id: 3, name: 'Bluetooth Speaker', totalSold: 31, stock: 0 },
  ]
};

const Reports = () => {
  const { totalProductsSold, totalRevenue, recentOrders, productSummary } = mockReportData;

  return (
    <div className="container my-5">
      <h2 className="mb-4">📊 Admin Reports</h2>

      {/* Summary Cards */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Products Sold</h5>
              <p className="card-text fs-4">{totalProductsSold}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-white bg-dark mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Revenue</h5>
              <p className="card-text fs-4">${totalRevenue.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <h4 className="mt-5">📑 Recent Orders</h4>
      <div className="table-responsive mb-5">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Total</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.user}</td>
                <td>${order.total.toFixed(2)}</td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Product Summary */}
      <h4 className="mt-5">📦 Product Summary</h4>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-secondary">
            <tr>
              <th>Product</th>
              <th>Total Sold</th>
              <th>Remaining Stock</th>
            </tr>
          </thead>
          <tbody>
            {productSummary.map(product => (
              <tr key={product.id} className={product.stock === 0 ? 'table-danger' : ''}>
                <td>{product.name}</td>
                <td>{product.totalSold}</td>
                <td>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
