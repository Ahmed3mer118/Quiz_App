import React, { useEffect, useState } from "react";
import  toast ,{ Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer,  } from "react-toastify";

function Login() {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [ loading, setLoading] = useState(false)
  const naviagte = useNavigate();

  const handleSumbit = (e) => {
    e.preventDefault()
    if (
      login.email == "amer73090@gmail.com" &&
      login.password == "01020873873"
    ) {
        setLoading(true)
        toast.success("Successfully ")
        setTimeout(() => {
            
            naviagte("/admin");
            setLoading(false)
        }, 2000);
    } else {
             toast.error("Email or Password is not Correct")
    //   alert("Email or Password is not Correct");
    }
  };

  return (
    <>
    <Toaster />
    <form className="container m-auto login card p-4 " onSubmit={handleSumbit}>
      <h1 className="text-center">Login </h1>
      <input
        type="email"
        placeholder="Email.."
        className="form-control m-2"
        onChange={(e) => {
          setLogin({ ...login, email: e.target.value });
        }}
      />
      <input
        type="password"
        placeholder="Password"
        className="form-control m-2"
        onChange={(e) => {
          setLogin({ ...login, password: e.target.value });
        }}
      />

      <button className="btn btn-primary m-2">Sumbit</button>
    </form>
    {loading &&<h1 className="text-center m-2">Loading....</h1>}
    </>
  );
}

export default Login;
