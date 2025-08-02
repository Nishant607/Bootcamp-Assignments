import React, { useState } from "react";
import "./style.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="container">
      <div className="form-box">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button>{isLogin ? "Login" : "Sign Up"}</button>
        </form>
        <p>
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}
          <span onClick={toggleForm}>
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
