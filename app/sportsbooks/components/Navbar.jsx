import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div
      class="flex flex-col items-center justify-center mt-32"
      x-cloak
      x-data="appData()"
      x-init="appInit()"
    >
      <div class="flex flex-col">
        <div class="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5 bg-blue-500"></div>
      </div>

      <nav
        class="flex justify-around py-4 bg-white/80
            backdrop-blur-md shadow-md w-full
            fixed top-0 left-0 right-0 z-10"
      >
        <div class="flex items-center">
          <a class="cursor-pointer">
            <h3 class="text-2xl font-medium text-blue-500">
              <Image
                class="h-10 object-cover"
                width={100}
                height={100}
                src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
                alt="Store Logo"
              />
            </h3>
          </a>
        </div>

        <div class="flex items-center space-x-5">
          <a
            class="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300"
          >
            Register
          </a>

          <a
            class="flex text-gray-600 
                    cursor-pointer transition-colors duration-300
                    font-semibold text-blue-600"
          >
            Login
          </a>
        </div>
      </nav>
    </div>
  );
}
