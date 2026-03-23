import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [form, setForm] = useState({ email: "", username: "", password: "", confirmPassword: "" });  // ✅ added confirmPassword
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.password.length !== 8){
      alert("Password is not 8 in length idiot");
      return;
    }
    if(form.password !== form.confirmPassword){
      alert("Passwords do not match");
      return;
    }
    console.log("Sign Up submitted:", form);
  };

  return (
    <div className="home-page">
      <div className="left-side-column"></div>
      <div className="right-side-column"></div>
      <div className="connect-wrapper">
        <div className="connect-line"></div>
        <div className="connect-sign">
          <h1>Alasolis</h1>
        </div>
      </div>
      <div className="login-box">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Create Account</button>
        
      </div>
    </div>
  );
}

export default SignUp;