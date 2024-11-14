import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./Context";

function NewGroup() {
  const { onlineItems, offlineItems, setOnlineItems, setOfflineItems } =
    useContext(DataContext);
  console.log(onlineItems, offlineItems);

  const [newData, setNewData] = useState({
    date: "",
    group: "",
    place: "online" || "",
  });
  const [online, setOnline] = useState(true);

  const naviagte = useNavigate();

  const handleSelect = (e) => {
    const selectValue = e.target.value;
    setOnline(selectValue === "online");
    setNewData({ ...newData, group: selectValue });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newData);
    if (newData.group === "online") {
      setOnlineItems([...onlineItems, { name: newData.date }]);
    } else {
      setOfflineItems([
        ...offlineItems,
        { name: `${newData.date} ${newData.place}` },
      ]);
    }
    // setTimeout(() => {
    //     naviagte("/admin")
    // }, 1000);
  };
  return (
    <>
      <Helmet>
        <title>My Dashboard | New Group</title>
      </Helmet>
      <h1 className="text-center mt-5">Add New Group</h1>
      <form className="container d-lg-flex d-md-flex" onSubmit={handleSubmit}>
        <input
          type="date"
          placeholder="Group"
          className="form-control m-2"
          onChange={(e) => setNewData({ ...newData, date: e.target.value })}
        />
        <select
          className="form-select m-2 "
          onChange={handleSelect}
          value={online ? "online" : "offline"}
        >
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
        {!online && (
          <input
            type="text"
            placeholder="place"
            className="form-control m-2"
            onChange={(e) => setNewData({ ...newData, place: e.target.value })}
          />
        )}
      </form>
      <button className="btn btn-primary m-2" onClick={handleSubmit}>
        Create +
      </button>
    </>
  );
}

export default NewGroup;
