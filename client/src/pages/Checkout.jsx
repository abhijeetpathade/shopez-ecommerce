import { useCart } from "../contexts/CartContext";

function Checkout() {

  const { cart } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const delivery = 50;
  const total = subtotal + delivery;

  return (

    <div style={{padding:"40px",maxWidth:"900px",margin:"auto"}}>

      <h1>Checkout</h1>

      <div style={{display:"flex",gap:"40px",marginTop:"30px"}}>

        {/* Address Form */}
        <div style={{flex:1}}>

          <h3>Shipping Address</h3>

          <input placeholder="Full Name" style={inputStyle}/>
          <input placeholder="Email" style={inputStyle}/>
          <input placeholder="Phone Number" style={inputStyle}/>
          <input placeholder="Address" style={inputStyle}/>
          <input placeholder="City" style={inputStyle}/>
          <input placeholder="Pincode" style={inputStyle}/>

        </div>

        {/* Order Summary */}
        <div
          style={{
            width:"300px",
            padding:"20px",
            border:"1px solid #ddd",
            borderRadius:"10px",
            height:"fit-content"
          }}
        >

          <h3>Order Summary</h3>

          {cart.map(item => (
            <p key={item.id}>
              {item.name} × {item.qty}
            </p>
          ))}

          <hr/>

          <p>Subtotal: ₹{subtotal.toLocaleString("en-IN")}</p>

          <p>Delivery: ₹{delivery}</p>

          <h3>Total: ₹{total.toLocaleString("en-IN")}</h3>

          <button
            style={{
              marginTop:"20px",
              width:"100%",
              padding:"12px",
              background:"#6366f1",
              color:"#fff",
              border:"none",
              borderRadius:"8px",
              cursor:"pointer"
            }}
          >
            Place Order
          </button>

        </div>

      </div>

    </div>
  );
}

const inputStyle = {
  display:"block",
  width:"100%",
  marginTop:"10px",
  padding:"10px",
  border:"1px solid #ccc",
  borderRadius:"6px"
};

export default Checkout;