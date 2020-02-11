import React from "react";
import { useWindowDimensions } from "window-dimensions-hooks";

const Dimensions = () => {
  const { height, width } = useWindowDimensions();
  return (
    <>
      <h1>
        <code>useWindowDimensions()</code>
      </h1>
      <p>
        {height}px x {width}px
      </p>
    </>
  );
};

export default Dimensions;
