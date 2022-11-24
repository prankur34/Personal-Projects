import axios from "axios";
import React, { useEffect, useState } from "react";

function Blogpost({ blog }) {
  const {
    description,
    public_reactions_count,
    title,
    url,
    social_image,
    tags,
    reading_time_minutes,
  } = blog;
  return (
    <div className="">
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 p-4 mx-auto">
          <div class="flex flex-wrap w-full">
            <div class="p-4 md:w-1/3 ">
              <div class="h-full only-of-type:p-2 border-2 w-96 border-gray-800 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={social_image}
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    {tags}
                  </h2>
                  <h1 class="title-font text-lg font-medium text-white mb-3">
                    {title}
                  </h1>
                  <p class="leading-relaxed mb-3">{description}</p>
                  <div class="flex items-center flex-wrap ">
                    <a
                      class="text-green-400 inline-flex items-center md:mb-2 lg:mb-0"
                      href={url}
                    >
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>

                    <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                      <span class="material-icons">question_answer</span>

                      {public_reactions_count}
                    </span>
                    <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                      <span class="material-icons">schedule</span>
                      {reading_time_minutes}m
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogpost;
