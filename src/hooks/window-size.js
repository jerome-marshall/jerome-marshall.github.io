import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    const updateSize = () => {
      if (typeof window !== `undefined`) {
        setSize([window.innerWidth, window.innerHeight]);
      }
    };
    if (typeof window !== `undefined`) {
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }
  }, []);
  return size;
};
