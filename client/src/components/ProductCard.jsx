import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
      <h3>{product.title}</h3>
      <p>{product.category}</p>
      <p className="price">${product.price}</p>
      <Link to={`/product/${product._id}`} className="btn btn-primary">View Details</Link>
    </div>
  );
};

export default ProductCard;

