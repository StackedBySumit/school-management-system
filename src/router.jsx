import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import Teacher from "./pages/Teacher";
import Student from "./pages/Student";
import App from "./App";
// import TeachersList from "./list/TeachersList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 !! PAGE NOT FOUND</h1>,
    children: [
      {
        path: "admin",
        element: <Admin></Admin>,
      },
      {
        path: "student",
        element: <Student />,
      },
      {
        path: "teacher",
        element: <Teacher />,
      },
      // {
      //   path: "/list/teachers",
      //   element: <TeachersList />,
      // },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },
  
]);

export default router;
