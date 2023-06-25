import React from "react";
import Page from "../../../components/Page/Page";
import Header from "../../../components/Header/Header";
import PlayersList from "./PlayersList";
import { useDrawerContext } from "../../../contexts/DrawerContext";
import AddNewPlayerForm from "./AddNewPlayerForm";

function PlayersListPage() {
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

export default PlayersListPage;
