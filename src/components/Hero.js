import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <ReactTypingEffect
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            text={["BTB", "BTC", "SAAS"]}
            speed={100}
            eraseSpeed={100}
            typingDelay={200}
            eraseDelay={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
