import React from "react";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import { usePlayerContext } from "../Players/contexts/PlayerContext";
import PlayerInformation from "./components/PlayerInformation/PlayerInformation";

function PlayerPage() {
  const { player } = usePlayerContext();
  return (
    <Page>
      <Header
        title={player?.name || "ola"}
        goBackAlternative="/players"
        buttonLabel="Editar"
        buttonAction={() => console.log()}
      />
      <PlayerInformation />
    </Page>
  );
}

export default PlayerPage;
