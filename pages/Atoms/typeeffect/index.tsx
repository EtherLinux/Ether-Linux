import React from "react";
import Typewriter from "typewriter-effect";

export default function TypeEffect() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString("Pwned The World")
          .pauseFor(2000)
          .deleteAll()
          .typeString("Have 100 penetration testing tools")
          .pauseFor(2000)
          .deleteAll()
          .typeString("Has a light Desktop Environment")
          .pauseFor(2000)
          .deleteAll()
          .typeString("Made in Indonesia")
          .pauseFor(2000)
          .deleteAll()
          .typeString("Pwned The World")
          .start();
      }}
    />
  );
}
