import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const [updateStudent, setUpdateStudent] = useState([]);
  const naviagte = useNavigate()
  console.log(id);
  
  useEffect(() => {
    axios.get(`http://localhost:3000/dataStudents/` + id ).then((res) => {
      //   console.log(res.data);
      setUpdateStudent(res.data);
    });
  }, [id]);
  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/dataStudents/` + id, updateStudent).then(()=>{
        toast.success("Update")
        setTimeout(() => {
            naviagte("/admin")
        }, 2000);
    });
  };
  return (
    <>
    <Toaster />
    <Helmet>
      <title>Update</title>
    </Helmet>
       <form className="container login card p-4" onSubmit={handleUpdate}>
        <h1> Update Student</h1>
        <input
          type="text"
          placeholder="Full Name"
          className="form-control  m-2"
          value={updateStudent.name || ""}
          onChange={(e) => {
            setUpdateStudent({ ...updateStudent, name: e.target.value });
          }}
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="form-control  m-2"
          value={updateStudent.number || ""}
          onChange={(e) => {
            setUpdateStudent({ ...updateStudent, number: e.target.value });
          }}
        />
        <input
          type="date"
          placeholder="Group"
          className="form-control  m-2"
          value={updateStudent.group || ""}
          onChange={(e) => {
            setUpdateStudent({ ...updateStudent, group: e.target.value });
          }}
        />
          <select
          className="form-select  m-2"
          aria-label="Default select example"
          onChange={(e) => {
            setUpdateStudent({ ...updateStudent, place: e.target.value });
          }}
          
        >
          <option value="online" > Online</option>
          <option value="offline"> Offline</option>
        </select>
     
           <select
          className="form-select  m-2"
          aria-label="Default select example"
          value={updateStudent.appreciation || ""}
          onChange={(e) => {
            setUpdateStudent({ ...updateStudent, appreciation: e.target.value });
          }}
        >
          <option value="Excellent">Excellent</option>
          <option value="Very Good">Very Good</option>
          <option value="Good">Good</option>
          <option value=""></option>
        </select>
        <button type="submit" className="btn btn-success m-2">Update</button>
      </form>
    </>
  );
}

export default Update;
