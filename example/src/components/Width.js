import React from "react";
import { useWindowWidth } from "window-dimensions-hooks";

const Dimensions = () => {
  const width = useWindowWidth();
  return (
    <>
      <h1>
        <code>useWindowWidth()</code>
      </h1>
      <p>{width}px</p>
    </>
  );
};

export default Dimensions;
