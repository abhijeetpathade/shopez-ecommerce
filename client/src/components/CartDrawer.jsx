import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

function CartDrawer({ isOpen, closeCart }) {
  const { cart } = useCart();

  return (
    <>
      {/* Dark Overlay */}
      {isOpen && (
        <div
          onClick={closeCart}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            zIndex: 999,
          }}
        />
      )}

      {/* Drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          width: "360px",
          height: "100vh",
          background: "#ffffff",
          boxShadow: "-4px 0 20px rgba(0,0,0,0.25)",
          transition: "transform 0.3s ease",
          zIndex: 2000,
          padding: "25px",
          overflowY: "auto"
        }}
      >
        <h2 style={{ color: "#6366f1", marginBottom: "20px" }}>
            Your Cart
        </h2>

        {cart.length === 0 && <p>Your cart is empty</p>}

        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "18px",
              borderBottom: "1px solid #eeeeee",
              paddingBottom: "12px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "55px",
                height: "55px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />

            <div>
              <p style={{ fontWeight: "bold", margin: "0" }}>{item.name}</p>
              <p style={{ color: "#6366f1", margin: "2px 0" }}>
                ₹{item.price}
              </p>
            </div>
          </div>
        ))}

        <div style={{marginTop:"25px", display:"flex", gap:"10px"}}>

            <Link to="/cart">
                <button
                style={{
                    padding:"10px 18px",
                    background:"#6366f1",
                    color:"#fff",
                    border:"none",
                    borderRadius:"6px",
                    cursor:"pointer"
                }}
                >
                View Full Cart
                </button>
            </Link>

            <button
                onClick={closeCart}
                style={{
                padding:"10px 18px",
                background:"#e5e7eb",
                color:"#111827",
                border:"none",
                borderRadius:"6px",
                cursor:"pointer"
                }}
            >
                Close
            </button>

        </div>
      </div>
    </>
  );
}

export default CartDrawer;