import axios from "axios";
import React, { useEffect, useState } from "react";

function Search() {
  const [searhTag, setSearchTag] = useState([]);
  const [online, setOnline] = useState(true);
  const handleSearch = (e) => {
    const selectValue = e.target.value;
    console.log("done");
    setOnline(selectValue === "online");
    if (selectValue === "online") {
      axios.get("/test.json").then((res) => setSearchTag(res.data.data2online));
    } else {
      axios.get("/test.json").then((res) => setSearchTag(res.data.dataOffline));
    }
  };

  return (
    <>
      <form className="text-center  ">
        <h1>Search Student</h1>
        <div className=" d-lg-flex d-md-flex text-center ">
          <input
            type="text"
            placeholder="Search "
            className="form-control m-2 "
          />
          <select
            className="form-select m-2"
            value={online ? "online" : "offline"}
            onChange={handleSearch}
          >
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
          <button className="btn btn-warning m-2">Search</button>
        </div>
      </form>
      <table className="m-auto">
        <thead>
          <tr className="text-center">
            <th className="border p-2 ">M</th>
            {/* <th className="border p-2 ">ID</th> */}
            <th className="border p-2 ">Name</th>
            <th className="border p-2 ">Number</th>
            <th className="border p-2 ">Group</th>
            <th className="border p-2 ">Place</th>
            <th className="border p-2 ">Appreciation</th>
          </tr>
        </thead>
        <tbody>
          {searhTag.map((search, i) => (
            <tr key={search.id}>
              <td className="border p-2">{i + 1}</td>
              {/* <td className="border p-2">{std.id}</td>   */}
              <td className="border p-2">{search.name}</td>
              <td className="border p-2">{search.number}</td>
              <td className="border p-2">{search.group}</td>
              <td className="border p-2">{search.place}</td>
              <td className="border p-2">{search.appreciation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Search;
