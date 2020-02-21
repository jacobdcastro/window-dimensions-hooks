import * as React from "react";

const defaultState = { height: null, width: null };

const checkResizeType = (oldDim, newDim) => {
  if (oldDim.height !== newDim.height) {
    if (oldDim.width !== newDim.width) {
      return "xyChange";
    } else {
      return "yChange";
    }
  } else if (oldDim.width !== newDim.width) {
    return "xChange";
  } else {
    return "noChange";
  }
};

const getNewState = (state = defaultState, { resizeType, newDim }) => {
  switch (resizeType) {
    case "xyChange":
      return {
        ...newDim
      };
    case "yChange":
      return {
        ...state,
        height: newDim.height
      };
    case "xChange":
      return {
        ...state,
        width: newDim.width
      };
    case "noChange":
      return {
        ...state
      };
    default:
      return state;
  }
};

// custom hook
const useWindowDimensions = () => {
  const [dimensions, setDimensions] = React.useState(defaultState);

  // sets height when window is resized (from event listener)
  const handleWindowResize = () => {
    const newDim = {
      height: window.innerHeight,
      width: window.innerWidth
    };
    const resizeType = checkResizeType(dimensions, newDim);
    const newState = getNewState(dimensions, { resizeType, newDim });
    setDimensions(newState);
  };

  React.useEffect(() => {
    // only runs if in browser
    if (typeof window !== "undefined") {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });

      window.addEventListener("resize", handleWindowResize, true);

      return () => {
        window.removeEventListener("resize", handleWindowResize, true);
      };
    }
  }, []);

  return dimensions;
};

export default useWindowDimensions;
