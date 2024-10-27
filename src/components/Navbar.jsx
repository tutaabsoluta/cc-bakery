import { Link } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";

export const Navbar = () => {
  return (
    <>
      <div className="container mx-auto flex justify-between items-center gap-12 mt-4 border-b pb-4">
        {/* Title */}
        <h2 className="text-3xl tracking-widest text-primary">Crust & Crumbs</h2>

        {/* Links */}
        <div className="flex gap-12 text-primary">
          <Link className="hover:text-primary_light duration-300" to="/">Home</Link>
          <Link className="hover:text-primary_light duration-300" to="categories">Categories</Link>
          <Link className="hover:text-primary_light duration-300" to="about">About Us</Link>
          <Link className="hover:text-primary_light duration-300" to="contact">Contact Us</Link>
        </div>

        {/* Input and Button Wrapper */}
        <div className="flex items-center gap-4">
          {/* Input */}
          <div className="relative">
            <input
              placeholder="Search"
              type="text"
              name="search"
              id="search"
              className="border border-primary pl-10 pr-12 py-3 rounded-md"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none bg-primary px-4 rounded-r-md">
              <FaSearch className="text-gray-400" />
            </div>
          </div>

          {/* Button */}
          <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary_light duration-300">
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};
