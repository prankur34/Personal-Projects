import React from "react";
import { socialLinks } from "../data/data";

function Footer() {
  return (
    <div>
      <footer class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col mt-auto">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Prankur Pandey</span>
          </a>
          <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            © 2022 —
            <a
              href="../images/profile-pic (1).png"
              class="text-gray-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @prankur34
            </a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {socialLinks.map((links) => (
              <div class="text-gray-400 w-5 h-5 cursor-pointer">
                <a href={links.link}>
                  <i class={links.emoji}></i>
                </a>
              </div>
            ))}
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
