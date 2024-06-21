import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import password_icon from "../../assets/images/password.png";
import person_icon from "../../assets/images/person.png";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setMessage("login success");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="container">
      <form className="login-container" onSubmit={handleLogin}>
        <div className="header">LOGIN</div>
        <div className="input-group">
          <img src={person_icon} alt="username icon" />
          <span className="text">username: </span>
          <input
            className="input"
            type="text"
            placeholder="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <img src={password_icon} alt="password icon" />
          <span className="text">password: </span>
          <input
            className="input"
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <input className="button" type="submit" value="Login" />
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
export default Login;
