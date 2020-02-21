import React from "react";
import { useWindowHeight } from "window-dimensions-hooks";

const Height = () => {
  const height = useWindowHeight();
  return (
    <>
      <h1>
        <code>useWindowHeight()</code>
      </h1>
      <p>{height}px</p>
    </>
  );
};

export default Height;
