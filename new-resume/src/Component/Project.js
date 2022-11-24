import React from "react";

function Project({ project }) {
  const { description, name, html_url, homepage } = project;
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 p-4 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3 ">
              <div class="h-full border-2 w-96 border-gray-800 rounded-lg overflow-hidden">
                <div class="p-6 h-60">
                  <h1 class="title-font text-lg font-medium text-white mb-3">
                    {name}
                  </h1>
                  <p class="leading-relaxed mb-3">{description}</p>
                  <div class="flex items-center flex-wrap justify-left ">
                    <a
                      class="text-green-400 inline-flex items-center md:mb-2 lg:mb-0"
                      href={html_url}
                    >
                      Code
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
                    <a
                      class="text-green-400 inline-flex items-center ml-12 md:mb-2 lg:mb-0"
                      href={homepage}
                    >
                      Live Link
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

export default Project;
