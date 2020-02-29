import * as React from "react";

// custom hook
const useWindowWidth = () => {
  const [width, setWidth] = React.useState(null);

  // sets width when window is resized (from event listener)
  const handleWindowResize = () => setWidth(window.innerWidth);

  React.useEffect(() => {
    // only runs if in browser
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth); // sets initial width
      window.addEventListener("resize", handleWindowResize, true);

      return () => {
        window.removeEventListener("resize", handleWindowResize, true);
      };
    }
  }, []);

  return width ? width : 0;
};

export default useWindowWidth;
