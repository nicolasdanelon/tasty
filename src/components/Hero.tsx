import { useState, useRef, useEffect } from "react";

import data from "../data/restaurants.json";
import { h } from "preact";

const Hero = () => {
  return (
    <section class="bg-white ">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
            Reservá y valorizá tu mesa tokenizada
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            La manera de no quedarte sin mesa es descentralizandolas! Conectate
            directamente con otros comenzales.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Conectar wallet
          </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="header-food.png" alt="mockup"></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
