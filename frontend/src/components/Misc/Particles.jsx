import "./Particles.css";
import React from "react";

export default function Particles() {
  return (
    <div
      className="particles"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="squares">
        {[...Array(40)].map((_, i) => (
          <div
            className="square"
            key={i}
            style={{
              height: `${Math.floor(Math.random() * 3)}em`,
              width: `${Math.floor(Math.random() * 3)}em`,
              animationDelay: `${Math.floor(Math.random() * 15)}s`,
              filter: `blur(${Math.floor(Math.random() * 3) + 1}px)`,
              animationDuration: `${Math.floor(Math.random() * 5) + 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}