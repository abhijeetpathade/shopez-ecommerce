import { Link, useLocation } from "react-router-dom";
import homeProducts from "./HomeProducts";

function Products() {

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get("search");

  const allProducts = homeProducts;

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(search?.toLowerCase() || "")
  );

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "auto" }}>

      <h1 style={{ fontSize: "clamp(24px,4vw,36px)", marginBottom: "30px" }}>
        All Products
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
          gap: "25px",
        }}
      >

        {filteredProducts.length > 0 ? (

          filteredProducts.map((product) => (

            <Link
              key={product.id}
              to={`/product/${product.id}`}
              state={{ product }}
              style={{ textDecoration: "none", color: "inherit" }}
            >

              <div
                className="product-card"
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  position: "relative",
                  transition: "all 0.3s ease"
                }}
               
              >

                {/* Discount Badge */}
                <span
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    background: "#ef4444",
                    color: "white",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    zIndex: 2
                  }}
                >
                  -20%
                </span>

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover"
                  }}
                />

                {/* Product Info */}
                <div
                  style={{
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    justifyContent: "space-between"
                  }}
                >

                  <h3
                    style={{
                      minHeight: "48px",
                      fontSize: "16px",
                      fontWeight: "600"
                    }}
                  >
                    {product.name}
                  </h3>

                  <div style={{ color: "#facc15", marginBottom: "6px" }}>
                    ⭐⭐⭐⭐☆
                  </div>

                  <p
                    style={{
                      color: "#6366f1",
                      fontWeight: "bold",
                      fontSize: "18px"
                    }}
                  >
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>

                  <button
                    style={{
                      marginTop: "10px",
                      padding: "10px 18px",
                      border: "none",
                      background: "#6366f1",
                      color: "#fff",
                      borderRadius: "8px",
                      cursor: "pointer"
                    }}
                  >
                    🛒 Add to Cart
                  </button>

                </div>

              </div>

            </Link>

          ))

        ) : (

          <p
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              fontSize: "20px",
              color: "#555"
            }}
          >
            No products found
          </p>

        )}

      </div>
    </div>
  );
}

export default Products;