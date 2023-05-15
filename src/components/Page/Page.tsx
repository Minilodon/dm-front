import React, { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

function Page(props: PageProps) {
  const { children } = props;
  return (
    <div className="w-full h-full p-8 overflow-y-auto flex flex-col">
      {children}
    </div>
  );
}

export default Page;
