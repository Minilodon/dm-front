import React from "react";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import { usePlayerContext } from "../../contexts/PlayerContext";
import PlayerInformation from "./components/PlayerInformation/PlayerInformation";

function PlayerPage() {
  const { player, fetchingPlayer } = usePlayerContext();
  return (
    <Page>
      <Header
        title={fetchingPlayer ? "Carregando..." : player!.name}
        buttonLabel="Editar"
        goBackAlternative="/players"
      />
      <PlayerInformation />
    </Page>
  );
}

export default PlayerPage;
