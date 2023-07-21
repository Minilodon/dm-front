import React from "react";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import ArmorsList from "./components/ArmorsList/ArmorsList";
import WeaponsList from "./components/WeaponsList/WeaponsList";
import EquipmentList from "./components/EquipmentList/EquipmentList";
import Button from "../../components/Button/Button";
import { useDrawerContext } from "../../contexts/DrawerContext";
import AddArmorDrawer from "./components/ArmorsList/components/AddArmorDrawer";
import AddWeaponDrawer from "./components/WeaponsList/components/AddWeaponDrawer";
import AddEquipmentDrawer from "./components/EquipmentList/components/AddEquipmentDrawer";

function ItemsLists() {
  const { openDrawer, setDrawerContent, setDrawerTitle } = useDrawerContext();
  const addNewArmor = () => {
    setDrawerTitle("Nova armadura");
    setDrawerContent(<AddArmorDrawer />);
    openDrawer();
  };
  const addNewWeapon = () => {
    setDrawerTitle("Nova arma");
    setDrawerContent(<AddWeaponDrawer />);
    openDrawer();
  };
  const addNewEquipment = () => {
    setDrawerTitle("Novo equipamento");
    setDrawerContent(<AddEquipmentDrawer />);
    openDrawer();
  };
  return (
    <Page>
      <Header
        title="Itens"
        buttons={
          <div className="flex items-center gap-x-2">
            <Button label="Nova Armadura" onClick={addNewArmor} />
            <Button label="Nova Arma" onClick={addNewWeapon} />
            <Button label="Novo Equipamento" onClick={addNewEquipment} />
          </div>
        }
      />
      <div className="w-full h-full  grid grid-rows-1 grid-cols-3">
        <ArmorsList />
        <WeaponsList />
        <EquipmentList />
      </div>
    </Page>
  );
}

export default ItemsLists;
