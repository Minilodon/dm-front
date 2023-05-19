import clsx from "clsx";
import React from "react";
import GeneralInfoPage from "./GeneralInfoPage";

interface PageProps {
  currentPage: number;
}
function Page(props: PageProps) {
  const { currentPage } = props;
  return (
    <div className="w-[40vw] bg-red-100 h-[calc(80vh)] relative">
      <GeneralInfoPage currentPage={currentPage} />
      <div
        className={clsx(
          "absolute top-0 right-0 bg-green-200 w-full h-3 transition",
          currentPage === 1 ? "translate-x-[calc(100%+12px)]" : "translate-x-0"
        )}
      ></div>
    </div>
  );
}

export default Page;
