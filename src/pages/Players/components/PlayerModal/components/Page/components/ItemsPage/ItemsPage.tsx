import clsx from "clsx";
import React from "react";

interface ItemsPageProps {
  currentPage: number;
}

function ItemsPage(props: ItemsPageProps) {
  const { currentPage } = props;
  return (
    <div
      className={clsx(
        "absolute top-0 right-0 bg-green-200 w-full h-full transition",
        currentPage === 1 ? "translate-x-[calc(100%+12px)]" : "translate-x-0"
      )}
    ></div>
  );
}

export default ItemsPage;
