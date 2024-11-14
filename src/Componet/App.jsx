import React from "react";

import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Admin from "./Admin";
import Create from "./Create";
import Update from "./Update";
import Login from "./Login";
import { HelmetProvider } from "react-helmet-async";
import DashboardLayout from "./Dashboard/DashboardLayout";
import NewGroup from "./Dashboard/NewGroup";
import Dashboard from "./Dashboard/Dashboard";
import  DataProvider  from "./Dashboard/Context";
import Error from "./Dashboard/Error";
import DetailsGroup from "./Dashboard/DetailsGroup";
import Search from "./Dashboard/Search";
const helmetContext = {};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "newGroup",
        element: <NewGroup />,
      },
      {
        path: "/admin/:id",
        element: <DetailsGroup />,
      },
      {
        path: "/admin/search",
        element: <Search />,
      },
    ],
  },
  {
    path:"*",
    element: <Error />
  }
]);

function App() {
  return (
    <HelmetProvider context={helmetContext}>
      <DataProvider>
        {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/admin" element={<DashboardLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="newGroup" element={<NewGroup/>} />
          </Route>
          <Route path="/admin/create" element={<Create />} />
          <Route path="/admin/update/:id" element={<Update />} />
          </Routes>
      </BrowserRouter> */}
        <RouterProvider router={router} />
      </DataProvider>
    </HelmetProvider>
  );
}

export default App;
