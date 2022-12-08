import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Login from "../views/Login.js";
/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));
/***** Pages ****/
const Starter = lazy(() => import("../views/Starter.js"));
const CustomStock = lazy(() => import("../views/ui/CustomStock"));
const CustomUser = lazy(() => import("../views/ui/CustomUser"));
const ProjectTables = lazy(() => import("../views/ui/ProjectTable"));
const AddUser = lazy(() => import("../views/ui/AddUser"));
const AddStock = lazy(() => import("../views/ui/AddStock"));
const StockTable = lazy(() => import("../views/ui/StockTable"));
/*****Routes******/
const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/customstock", exact: true, element: <CustomStock /> },
      { path: "/customuser", exact: true, element: <CustomUser /> },
      { path: "/table", exact: true, element: <ProjectTables /> },
      { path: "/adduser", exact: true, element: <AddUser /> },
      { path: "/addstock", exact: true, element: <AddStock /> },
      { path: "/stocktable", exact: true, element: <StockTable /> },
    ],
  },
  {
    path: "login",
    element: <Login />
  },
];
export default ThemeRoutes;
