import React from "react";
import { getModFromAttributes } from "../../../../../../../../../helpers/get-mod-from-attributes";

interface AttributeValuesProps {
  attributeValue: number | undefined;
  attributeName: string;
}
function AttributeValues(props: AttributeValuesProps) {
  const { attributeName, attributeValue } = props;
  const attributeMod = getModFromAttributes(attributeValue);

  return (
    <div className="flex items-center ">
      <div className="flex-1 flex items-center justify-between">
        <span>{attributeName}:</span>{" "}
        <span className="mr-2">{attributeValue}</span>
      </div>
      <div className="flex-1 flex items-center justify-between">
        <span>Modificador:</span>{" "}
        <span>{attributeMod >= 0 ? `+${attributeMod}` : attributeMod}</span>
      </div>
    </div>
  );
}

export default AttributeValues;
