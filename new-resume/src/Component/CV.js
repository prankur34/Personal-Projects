import React from "react";
import { Link } from "react-router-dom";

function CV() {
  return (
    <div class="text-white bg-gray-600 body-font">
      <div class="max-w-screen-lg md:flex mx-auto">
        <div class="md:w-1/3 p-2 relative">
          <div class="md:fixed">
            <div class="md:block">
              <img
                class="h-32 w-32 rounded-full mx-auto "
                src="https://raw.githubusercontent.com/prankur34/github-imagehosting/main/IMG_20210912_190440_805.jpg"
              />
              <div class="m-2 text-center justify-center items-center">
                <h1 class="text-2xl text-xl text-gray-800 font-bold">
                  Prankur Pandey
                </h1>
                <div class="md:text-lg text-gray-600">Software Engineer</div>
                <div class="text-gray-600 md:hidden ">
                  ( pprankur@gmail.com)
                </div>
              </div>
            </div>
            <div class="m-2 hidden md:block">
              <div class="my-5 text-lg text-white flex">
                <div class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20,4H6C4.897,4,4,4.897,4,6v5h2V8l6.4,4.8c0.178,0.133,0.389,0.2,0.6,0.2s0.422-0.067,0.6-0.2L20,8v9h-8v2h8 c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M13,10.75L6.666,6h12.668L13,10.75z" />
                    <path d="M2 12H9V14H2zM4 15H10V17H4zM7 18H11V20H7z" />
                  </svg>
                </div>
                pprankur@gmail.com
              </div>
              <div class="my-5 text-lg t text-white  flex">
                <div class="mr-2">
                  <svg
                    class="text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,14c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S9.794,14,12,14z M12,8c1.103,0,2,0.897,2,2s-0.897,2-2,2 s-2-0.897-2-2S10.897,8,12,8z" />
                    <path d="M11.42,21.814C11.594,21.938,11.797,22,12,22s0.406-0.062,0.58-0.186C12.884,21.599,20.029,16.44,20,10 c0-4.411-3.589-8-8-8S4,5.589,4,9.995C3.971,16.44,11.116,21.599,11.42,21.814z M12,4c3.309,0,6,2.691,6,6.005 c0.021,4.438-4.388,8.423-6,9.73C10.389,18.427,5.979,14.441,6,10C6,6.691,8.691,4,12,4z" />
                  </svg>
                </div>
                Satna, India
              </div>
              <a
                href="https://www.linkedin.com/in/prankur34"
                class="my-5 text-white text-lg  text-white  flex"
              >
                <div class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M8.339,18.337H5.667	v-8.59h2.672V18.337z M7.003,8.574c-0.856,0-1.548-0.694-1.548-1.548s0.691-1.548,1.548-1.548c0.854,0,1.548,0.693,1.548,1.548	S7.857,8.574,7.003,8.574z M18.338,18.337h-2.669V14.16c0-0.996-0.018-2.277-1.388-2.277c-1.39,0-1.601,1.086-1.601,2.207v4.248	h-2.667v-8.59h2.56v1.174h0.037c0.355-0.675,1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,4.092V18.337z" />
                  </svg>
                </div>
                LinkedIn
              </a>
            </div>
            <div class="mx-4 hidden md:block">
              <a
                href="mailto:pprankur@gmail.com"
                class="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out w-full py-2 text-white rounded text-base"
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
        <div class="md:w-2/3 p-2 w-full">
          <div class="mx-4 mb-6">
            <h1 class="mb-4 text-4xl text-gray-200  font-bold">Education</h1>
            <p class="text-lg text-gray-800">
              AKS UNIVERSITY - SATNA MP (2015-2019)
            </p>{" "}
            <p class="text-lg text-gray-800">
              B.Tech Computer Science & Engineering
            </p>
          </div>
          <div class="mx-4">
            <h1 class="mb-4 text-4xl text-gray-200  font-bold">Experience</h1>
            <ul>
              <li class="mb-4">
                <h2 class="text-2xl font-medium text-gray-800">
                  Open Source Contributor at Real Dev Squad
                </h2>
                <div class="mt-1">
                  <div>
                    <i class="bx bx-buildings"></i>
                    <ul>
                      <li>
                        {" "}
                        <small class="text-base text-gray-800">
                          - Translated the Figma designs and wire frames by
                          converting them into high-quality code, using HTML,
                          CSS, JavaScript, and ReactJS, Designed and Developed
                          5+ personal projects.
                        </small>
                      </li>{" "}
                      <li>
                        {" "}
                        <small class="text-base text-gray-800">
                          - Integrated the RestAPI’s to make features
                        </small>
                      </li>{" "}
                      <li>
                        {" "}
                        <small class="text-base text-gray-800">
                          - Created 1600+ GitHub commits, Reviewed 145+ GitHub
                          PRs and Raised 95+ PRs in all projects.
                        </small>
                      </li>
                      <li>
                        {" "}
                        <small class="text-base text-gray-800">
                          - Actively Contributing to the open-source products
                          which are currently used by 200+ developers.
                        </small>
                      </li>
                      <li>
                        {" "}
                        <small class="text-base text-gray-800">
                          – Writing Technical Blogs on technology at
                          <Link to="/blogs">
                            <span>Prankur's Blog</span>
                          </Link>
                        </small>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <i class="bx bx-calendar text-sm"></i>
                    <small class="text-sm text-gray-200">
                      October 2021 - Present{" "}
                    </small>
                  </div>
                </div>
              </li>

              <li class="mb-4">
                <h2 class="text-2xl font-medium text-gray-800">
                  Jr Software Engineer - Taritas Software Solutions
                </h2>
                <div class="mt-1">
                  <div>
                    <i class="bx bx-buildings"></i>
                    <ul>
                      <li>
                        {" "}
                        <small class="text-base text-gray-800">
                          – Implemented an entire new QA Pipeline for an
                          upcoming product.
                        </small>
                      </li>
                      <li>
                        {" "}
                        <small class="text-base text-gray-800">
                          - Designed ,Developed and Executed the test cases and
                          identified the bugs in pre-existing products.
                        </small>
                      </li>
                      <li>
                        {" "}
                        <small class="text-base text-gray-800">
                          - Tested the application on functional and GUI point
                          (iOS-Android) platforms.
                        </small>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <i class="bx bx-calendar text-sm"></i>
                    <small class="text-sm text-gray-200">
                      Jan 2020 - July -2020{" "}
                    </small>
                  </div>
                </div>
              </li>
              <li class="mb-4">
                <h2 class="text-2xl font-medium text-gray-800">
                  Software Engineer (Intern) - Mplify Technologies
                </h2>
                <div class="mt-1">
                  <div>
                    <i class="bx bx-buildings"></i>
                    <ul>
                      <li>
                        {" "}
                        <small class="text-base text-gray-800">
                          – Performed exploratory, functional, and GUI testing
                          on the 3+ Applications on Web and Mobile (iOS-Android)
                          platforms.
                        </small>
                      </li>{" "}
                      <li>
                        {" "}
                        <small class="text-base text-gray-800">
                          – Wrote and executed 150+ test cases for UI,
                          Functional and Regression testing . wrote 50+
                          automation testing scripts.
                        </small>
                      </li>{" "}
                      <li>
                        {" "}
                        <small class="text-base text-gray-800">
                          – Identified , logged and Re-tested the 40+ defects
                          across the products while strictly following the STLC
                          and SDLC cycle.
                        </small>
                      </li>{" "}
                    </ul>
                  </div>
                  <div>
                    <i class="bx bx-calendar text-sm"></i>
                    <small class="text-sm text-gray-200">
                      June 2019 -Dec 2019{" "}
                    </small>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="mx-4">
            <h1 class="mb-4 text-4xl text-gray-200 font-bold">Projects</h1>
            <ul>
              <li class="mb-6 flex flex-wrap">
                <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium text-black bg-gray-200">
                  <Link to="/projects">All the Projects are Listed Here</Link>
                </span>
              </li>
            </ul>
          </div>
          <div class="mx-4">
            <h1 class="mb-4 text-4xl text-gray-200 font-bold">Skill</h1>
            <ul>
              <li class="mb-6 flex flex-wrap">
                <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium text-black bg-gray-200">
                  HTML
                </span>
                <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium text-black bg-gray-200">
                  CSS
                </span>
                <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium text-black bg-gray-200">
                  JavaScript
                </span>
                <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium text-black bg-gray-200">
                  React JS
                </span>
                <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium text-black bg-gray-200">
                  Tailwindcss/Bootstrap
                </span>
                <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium text-black bg-gray-200">
                  NodeJS
                </span>{" "}
                <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium text-black bg-gray-200">
                  ExpressJS
                </span>
                <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium text-black bg-gray-200">
                  Sass/Scss
                </span>{" "}
                <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium text-black bg-gray-200">
                  Technical Writing
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
