import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Looby from './pages/Looby';
import Mycontract from './pages/Mycontract';
import Myprofolio from './pages/Myprofolio';
import AddCase from './pages/AddCase';
import CaseDetail from './pages/CaseDetail';
import Login from './pages/Login';
import Register from './pages/Register';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Looby />,
  },
  {
    path: "/Looby",
    element: <Looby />,
  },
  {
    path: "/Mycontract",
    element: <Mycontract />,
  },
  {
    path: "/Myprofolio",
    element: <Myprofolio />,
  },
  {
    path: "/post/:id",
    element: <CaseDetail />,
  },
  {
    path: "/AddCase",
    element: <AddCase />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

]);

function App() {
  return (
    <div className="w-screen min-h-screen bg-yellow-800/5 text-yellow-900">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;