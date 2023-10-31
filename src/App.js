import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";

import "bootstrap/dist/css/bootstrap.min.css";

// Create a router instance. Using the `createBrowserRouter` function from the  `react-router-dom` package. V6
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    //  errorElement: <ErrorPage />, for error page
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <Homepage /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
