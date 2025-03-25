import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [dataUser, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dataUser.name || !dataUser.email || !dataUser.password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      localStorage.setItem("user", JSON.stringify(dataUser));
      setLoading(true);
      toast.success("Account created successfully");
      setTimeout(() => navigate("/", { state: dataUser }), 2000);
    } catch (error) {
      toast.error("Error saving user data");
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <form
          className="border p-4 rounded shadow-lg w-50"
          onSubmit={handleSubmit}
          style={{minWidth:"70%"}}
        >
          <h1 className="text-center mb-4">Sign Up</h1>
          <input
            type="text"
            placeholder="Name"
            className="form-control mb-3"
            value={dataUser.name}
            onChange={(e) => setData({ ...dataUser, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="form-control mb-3"
            value={dataUser.email}
            onChange={(e) => setData({ ...dataUser, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3"
            value={dataUser.password}
            onChange={(e) => setData({ ...dataUser, password: e.target.value })}
          />
          <button className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignUp;
