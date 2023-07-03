import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/Home";
import ErrorScreen from "../screens/ErrorScreen";
import LoginScreen from "../screens/LoginScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
]);
