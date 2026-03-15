import { useState, useEffect } from 'react';
import api from '../services/api';
import { useAuth } from '../contexts/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [newProduct, setNewProduct] = useState({ title: '', description: '', price: 0, category: '', stock: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.role !== 'admin') {
      window.location.href = '/';
      return;
    }
    loadData();
  }, [user]);

  const loadData = async () => {
    try {
      const [prodsRes, ordsRes] = await Promise.all([
        api.get('/products'),
        api.get('/orders/admin')
      ]);
      setProducts(prodsRes.data.products);
      setOrders(ordsRes.data.orders);
    } catch (error) {
      console.error('Load admin data error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInput = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      await api.post('/products', newProduct);
      setNewProduct({ title: '', description: '', price: 0, category: '', stock: 0 });
      loadData();
    } catch (error) {
      alert('Add product failed');
    }
  };

  const deleteProduct = async (id) => {
    if (confirm('Delete product?')) {
      try {
        await api.delete(`/products/${id}`);
        loadData();
      } catch (error) {
        alert('Delete failed');
      }
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      
      <div className="card">
        <h2>Add Product</h2>
        <form onSubmit={addProduct}>
          <input name="title" placeholder="Title" value={newProduct.title} onChange={handleInput} required />
          <input name="description" placeholder="Description" value={newProduct.description} onChange={handleInput} required />
          <input name="price" type="number" placeholder="Price" value={newProduct.price} onChange={handleInput} required />
          <input name="category" placeholder="Category" value={newProduct.category} onChange={handleInput} required />
          <input name="stock" type="number" placeholder="Stock" value={newProduct.stock} onChange={handleInput} required />
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>

      <div className="card">
        <h2>Products ({products.length})</h2>
        <ul>
          {products.slice(0,10).map(p => (
            <li key={p._id}>
              {p.title} - ${p.price}
              <button onClick={() => deleteProduct(p._id)} className="btn btn-danger">Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2>Recent Orders ({orders.length})</h2>
        <ul>
          {orders.slice(0,10).map(o => (
            <li key={o._id}>
              Order #{o._id.slice(-4)} - Total: ${o.totalPrice} - Status: {o.orderStatus}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;

