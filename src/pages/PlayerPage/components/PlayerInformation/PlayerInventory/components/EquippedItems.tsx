import React from "react";

function EquippedItems() {
  return (
    <div className="w-full h-full flex flex-col p-2">
      <span className="self-center">Itens Equipados</span>
      <ol className="w-full h-full border border-black overflow-y-auto"></ol>
    </div>
  );
}

export default EquippedItems;
