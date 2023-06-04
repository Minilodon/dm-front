import React from "react";

function OwnedItems() {
  return (
    <div className="w-full h-full row-span-2 flex flex-col p-2">
      <span className="self-center">Itens na mochila</span>
      <ol className="w-full h-full border-black border overflow-y-auto"></ol>
    </div>
  );
}

export default OwnedItems;
