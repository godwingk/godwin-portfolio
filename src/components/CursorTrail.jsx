import { useEffect, useState } from "react";

const CursorTrail = ({ mousePosition }) => {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const trail = {
      id: Date.now(),
      x: mousePosition.x,
      y: mousePosition.y,
    };

    setTrails((prev) => [...prev.slice(-10), trail]);

    const timer = setTimeout(() => {
      setTrails((prev) => prev.filter((t) => t.id !== trail.id));
    }, 1000);

    return () => clearTimeout(timer);
  }, [mousePosition]);

  return (
    <>
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: ((index + 1) / trails.length) * 0.5,
            animationDelay: `${index * 0.05}s`,
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
