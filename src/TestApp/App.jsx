import axios from "axios";
import React, { useEffect, useState } from "react";
import Data from "./Data.json";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  // const [newData, setNewData] = useState({ name: "" });

  const [search, setSearch] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    // setData(Data.DataStudents);
    axios
      .get("http://localhost:3001/data")
      .then((res) => setData(res.data.DataStudents))
      // .then((res) => console.log(res.data.DataStudents)
      
  },[]);
  const handleSearch = (e) => {
    const filteredItems = data.filter((item) =>
      item.name.toLowerCase().includes(search)
    );
    setTotal(filteredItems.length);
    setSearch(e.target.value);
  };
  const filterItems = data.filter((item) =>
    item.name.toLowerCase().includes(search)
  );
  const handleAddNew = () => {
    console.log(newData)
  };

  return (
    <div className="m-auto">
      <h1> Group: 23-6-2024 Nc Offline</h1>

      <input
        type="text"
        placeholder="Search By Name "
        value={search}
        onChange={handleSearch}
        className="m-2"
      />
      <button className="btn btn-primary" onClick={handleAddNew}>
        add
      </button>
      <table>
        <thead>
          <tr>
            <th className="border p-2 text-center">Timestamp</th>
            <th className="border p-2 text-center">Name</th>
            <th className="border p-2 text-center">Attendance</th>
          </tr>
        </thead>
        {filterItems ? (
          <tbody>
            {filterItems.map((item) => (
              <tr key={Math.random()}>
                <td className="border p-2">
                  <span>{item.timestamp}</span>
                </td>
                <td className="border p-2">
                  <h6>{item.name}</h6>
                </td>
                <td className="border p-2  text-center">
                  <span>{item.group}</span>
                </td>
              </tr>
            ))}

            <tr>
              <td>
                <h1>Attendance</h1>
              </td>
              <td></td>
              <td className="text-center">{total}</td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {data &&
              data.map((item) => (
                <tr key={Math.random()}>
                  <td className="border p-2">
                    <span>{item.timestamp}</span>
                  </td>
                  <td className="border p-2">
                    <h6>{item.name}</h6>
                  </td>
                  <td className="border p-2 ">
                    <span>{item.group}</span>
                  </td>
                </tr>
              ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default App;
