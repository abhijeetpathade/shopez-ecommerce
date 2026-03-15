import { useNavigate } from "react-router-dom";
import "./Auth.css";
import React, { useState } from "react";
function Auth() {

const [isLogin, setIsLogin] = useState(true);
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();

const handleRegister = async (e) => {

  e.preventDefault();

  const res = await fetch("http://localhost:8000/api/auth/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      username,
      email,
      password
    })
  });

  const data = await res.json();

  if(data.success){

    localStorage.setItem("token",data.token);

    navigate("/"); // redirect to home

  }else{
    alert("Registration failed");
  }

};

const handleLogin = async (e) => {

  e.preventDefault();

  const res = await fetch("http://localhost:8000/api/auth/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      email,
      password
    })
  });

  const data = await res.json();

  if(data.success){

    localStorage.setItem("token",data.token);

    navigate("/"); // redirect to home

  }else{
    alert("Login failed");
  }

};

return ( <div className="auth-container">


  <div className="auth-card">

    <div className="auth-left">
      <h2>{isLogin ? "Login" : "Register"}</h2>

      <p>
        {isLogin
          ? "Get access to your Orders, Wishlist and Recommendations"
          : "Create an account to start shopping on ShopEZ"}
      </p>
    </div>

    <div className="auth-right">

      <form
        className="auth-form"
        onSubmit={isLogin ? handleLogin : handleRegister}
      >

        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">
          {isLogin ? "Login" : "Register"}
        </button>

      </form>

      <p className="auth-toggle">
        {isLogin ? "New user?" : "Already have an account?"}
        <span onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? " Register here" : " Login here"}
        </span>
      </p>

    </div>

  </div>

</div>


);
}

export default Auth;
