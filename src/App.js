import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Componentes/Home/Home";
import Blog from "./Componentes/Blog/Blog";
import Statistics from "./Componentes/Statistics/Statistics";
import Topics from "./Componentes/Topics/Topics";
import Main from "./layout/Main";
import Error from "./Componentes/Error-404/Error";
import QuizDetailsa from "./Componentes/QuizDetailsa/QuizDetailsa";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home></Home>,
        },
        {
          path: "/home",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
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
        {
          /* using ( : )quizId is parameter - it will be dynamic */
          path: "/quiz/:quizId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          element: <QuizDetailsa></QuizDetailsa>,
        },
      ],
    },
    {
      path: "*",
      element: <Error></Error>,
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
