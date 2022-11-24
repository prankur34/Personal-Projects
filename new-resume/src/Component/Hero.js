import React from "react";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img
              class="object-cover object-center rounded h-96 w-96"
              alt="hero"
              src="https://raw.githubusercontent.com/prankur34/github-imagehosting/main/IMG_20210912_190440_805.jpg"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              I'm a
              <br class="hidden lg:inline-block" />
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .typeString("FrontEnd Developer / Engineer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Open Source Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Technical Writer ")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("UI Engineer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Freelancer")
                    .start();
                }}
              />
            </h1>
            <p class="mb-8 leading-relaxed">
              A FrontEnd Developer with a deep interest in Technology and
              Mathmatics.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Explore Projects
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
