import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verify token or load user
      setUser(JSON.parse(localStorage.getItem('user') || '{}'));
      loadCart();
    }
    setLoading(false);
  }, []);

  const loadCart = async () => {
    if (user) {
      try {
        const { data } = await api.get(`/cart/${user.id}`);
        setCart(data.cart);
      } catch (error) {
        console.error('Load cart error:', error);
      }
    }
  };

  const login = (token, userData) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    loadCart();
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setCart([]);
  };

  const value = {
    user,
    cart,
    loading,
    login,
    logout,
    loadCart,
    setCart
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

