import React from "react";
import { useWeaponsContext } from "../../contexts/WeaponsContext";
import Weapon from "./components/Weapons";

function WeaponsList() {
  const { weapons, loading } = useWeaponsContext();
  return (
    <div className="w-full h-full flex flex-col px-2">
      <span className="self-center">Armas</span>
      <ol className="border border-black w-full h-full bg-white">
        {loading ? (
          <div>Carregando...</div>
        ) : (
          weapons?.map((weapon, index) => (
            <Weapon weapon={weapon} key={index} />
          ))
        )}
      </ol>
    </div>
  );
}

export default WeaponsList;
