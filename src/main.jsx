import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import data from "../data.json";
import RootLayout from "./components/layout/RootLayout.jsx";
import PaintingInfo from "./components/pages/PaintingInfo.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "paintinginfo/:id",
        element: <PaintingInfo />,
        loader: ({ params }) => {
          const painting = data.find((p) => p.id === params.id);

          if (!painting) {
            throw new Response("Not Found", { status: 404 });
          }

          return painting;
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
