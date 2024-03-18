import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Registro from "./components/Registro";
import { useSelector } from "react-redux";
import "./App.css";

const isAuthenticated = () => {
  const token = useSelector((state) => state.user.token)
  return token !== null;
  console.log("hola");
};

const PrivateRoute = ({ path, element }) => {
  console.log("isAuthenticated:", isAuthenticated);
  return (
    <Route
      path={path}
      element={isAuthenticated() ? element : <Navigate to="/login" replace />}
    />
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/2",
    element: <Home2 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Routes>
        <PrivateRoute path="/" element={<Home />} />
        <Route path="/2" element={<Home2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </RouterProvider>
  );
}

export default App;
