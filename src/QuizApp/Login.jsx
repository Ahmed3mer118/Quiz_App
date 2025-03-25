import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [dataUser, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
    if (!localStorage.getItem("user")) {
      
      toast.custom("Please Enter Any Email")
    }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!dataUser.email || !dataUser.password) {
      toast.error("Please enter both email and password");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      dataUser.email === storedUser.email &&
      dataUser.password === storedUser.password
    ) {
      localStorage.setItem("userLogin", JSON.stringify(dataUser));
      toast.success("Login successful");
      setLoading(true);
      setTimeout(() => navigate("/quiz", { state: dataUser }), 2000);
    } else {
      toast.error("Email or password is incorrect");
    }
  };

  return (
    <>
      <Toaster position="top-center" />

      <div className="container d-flex justify-content-center align-items-center vh-100">
        <form
          className="border p-4 rounded shadow-lg w-50"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center mb-4">Login</h1>
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
            {loading ? "Logging in..." : "Login"}
          </button>
          <p className="text-center mt-3">
            Don't have an account? <Link to="/sign_up">Sign Up</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
