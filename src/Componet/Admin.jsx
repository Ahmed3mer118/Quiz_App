import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

function Admin() {
  const [showDataStudents, setShowDataStudents] = useState(false || []);
  const [showDelete, setShowDelete] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/dataStudents")
      .then((res) => {
        setShowDataStudents(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDeleteGrenal = (id) => {
    setStudentToDelete(id);
    setShowDelete(true);
  };
  
  const handleDelete = () => {

    if (studentToDelete) {
      axios
        .delete(`http://localhost:3000/dataStudents/${studentToDelete}`)
        .then(() => {
          setShowDataStudents(
            showDataStudents.filter((std) => std.id !== studentToDelete)
          );
          toast.success("Successfully  Delete Student");
          setShowDelete(false); // Close delete confirmation modal
          // toast.success("Deleted");
        })
      }
  
  };

  const handleHidden = () => {
    setShowDelete(false);
    setStudentToDelete(null); // Reset studentToDelete state
  };

  return (
    <div className="container">
      {showDelete && (
        <div className="border text-center p-2 position-fixed  w-100 bg-light m-auto" id="delete">
          <h1>You Sure Delete Student</h1>
          <button className="btn btn-success m-2" onClick={handleDelete}>
            Yes, I'm Sure
          </button>
          <button className="btn btn-danger m-2" onClick={handleHidden}>
            No, I'm Not Sure
          </button>
        </div>
      )}
      <Toaster position="top-right" reverseOrder={true} />

      <h1 className="text-center">Admin: Ahmed Amer</h1>
      <div className="d-flex  container m-auto">
        <Link to="/admin/create" className="create">
          <button className="btn btn-primary m-2">Create +</button>
        </Link>
        <input type="text" className="form-control w-50 m-auto" />
        <button className="btn btn-primary m-2">Search</button>
      </div>

      <table className="text-center m-auto">
        <thead>
          <tr>
            <th className="border p-2 ">ID</th>
            <th className="border p-2 ">Name</th>
            <th className="border p-2 ">Number</th>
            <th className="border p-2 ">Group</th>
            <th className="border p-2 ">Place</th>
            <th className="border p-2 ">Appreciation</th>
            {/* <th className="border p-2 ">Update</th> */}
            <th className="border p-2 ">Delete</th>
          </tr>
        </thead>
        <tbody>
          {showDataStudents.map((std, i) => (
            <tr key={Math.random()}>
              <td className="border p-2">{i + 1}</td>
              <td className="border p-2">{std.name}</td>
              <td className="border p-2">{std.number}</td>
              <td className="border p-2">{std.group}</td>
              <td className="border p-2">{std.place}</td>
              <td className="border p-2">{std.appreciation}</td>
              {/* <td className="border p-2"> */}
                
                {/* <Link to={`/admin/update/${std.id || i + 1}`}>
                  <button className="btn btn-success">Update</button>
                </Link> */}
              {/* </td> */}
              <td className="border p-2">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteGrenal(std.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showDataStudents.length === 0 && (
        <h1 className="text-center m-2"> No Students... </h1>
      )}
    </div>
  );
}

export default Admin;
