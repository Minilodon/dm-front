import React from "react";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import ArmorsList from "./components/ArmorsList/ArmorsList";
import WeaponsList from "./components/WeaponsList/WeaponsList";
import EquipmentList from "./components/EquipmentList/EquipmentList";

function ItemsPage() {
  return (
    <Page>
      <Header title="Itens" />
      <div className="w-full h-full  grid grid-rows-1 grid-cols-3">
        <ArmorsList />
        <WeaponsList />
        <EquipmentList />
      </div>
    </Page>
  );
}

export default ItemsPage;
