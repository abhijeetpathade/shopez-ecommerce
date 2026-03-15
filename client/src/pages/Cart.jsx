import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

function Cart() {

  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return <h2 style={{ padding: "40px" }}>Your cart is empty</h2>;
  }

  return (

    <div style={{ padding: "40px", maxWidth: "1000px", margin: "auto" }}>

      <h1>Your Cart</h1>

      {cart.map(item => (

        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            borderBottom: "1px solid #ddd",
            padding: "20px 0",
            minHeight: "110px"
          }}
        >

          {/* Product Image */}
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              borderRadius: "8px"
            }}
          />
          {/* Product Info */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
           >
            <h3>{item.name}</h3>
            <p>₹{item.price.toLocaleString("en-IN")}</p>
          </div>

          {/* Quantity Controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              minWidth: "120px",
              justifyContent: "center"
            }}
          >

            <button
              onClick={() => decreaseQty(item.id)}
              style={{ padding: "5px 10px" }}
            >
              -
            </button>

            <span>{item.qty}</span>

            <button
              onClick={() => increaseQty(item.id)}
              style={{ padding: "5px 10px" }}
            >
              +
            </button>

          </div>

          {/* Item Subtotal */}
          <div style={{ width: "120px", fontWeight: "bold" }}>
            ₹{(item.price * item.qty).toLocaleString("en-IN")}
          </div>

          {/* Remove Button */}
          <button
            onClick={() => removeFromCart(item.id)}
            style={{
              background: "red",
              color: "#fff",
              border: "none",
              padding: "6px 12px",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Remove
          </button>

        </div>

      ))}

      {/* Cart Total */}
      <h2 style={{ marginTop: "30px" }}>
        Total: ₹{total.toLocaleString("en-IN")}
      </h2>

      {/* Checkout Button */}
      <Link to="/checkout">
        <button
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            background: "#6366f1",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Proceed to Checkout
        </button>
      </Link>

    </div>

  );
}

export default Cart;