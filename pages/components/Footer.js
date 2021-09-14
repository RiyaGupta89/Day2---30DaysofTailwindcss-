import React from "react";

function Footer() {
  return (
    <>
      <div className="flex w-11/12 justify-between items-center px-10 my-10 pb-6">
        <div>
          <h3 className="uppercase font-semibold mb-2">categories</h3>
          <p className="capitalize text-gray-600">First link</p>
          <p className="capitalize text-gray-600">Second link</p>
          <p className="capitalize text-gray-600">Third link</p>
        </div>
        <div>
          <h3 className="uppercase font-semibold mb-2">categories</h3>
          <p className="capitalize text-gray-600">First link</p>
          <p className="capitalize text-gray-600">Second link</p>
          <p className="capitalize text-gray-600">Third link</p>
        </div>
        <div>
          <h3 className="uppercase font-semibold mb-2">categories</h3>
          <p className="capitalize text-gray-600">First link</p>
          <p className="capitalize text-gray-600">Second link</p>
          <p className="capitalize text-gray-600">Third link</p>
        </div>
        <div>
          <h3 className="uppercase font-semibold mb-2">categories</h3>
          <p className="capitalize text-gray-600">First link</p>
          <p className="capitalize text-gray-600">Second link</p>
          <p className="capitalize text-gray-600">Third link</p>
        </div>
        <div>
          <h1>
            {" "}
            <div className="flex items-center mb-2">
              <span className="bg-red-600 rounded-full p-1 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ffffff"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </span>
              <span className="text-gray-500 font-mono font-normal uppercase text-2xl">
                Riya.
              </span>
            </div>
          </h1>
          <p className="capitalize text-gray-600">First link</p>
          <p className="capitalize text-gray-600">Second link</p>
          <p className="capitalize text-gray-600">Third link</p>
        </div>
      </div>
      <div className="bg-red-50 -mb-5 w-full">
      <div className=" flex items-center h-16 justify-between w-10/12 m-auto">
        <p className="text-center text-gray-600"> &copy; 2021 Riya. </p>
        <p className="text-center text-gray-600 flex items-center justify-center"> 
        <a href="https://github.com/RiyaGupta89" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" height="20" viewBox="0 0 24 24"><path fill="#808080" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/riyaaa/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#808080" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
        </a>
         </p>
      </div>
      </div>
    </>
  );
}

export default Footer;
