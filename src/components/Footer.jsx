import {
  FaFacebookF,
  FaTwitter,
  FaRss,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-cyan-500 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        {/* Copyright */}

        <div className="mb-6 md:mb-0">
          <p className="text-white text-xl">
            © 2014 OnePager, All Rights Reserved
          </p>
        </div>

        {/* Social Icons */}

        <div className="flex items-center gap-5">

          <a
            href="#"
            className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-white text-3xl transition duration-300 hover:bg-white hover:text-cyan-500"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-white text-3xl transition duration-300 hover:bg-white hover:text-cyan-500"
          >
            <FaTwitter />
          </a>

          <a
            href="#"
            className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-white text-3xl transition duration-300 hover:bg-white hover:text-cyan-500"
          >
            <FaRss />
          </a>

          <a
            href="#"
            className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-white text-3xl transition duration-300 hover:bg-white hover:text-cyan-500"
          >
            <FaGooglePlusG />
          </a>

          <a
            href="#"
            className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-white text-3xl transition duration-300 hover:bg-white hover:text-cyan-500"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="#"
            className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-white text-3xl transition duration-300 hover:bg-white hover:text-cyan-500"
          >
            <FaPinterestP />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;