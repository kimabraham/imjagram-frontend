import App from "App";
import { createBrowserRouter } from "react-router-dom";
import Account from "routes/accounts";
import Join from "routes/accounts/join";
import LoginError from "routes/accounts/loginerror";
import Home from "routes/home";

/* */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "account",
        element: <Account />,
        children: [
          {
            path: "",
            element: <Join />,
          },
          {
            path: "join",
            element: <Join />,
          },
          {
            path: "login",
            element: <Home />,
          },
          {
            path: "password",
            element: <LoginError />,
          },
        ],
      },
    ],
  },
]);

export default router;
