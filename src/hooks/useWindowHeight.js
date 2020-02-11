import * as React from "react";

// custom hook
const useWindowHeight = () => {
  const [height, setheight] = React.useState(null);

  // sets height when window is resized (from event listener)
  const handleWindowResize = () => setheight(window.innerHeight);

  React.useEffect(() => {
    // only runs if in browser
    if (typeof window !== "undefined") {
      setheight(window.innerHeight); // sets initial height
      window.addEventListener("resize", handleWindowResize, true);

      return () => {
        window.removeEventListener("resize", handleWindowResize, true);
      };
    }
  }, []);

  return height;
};

export default useWindowHeight;
