import React from "react";
import Typewriter from "typewriter-effect";
//Script Changes 2
function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
