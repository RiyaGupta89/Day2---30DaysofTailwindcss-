const Navbar = () => {
  return (
    <>
      <header className="absolute top-0 flex justify-between w-11/12 h-24 items-center">
        <div className="flex items-center">
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
            <span className="text-gray-500 font-mono font-normal uppercase text-2xl">Riya.</span>
        </div>
        <div className="w-96 flex justify-around items-center">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#" className="bg-red-600 text-white py-2 px-7 rounded-sm hover:bg-red-400">Login</a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
