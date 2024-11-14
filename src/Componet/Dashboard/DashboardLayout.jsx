import React, { useContext, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Dashboard.css";
import { DataContext } from "./Context";

function DashboardLayout() {
  const [openTag, setOpenTag] = useState({
    online: true,
    offline: true,
    attecndace: true,
  });
  const { onlineItems, offlineItems } = useContext(DataContext);

  const handleOpen = (tag) => {
    // console.log("open");
    // setOpenTag(!openTag)
    setOpenTag((prevState) => ({
      ...prevState,
      [tag]: !prevState[tag],
    }));
  };
  return (
    <div className="row  ">
      <div className="col-lg-3 col-md-3 col dashboard-left">
        <ul>
          <li className="btn btn-warning text-dark">
            <Link to={"/admin/newGroup"} className="text-dark">
              New Group
            </Link>
          </li>
          <li>
            <button
              className="btn btn-warning text-dark  dropdown-toggle w-100 text-start "
              onClick={() => handleOpen("online")}
            >
              Online
            </button>
            <ul className={openTag.online ? "ulShow" : ""}>
              {onlineItems.map((item) => (
                <li key={item.id}>
                  <Link to={`/admin/${item.id}`}> {item.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <button
              className="btn btn-warning text-dark dropdown-toggle  w-100 text-start "
              onClick={() => handleOpen("offline")}
            >
              Offline
            </button>
            <ul className={openTag.offline ? "ulShow" : ""}>
              {offlineItems.map((item) => (
                <li key={item.id}>
                  <Link to={`/admin/${item.id}`}> {item.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <button
              className="btn btn-warning text-dark dropdown-toggle  w-100 text-start "
              onClick={() => handleOpen("attecndace")}
            >
              Attendace
            </button>
            <ul className={openTag.attecndace ? "ulShow" : ""}>
              <li>
                <Link to={""}>25-6-2024</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={"/admin/search"}>
              <button className="btn btn-warning text-dark w-100 text-start ">
                Search
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="col outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
