import clsx from "clsx";
import React from "react";

interface GeneralInfoPageProps {
  currentPage: number;
}

function GeneralInfoPage(props: GeneralInfoPageProps) {
  const { currentPage } = props;
  return (
    <div
      className={clsx(
        "absolute top-0 right-0 bg-yellow-100 w-full h-full transition ",
        currentPage === 1 ? "" : "-translate-x-[calc(100%+12px)]"
      )}
    ></div>
  );
}

export default GeneralInfoPage;
