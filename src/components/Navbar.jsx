import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Button } from '../components';
import { useState } from "react";
import { MdOutlineBakeryDining } from "react-icons/md";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      {/* Contenedor principal de la barra de navegación */}
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Ícono de pan para móviles */}
        <Link to="/" className="hover:text-primary_light duration-300 block lg:hidden">
          <MdOutlineBakeryDining className="w-6 h-6 text-primary" aria-hidden="true" />
        </Link>

        {/* Título de escritorio */}
        <h2 className="text-3xl tracking-widest text-primary font-bold hidden lg:block">Crust & Crumbs</h2>

        {/* Botón de hamburguesa para móviles */}
        <button
          onClick={onToggle}
          className="lg:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Links y elementos de escritorio */}
        <div className="hidden lg:flex md:items-center md:gap-12">
          <div className="flex gap-4 md:gap-12 text-primary">
            <Link className="hover:text-primary_light duration-300" to="/">Home</Link>
            <Link className="hover:text-primary_light duration-300" to="/categories">Categories</Link>
            <Link className="hover:text-primary_light duration-300" to="/about">About Us</Link>
            <Link className="hover:text-primary_light duration-300" to="/contact">Contact Us</Link>
          </div>

          {/* Input de búsqueda y botón "Order Now" */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                placeholder="Search"
                type="text"
                name="search"
                id="search"
                className="border border-primary pl-10 pr-12 py-2 rounded-md w-full"
              />
              <div className="absolute inset-y-0 right-0 flex items-center bg-primary px-4 rounded-r-md">
                <FaSearch className="text-white" />
              </div>
            </div>
            <Button>{'Order Now'}</Button>
          </div>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg py-4">
          <div className="flex items-center flex-col gap-4 text-primary mt-[-60px]">
            <Link className="hover:text-primary_light duration-300" to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link className="hover:text-primary_light duration-300" to="/categories" onClick={() => setIsOpen(false)}>Categories</Link>
            <Link className="hover:text-primary_light duration-300" to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link className="hover:text-primary_light duration-300" to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>

            {/* Input de búsqueda y botón "Order Now" en móviles */}
            <div className="hidden lg:flex flex-col gap-4 mt-4 px-4">
              <div className="relative">
                <input
                  placeholder="Search"
                  type="text"
                  name="search"
                  id="search"
                  className="border border-primary pl-10 pr-12 py-2 rounded-md w-full"
                />
                <div className="absolute inset-y-0 right-0 flex items-center bg-primary px-4 rounded-r-md">
                  <FaSearch className="text-white" />
                </div>
              </div>
              <Button>{'Order Now'}</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
