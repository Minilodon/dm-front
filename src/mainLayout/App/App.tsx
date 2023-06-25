import React from "react";
import {
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import PlayersPage from "../../pages/Players/PlayersPage";
import WidgetsPage from "../../pages/WidgetsPage/WidgetsPage";
import ItemsPage from "../../pages/ItemsPage/ItemsPage";
import MagicPage from "../../pages/MagicPage/MagicPage";
import PlayerPage from "../../pages/PlayerPage/PlayerPage";
import FeatsPage from "../../pages/FeatsPage/FeatsPage";
import MainLayout from "../MainLayout";
import PlayersListPage from "../../pages/Players/components/PlayersListPage";
import ItemsLists from "../../pages/ItemsPage/ItemsLists";
import SpellsList from "../../pages/MagicPage/SpellsList";
import FeatsList from "../../pages/FeatsPage/FeatsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "players",
        element: <PlayersPage />,
        children: [
          {
            index: true,
            element: <PlayersListPage />,
          },
          {
            path: "/players/:id",
            element: <PlayerPage />,
          },
        ],
      },
      {
        path: "/items",
        element: <ItemsPage />,
        children: [
          {
            index: true,
            element: <ItemsLists />,
          },
        ],
      },
      {
        path: "/spells",
        element: <MagicPage />,
        children: [
          {
            index: true,
            element: <SpellsList />,
          },
        ],
      },
      {
        path: "/feats",
        element: <FeatsPage />,
        children: [{ index: true, element: <FeatsList /> }],
      },
      {
        path: "/widgets",
        element: <WidgetsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
