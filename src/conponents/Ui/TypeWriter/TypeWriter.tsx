"use client";
import Typewriter from "typewriter-effect";
const TypeWriter = ({texts}:any) => {
  return (
    <Typewriter
      options={{
        strings: texts,
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypeWriter;
