import { useState, useEffect } from "react";

// Hook to get the screen size
const useScreenSize = () => {
  // Set the initial screen size state to the current window size on load (in pixels) 🔥
  // this state will be the return value of the hook 🔥
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Add event listener to update the screen size when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
