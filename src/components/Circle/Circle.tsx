import React from "react";

interface CircleProps {
  text: string;
}

function Circle(props: CircleProps) {
  const { text } = props;
  return (
    <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
      {text}
    </div>
  );
}

export default Circle;
