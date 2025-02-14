import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", { mobile, password });
    // Add authentication logic here
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "#0d0d0f",
      padding: "20px",
    }}>
      <div style={{
        width: "90%",
        maxWidth: "450px",
        background: "#1c1c1e",
        padding: "25px",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.1)",
        border: "1px solid #444",
      }}>
        <div>
          <h1 style={{ color: "white", fontSize: "28px", fontWeight: "bold" }}>Login</h1>
          <p style={{ color: "rgb(200, 190, 190)", fontSize: "14px" }}>
            Access Wealth with either your OneStep Passcode, OneStep Biometrics, or OneStep ID Verification
          </p>
        </div>

        <div>
          <h3 style={{ color: "white", fontSize: "20px", marginTop: "20px" }}>USE ONESTEP ID TO LOGIN</h3>
          <p style={{ color: "rgb(200, 190, 190)", fontSize: "14px" }}>
            Use the Onestep Verification to Log into your Account
          </p>
        </div>

        <div style={{ textAlign: "left", marginTop: "15px" }}>
          <label style={{ color: "white", fontWeight: "bold", fontSize: "14px" }}>Mobile Number</label>
          <input
            type="text"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              background: "#333",
              color: "white",
              outline: "none",
            }}
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <div style={{ textAlign: "left", marginTop: "15px" }}>
          <label style={{ color: "white", fontWeight: "bold", fontSize: "14px" }}>Password</label>
          <input
            type="password"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              background: "#333",
              color: "white",
              outline: "none",
            }}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          style={{
            background: "#007bff",
            border: "none",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background 0.3s",
            width: "100%",
            marginTop: "15px",
            color: "white",
          }}
          onClick={handleLogin}
        >
          Login
        </button>

        <div style={{ marginTop: "20px" }}>
          <p><b>KINDLY SELECT A MESSENGER BELOW</b></p>
          <Link to="/OneStep">
            <img
              src="https://cdn.pixabay.com/photo/2021/12/27/10/50/telegram-6896827_1280.png"
              alt="Messenger"
              style={{ width: "50px", height: "50px", cursor: "pointer" }}
            />
          </Link>
          <p style={{ textDecoration: "underline", cursor: "pointer", color: "white" }}>Recovery Center</p>
        </div>

        <div style={{ marginTop: "15px" }}>
          <p style={{ color: "white" }}>Having trouble using OneStep Verification?</p>
          <div>
            <button style={{
              background: "#d4af37",
              border: "none",
              fontWeight: "bold",
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background 0.3s",
              width: "100%",
              color: "black",
            }}>
              HELP CENTER
            </button>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p style={{ color: "white" }}>
          By using Login you agree to our <span style={{ textDecoration: "underline", cursor: "pointer" }}>Terms & Privacy Policy.</span>
        </p>
        <p style={{ color: "white" }}><i>Are you new Here?</i></p>
        <Link to="/signup">
          <button style={{
            background: "#d4af37",
            border: "none",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background 0.3s",
            width: "100%",
            color: "black",
          }}>
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
