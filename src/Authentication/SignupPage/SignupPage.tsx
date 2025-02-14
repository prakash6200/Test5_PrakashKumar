import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const SignupPage: React.FC = () => {
  return (
    <div style={{
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "100vh", 
      background: "#121214", 
      padding: "20px"
    }}>
      <div style={{
        width: "90%", 
        maxWidth: "600px", 
        background: "#1a1a1d", 
        padding: "20px", 
        borderRadius: "10px", 
        textAlign: "center", 
        border: "1px solid grey"
      }}>
        <h1 style={{ color: "white" }}>Sign Up</h1>
        <h3 style={{ color: "white" }}>Complete OneStep Verification</h3>
        <p style={{ color: "rgb(200, 190, 190)" }}>
          Complete the OneStep verification to proceed, if you don't have one already. It is important for account verification.
        </p>

        {/* Input Fields */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input type="text" placeholder="Username" style={inputStyle} />
          <input type="text" placeholder="Mobile" style={inputStyle} />
          <input type="email" placeholder="Email" style={inputStyle} />
          <input type="date" placeholder="Date of Birth" style={inputStyle} />
          <button style={buttonStyle}>Sign Up</button>
        </div>

        <p style={{ color: "white", marginTop: "20px", fontWeight: "bold" }}>KINDLY SELECT A MESSENGER BELOW</p>
        <Link to="/OneStep">
          <img src="https://cdn.pixabay.com/photo/2021/12/27/10/50/telegram-6896827_1280.png" 
               alt="Messenger" 
               style={{ width: "50px", cursor: "pointer" }} />
        </Link>

        <p style={{ color: "rgb(200, 190, 190)", marginTop: "20px" }}>
          Having trouble using OneStep Verification?
        </p>
        <button style={buttonStyle}>HELP CENTER</button>

        <p style={{ color: "rgb(200, 190, 190)", marginTop: "10px" }}>
          If you have not yet registered for the OneStep ID, go to the recovery center to use the Speed phrase recovery with your seed phrase to gain access into your account.
        </p>
      </div>

      <div style={{ textAlign: "center", marginTop: "20px", color: "rgb(200, 190, 190)" }}>
        <p>By using Login you agree to our <u>Terms & Privacy Policy</u>.</p>
      </div>
    </div>
  );
};

// Inline styles
const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  background: "#333",
  color: "white",
  outline: "none"
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  background: "#a18134",
  border: "none",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "10px",
  transition: "background 0.3s"
};

export default SignupPage;
