import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function Login() {
  const [dataUser, setData] = useState({ email: "", password: "" });
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      dataUser.email === storedUser.email &&
      dataUser.password === storedUser.password
    ) {
      localStorage.setItem("userLogin", JSON.stringify(dataUser));
      toast.success("Login successful");
      setLoading(true);
      setTimeout(() => {
        navigate("/quiz", { state: dataUser });
      }, 2000);
    } else {
      toast.error("Email or password is incorrect");
    }
  };

  return (
    <>
      <ToastContainer />
      {!loading ? (
        <div className="form">
          <form
            className="container border p-4 rounded"
            onSubmit={handleSubmit}
          >
            <h1 className="text-center m-3">Login</h1>
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
              onChange={(e) =>
                setData({ ...dataUser, password: e.target.value })
              }
            />
            <button className="btn btn-primary m-2 w-100" onClick={handleSubmit}>Login</button>
            <Link to={"/sign_up"} className="mt-4">
              Create Account
            </Link>
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

export default Login;
