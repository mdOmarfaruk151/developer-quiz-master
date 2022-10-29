import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Componentes/Home/Home";
import Blog from "./Componentes/Blog/Blog";
import Statistics from "./Componentes/Statistics/Statistics";
import Topics from "./Componentes/Topics/Topics";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/topics",
          element: <Topics></Topics>,
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        
      ]
    },
   
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
