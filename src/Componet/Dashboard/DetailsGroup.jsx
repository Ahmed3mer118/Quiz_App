import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function DetailsGroup() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const key = Math.round(Math.random());
    console.log(key);
    const AllDataOffine = [
      { data1offline: "2023-10-10" },
      { data2offline: "2024-2-23" },
    ];

    AllDataOffine.forEach(
      (item) => console.log(item)
      
    );
   

    axios.get("/test.json").then((res) => console.log(res.data.dataOffline));
  }, [location.pathname]);

  return (
    <>
      <h1 className="text-center">Data Students</h1>
      <table className="m-auto">
        <thead>
          <tr className="text-center">
            <th className="border p-2 ">M</th>
            <th className="border p-2 ">ID</th>
            <th className="border p-2 ">Name</th>
            <th className="border p-2 ">Number</th>
            <th className="border p-2 ">Group</th>
            <th className="border p-2 ">Place</th>
            <th className="border p-2 ">Appreciation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((std, i) => (
            <tr key={std.id}>
              <td className="border p-2">{i + 1}</td>
              <td className="border p-2">{std.id}</td>
              <td className="border p-2">{std.name}</td>
              <td className="border p-2">{std.number}</td>
              <td className="border p-2">{std.group}</td>
              <td className="border p-2">{std.place}</td>
              <td className="border p-2">{std.appreciation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading && <h1 className="text-center">Loading...</h1>}
    </>
  );
}

export default DetailsGroup;
