"use client";

import { useEffect, useState } from "react";

const BlinkingCursor = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block w-3 h-5 bg-green-400 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};

export default BlinkingCursor;
