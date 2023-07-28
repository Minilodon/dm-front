import React from "react";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import { usePlayerContext } from "../Players/contexts/PlayerContext";
import PlayerInformation from "./components/PlayerInformation/PlayerInformation";
import Button from "../../components/Button/Button";
import { useDrawerContext } from "../../contexts/DrawerContext";
import AddItemDrawer from "./components/AddItemDrawer/AddItemDrawer";

function PlayerPage() {
  const { player } = usePlayerContext();
  const { openDrawer, setDrawerContent, setDrawerTitle } = useDrawerContext();
  const addItemToPlayer = () => {
    setDrawerTitle("Adicionar item");
    setDrawerContent(<AddItemDrawer player={player} />);
    openDrawer();
  };

  return (
    <Page>
      <Header
        title={player?.name || "ola"}
        goBackAlternative="/players"
        buttons={
          <div className="flex items-center gap-x-2">
            <Button label="Adicionar Item" onClick={addItemToPlayer} />
          </div>
        }
      />
      <PlayerInformation />
    </Page>
  );
}

export default PlayerPage;
