import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import DragonBall from './pages/DragonballPerson';
import PlanetsDragon from './pages/Planets';
import Transformacoes from './pages/TrasformationDragon';
import OrdemCronologica from './pages/OrdemCronologica';

const router = createBrowserRouter([
  {
    path: "/dragonbal",
    element: <DragonBall />,
  },
  {
    path: "/planetas",
    element: <PlanetsDragon />,
  },
  {
    path: "/transformacoes",
    element: <Transformacoes />,
  },
  {
    path: "/cronologia",
    element: <OrdemCronologica />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
