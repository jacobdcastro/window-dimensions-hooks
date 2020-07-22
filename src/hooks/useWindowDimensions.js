import * as React from "react";

const initialState = { height: null, width: null };

const dispatchAction = (oldDim, newDim, dispatch) => {
  if (oldDim.height !== newDim.height) {
    if (oldDim.width !== newDim.width) {
      dispatch({ type: "xyChange", newDim });
    } else {
      dispatch({ type: "yChange", height: newDim.height });
    }
  } else if (oldDim.width !== newDim.width) {
    dispatch({ type: "xChange", width: newDim.width });
  } else {
    dispatch({ type: "noChange" });
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "initialSize":
      return {
        height: action.height,
        width: action.width,
      };
    case "xyChange":
      return {
        ...action.newDim,
      };
    case "yChange":
      return {
        ...state,
        height: action.height,
      };
    case "xChange":
      return {
        ...state,
        width: action.width,
      };
    case "noChange":
      return {
        ...state,
      };
    default:
      throw new Error();
  }
};

// custom hook
const useWindowDimensions = () => {
  const [dimensions, dispatch] = React.useReducer(reducer, initialState);

  const handleWindowResize = () => {
    const newDim = { height: window.innerHeight, width: window.innerWidth };
    dispatchAction(dimensions, newDim, dispatch);
  };

  React.useEffect(() => {
    // only run if in browser
    if (typeof window !== "undefined") {
      // dispatch initial size on component mount
      dispatch({
        type: "initialSize",
        height: window.innerHeight,
        width: window.innerWidth,
      });
      window.addEventListener("resize", handleWindowResize, true);
      window.addEventListener("fullscreenchange", handleWindowResize, true);

      return () => {
        window.removeEventListener("resize", handleWindowResize, true);
        window.removeEventListener(
          "fullscreenchange",
          handleWindowResize,
          true
        );
      };
    }
  }, []);

  // check if dimensions key values are null before returning object
  // if null, return 0 for values (to prevent potential prop type errors)
  for (var key in dimensions) {
    if (dimensions[key] !== null) return dimensions;
    else return { height: 0, width: 0 };
  }
};

export default useWindowDimensions;
