import clsx from "clsx";
import React from "react";
import GeneralInfoPage from "./components/GeneralInfoPage/GeneralInfoPage";
import ItemsPage from "./components/ItemsPage/ItemsPage";

interface PageProps {
  currentPage: number;
}
function Page(props: PageProps) {
  const { currentPage } = props;
  return (
    <div className="w-[40vw] h-[calc(80vh)] relative flex ">
      <GeneralInfoPage currentPage={currentPage} />
      <ItemsPage currentPage={currentPage} />
    </div>
  );
}

export default Page;
