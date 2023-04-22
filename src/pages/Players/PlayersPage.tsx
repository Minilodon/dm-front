import React from "react";
import Header from "../../components/Header/Header";
import PlayersList from "./components/PlayersList";
import { useDrawerContext } from "../../contexts/DrawerContext";
import AddNewPlayerForm from "./components/AddNewPlayerForm";
import { useGetPlayerByIdQuery } from "../../generated/graphql";

function PlayersPage() {
  const { openDrawer, setDrawerTitle, setDrawerContent } = useDrawerContext();
  const { data } = useGetPlayerByIdQuery({ variables: { id: 4 } });
  console.log(data);

  const handleAddPlayer = () => {
    setDrawerTitle("Adicionar Jogador");
    openDrawer();
    setDrawerContent(<AddNewPlayerForm />);
  };

  return (
    <div className="w-full h-full p-8 overflow-y-auto flex flex-col">
      <Header
        title="Jogadores"
        buttonLabel="Adicionar Jogador"
        buttonAction={handleAddPlayer}
      />
      <PlayersList />
    </div>
  );
}

export default PlayersPage;
