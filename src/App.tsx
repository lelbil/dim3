import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PatientList from "./pages/PatientList";
import PatientDetails from "./pages/PatientDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/patients",
    element: <PatientList />,
  },
  {
    path: "/patient/:id",
    element: <PatientDetails />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
