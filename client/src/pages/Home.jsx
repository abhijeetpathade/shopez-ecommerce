import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 900,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlU7ixye3Q9BVjGNwusQOCrlX9yTcKjY69A&s",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 450,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbUZpw8HNQsOZNWpUYMXL9Xg3IRGHGxSu_Q&s",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 500,
    image:
      "https://www.coconutlife.in/cdn/shop/files/145_134.jpg?v=1719853598",
  },
  {
    id: 4,
    name: "Laptop",
    price: 50000,
    image:
      "https://www.cnet.com/a/img/resize/bb8a2aa9c31f8ec08d82228a51eabf05f00e54d2/hub/2025/03/10/d190e21d-9634-440d-8f33-396c8cb3da6a/m4-macbook-air-15-11.jpg?auto=webp&height=500",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 900,
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2025/12/BEST-MECHANICAL-KEYBOARDS-2048px-TOP-ART-3X2-V2.jpg?auto=webp&quality=75&crop=1:1,smart&width=1024",
  },
  {
    id: 7,
    name: "4K Monitor",
    price: 10000,
    image:
      "https://i.rtings.com/assets/pages/UzlAzYNI/best-4k-gaming-monitors-20251125-medium.jpg?format=auto",
  },
  {
    id: 8,
    name: "VR Headset",
    price: 800,
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=800&q=80",
  },
];

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <div
        style={{
          background: "linear-gradient(90deg, #2563eb, #7c3aed)",
          color: "#fff",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Welcome to ShopEZ
        </h1>
        <p style={{ fontSize: "18px" }}>
          Discover gadgets, accessories, and tech essentials
        </p>
      </div>


      {/* FEATURED PRODUCTS */}
      <div style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>

        <h2 style={{ marginBottom: "25px", fontSize: "36px" }}>
          Featured Products
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "24px",
          }}
        >
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              state={{ product }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 24px rgba(0,0,0,0.14)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0,0,0,0.08)";
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: "16px", textAlign: "center" }}>
                  <h3
                    style={{
                      margin: "10px 0 8px",
                      fontSize: "22px",
                      height: "55px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    {product.name}
                  </h3>

                  <p
                    style={{
                      marginBottom: "14px",
                      fontWeight: "bold",
                      color: "#2563eb",
                    }}
                  >
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>

                  <button
                    style={{
                      background: "#2563eb",
                      color: "#fff",
                      border: "none",
                      padding: "10px 18px",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>


        {/* EXPLORE MORE BUTTON */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link to="/products">
         <button
            style={{
              padding: "14px 30px",
              fontSize: "16px",
              background: "#6366f1",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.35s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(90deg,#2563eb,#7c3aed)";
              e.currentTarget.style.transform = "scale(1.025)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#6366f1";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Explore More Products →
          </button>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Home;