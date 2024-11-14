import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function SignUp() {
  const [dataUser, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataUser.name === "" || dataUser.email === "" || dataUser.password === "") {
      toast.error("Please fill all fields");
    } else {
      // Saving user data in localStorage
      localStorage.setItem("user", JSON.stringify(dataUser));
      setLoading(true);
      toast.success("Creating successful");
      setTimeout(() => {
        navigate("/", { state: dataUser });
      }, 2000);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />
      {!loading ? (
        <div className="form">
          <form className="container border p-4 rounded" onSubmit={handleSubmit}>
            <h1 className="text-center m-3">Sign Up</h1>
            <input
              type="text"
              placeholder="Name"
              className="m-2 form-control"
              onChange={(e) => setData({ ...dataUser, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="m-2 form-control"
              onChange={(e) => setData({ ...dataUser, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              className="m-2 form-control"
              onChange={(e) => setData({ ...dataUser, password: e.target.value })}
            />
            <button className="btn btn-primary m-2 w-100">Sign Up</button>
          </form>
        </div>
      ) : (
        <h1 className="text-center position-absolute top-50 start-50 translate-middle">
          Loading...
        </h1>
      )}
    </>
  );
}

export default SignUp;