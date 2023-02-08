import React from "react";

type Props = {
  children: React.ReactNode;
};

const ContainerCenter = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-2">{props.children}</div>
  );
};

export default ContainerCenter;
