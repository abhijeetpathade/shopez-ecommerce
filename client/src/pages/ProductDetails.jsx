import { useParams, useLocation } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const products = [
  { id: 101, name: "Nike Running Shoes", price:9999,image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
  { id: 102, name: "Men's Casual Shirt", price: 2499, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" },
  { id: 103, name: "Denim Jeans", price: 3499, image: "https://images.unsplash.com/photo-1542272604-787c3835535d" },
  { id: 104, name: "Women's Handbag", price: 4299, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3" },
  { id: 105, name: "Sports Sneakers", price: 5999, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77" },
  { id: 106, name: "Stylish Sunglasses", price: 999, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083" },
  { id: 107, name: "Leather Jacket", price: 7999, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5" },
  { id: 108, name: "Backpack", price: 1799, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62" },
  { id: 109, name: "iPhone Smartphone", price: 79999, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
  { id: 110, name: "Android Smartphone", price: 59999, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97" },
  { id: 111, name: "Men's Formal Shoes", price: 4999, image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4" },
  { id: 112, name: "Cotton T-Shirt", price: 1199, image: "https://images.unsplash.com/photo-1520975916090-3105956dac38" }
];

function ProductDetails() {

  const { id } = useParams();
  const location = useLocation();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const stateProduct = location.state?.product;
  const listProduct = products.find(p => p.id === Number(id));
  const product = stateProduct || listProduct;

  const [qty, setQty] = useState(1);

  if (!product) {
    return <h2 style={{ padding: "40px", textAlign: "center" }}>Product not found</h2>;
  }

  return (
  <div
    style={{
      maxWidth: "1100px",
      margin: "40px auto",
      display: "flex",
      gap: "60px",
      padding: "20px",
      alignItems: "center"
    }}
  >

    <div>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "420px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
        }}
      />
    </div>

    <div style={{flex:"1"}}>

      <h1 style={{fontSize:"32px"}}>{product.name}</h1>

      <div style={{color:"#facc15",fontSize:"20px",marginTop:"8px"}}>
        ⭐⭐⭐⭐☆
      </div>

      <h2 style={{color:"#6366f1",fontSize:"28px",marginTop:"10px"}}>
        ₹{product.price.toLocaleString("en-IN")}
      </h2>

      <p style={{color:"#ef4444",fontWeight:"bold"}}>
        20% OFF
      </p>

      <p style={{marginTop:"20px",lineHeight:"1.6",maxWidth:"500px"}}>
        High quality product with modern design and comfort.
        Built with premium materials and perfect for everyday use.
      </p>

      {/* Quantity */}
      <div style={{marginTop:"20px"}}>
        <label style={{marginRight:"10px"}}>Quantity:</label>

        <select
          value={qty}
          onChange={(e)=>setQty(Number(e.target.value))}
          style={{padding:"6px",borderRadius:"6px"}}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </div>

      <div style={{display:"flex",gap:"15px",marginTop:"30px"}}>

 <button
  onClick={() => {

    addToCart(product, qty);

    toast.success(
      <div>

        <p style={{marginBottom:"10px"}}>
          ✔ {product.name} added to cart
        </p>

        <div style={{display:"flex",gap:"10px"}}>

          <button
            onClick={() => navigate("/cart")}
            style={{
              background:"#6366f1",
              color:"#fff",
              border:"none",
              padding:"6px 12px",
              borderRadius:"6px",
              cursor:"pointer"
            }}
          >
            Go to Cart
          </button>

          <button
              onClick={() => {
                toast.dismiss();
                navigate("/");
              }}
              style={{
                background:"#111827",
                color:"#fff",
                border:"none",
                padding:"6px 12px",
                borderRadius:"6px",
                cursor:"pointer"
              }}
            >
              Continue Shopping
          </button>

        </div>

      </div>
    );

  }}
  style={{
    padding:"12px 25px",
    background:"#6366f1",
    color:"#fff",
    border:"none",
    borderRadius:"8px",
    cursor:"pointer",
    fontSize:"16px"
  }}
>
  🛒 Add to Cart
</button>
        <button
          onClick={() => {
            addToCart(product, qty);
            navigate("/checkout");
          }}
          style={{
            padding:"12px 25px",
            background:"#111827",
            color:"#fff",
            border:"none",
            borderRadius:"8px",
            cursor:"pointer"
          }}
        >
          Buy Now
        </button>

      </div>

    </div>

  </div>
);
}

export default ProductDetails;