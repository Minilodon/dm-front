import React from "react";
import Header from "../../components/Header/Header";
import PlayersList from "./components/PlayersList";
import { useDrawerContext } from "../../contexts/DrawerContext";
import AddNewPlayerForm from "./components/AddNewPlayerForm";
import Page from "../../components/Page/Page";

function PlayersPage() {
  const { openDrawer, setDrawerTitle, setDrawerContent } = useDrawerContext();

  const handleAddPlayer = () => {
    setDrawerTitle("Adicionar Jogador");
    openDrawer();
    setDrawerContent(<AddNewPlayerForm />);
  };

  return (
    <Page>
      <Header
        title="Jogadores"
        buttonLabel="Adicionar Jogador"
        buttonAction={handleAddPlayer}
      />
      <PlayersList />
    </Page>
  );
}

export default PlayersPage;
