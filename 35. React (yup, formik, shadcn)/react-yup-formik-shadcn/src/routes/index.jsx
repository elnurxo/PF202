import ClientLayout from "../layout/ClientLayout";
import About from "../pages/client/About";
import AddCourse from "../pages/client/AddCourse";
import Contact from "../pages/client/Contact";
import CourseDetail from "../pages/client/CourseDetail";
import Courses from "../pages/client/Courses";
import Home from "../pages/client/Home";
import NotFound from "../pages/client/NotFound";

const ROUTES = [
  {
    element: <ClientLayout />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "courses/:id",
        element: <CourseDetail />,
      },
      {
        path: "add-course",
        element: <AddCourse />,
      },
    ],
  },
];

export default ROUTES;
