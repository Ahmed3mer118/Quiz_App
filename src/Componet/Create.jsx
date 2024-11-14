import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import  toast ,{ Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";


function Create() {
  const [student, setStudent] = useState({
    name: "",
    number: "",
    group: "",
    place: "",
    appreciation: "",
  });
  const naviagte = useNavigate();

  const handleSumbit = (e) => {
    e.preventDefault();
    if (
      student.name == "" &&
      student.number == "" &&
      student.group == "" &&
      student.place == "" &&
      student.appreciation == ""
    ) {
      toast.error("Error : Enter data")
      // alert("Error: enter data");
    } else {
      axios.post("http://localhost:3000/dataStudents", student).then(() => {
        setTimeout(() => {
          naviagte("/admin");
        }, 2000);
      });
      toast.success("Add New Studnet")
    }
  };
  return (
    <>
      <Toaster />
      <Helmet>
        <title> My Dashboard / Create</title>
      </Helmet>

      <form className="container login card p-4" onSubmit={handleSumbit}>
        <h1> Create New Student</h1>
        <input
          type="text"
          placeholder="Full Name"
          className="form-control  m-2"
          onChange={(e) => {
            setStudent({ ...student, name: e.target.value });
          }}
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="form-control  m-2"
          maxLength={12}
          onChange={(e) => {
            setStudent({ ...student, number: e.target.value });
          }}
        />
        <input
          type="date"
          placeholder="Group"
          className="form-control  m-2"
          
          onChange={(e) => {
            setStudent({ ...student, group: e.target.value });
          }}
        />
        <select
          className="form-select  m-2"
          aria-label="Default select example"
        
          onChange={(e) => {
            setStudent({ ...student, place: e.target.value });
          }}
        >
          <option value="online" >Online</option>
          <option value="offline">Offline</option>
        </select>
          <select
          className="form-select  m-2"
          aria-label="Default select example"
        
          onChange={(e) => {
            setStudent({ ...student, appreciation: e.target.value });
          }}
        >
          <option value="Excellent" >Excellent</option>
          <option value="Very Good">Very Good</option>
          <option value="Good">Good</option>
          <option value=""></option>
        </select>
        <button className="btn btn-primary m-2">Create</button>
      </form>
    </>
  );
}

export default Create;
