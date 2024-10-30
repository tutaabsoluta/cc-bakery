import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-orange-200 to-secondary container mx-auto h-[360px] mt-28">

      {/* Navigation */}
       <div className="flex justify-center gap-12 text-primary mb-24 pt-4">
          <Link className="hover:text-primary_light duration-300" to="/">Home</Link>
          <Link className="hover:text-primary_light duration-300" to="categories">Categories</Link>
          <Link className="hover:text-primary_light duration-300" to="about">About Us</Link>
          <Link className="hover:text-primary_light duration-300" to="contact">Contact Us</Link>
          <Link className="hover:text-primary_light duration-300" to="contact">Help</Link>
          <Link className="hover:text-primary_light duration-300" to="contact">Privacy</Link>
        </div>

        {/* Copy and Socials */}
        <div className="border-t-2 border-primary"></div>
        <div className="flex items-center justify-between px-16 mt-12">
          <div>
            <p className="text-xl">© 2024 Crust & Crumbs. All rights reserved.</p>
          </div>
          <div className="flex gap-5">
            <FaFacebook className="w-[30px] h-[30px]" />
            <FaTwitter className="w-[30px] h-[30px]" />
            <FaLinkedin className="w-[30px] h-[30px]" />
            <FaInstagram className="w-[30px] h-[30px]" />
          </div>
        </div>

    </footer>
  )
}
