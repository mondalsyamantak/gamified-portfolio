import { useState, useEffect } from "react";

export default function Typewriter({ children, speed = 50, className = "" }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(children.slice(0, i + 1));
      i++;
      if (i >= children.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [children, speed]);

  return <p className={`font-press-start text-white ${className}`}>{displayed}</p>;
}