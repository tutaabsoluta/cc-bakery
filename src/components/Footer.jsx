import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-orange-200 to-secondary container mx-auto py-8 mt-16">


        {/* Copyright and Socials */}
        <div className="md:flex items-center justify-between px-16">
          <div>
            <p className="text-xl text-center md:text-left">© 2024 Crust & Crumbs. All rights reserved.</p>
          </div>
          <div className="flex justify-center gap-5 mt-8 md:mt-0">
            <FaFacebook className="w-[30px] h-[30px]" />
            <FaTwitter className="w-[30px] h-[30px]" />
            <FaLinkedin className="w-[30px] h-[30px]" />
            <FaInstagram className="w-[30px] h-[30px]" />
          </div>
        </div>

    </footer>
  )
}
