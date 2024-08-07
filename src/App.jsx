import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Links from "./pages/Links";
import Profile from "./pages/Profile";
import Preview from "./pages/Preview";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  {
    path: "/create",
    children: [
      { path: "links", element: <Links />, index: true },
      { path: "profile", element: <Profile /> },
    ],
  },

  { path: "/preview", element: <Preview /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
