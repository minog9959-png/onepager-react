// import useState
import { useState } from "react";
import Swal from "sweetalert2";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaLink,
} from "react-icons/fa";

function Contact() {
  // create useState
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
  websiteLink: "",
});

// handle function:
const handleChange = (e) => {
  // Name field
  if (
    e.target.name === "name" &&
    !/^[A-Za-z\s]*$/.test(e.target.value)
  ) {
    return;
  }

  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

// Submit function
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://contact-backend-production-6272.up.railway.app/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: data.message,
        confirmButtonColor: "#06b6d4",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
        websiteLink: "",
      });

    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: data.message,
        confirmButtonColor: "#ef4444",
      });
    }

  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Unable to connect to the server.",
      confirmButtonColor: "#ef4444",
    });

    console.log(error);
  }
};

  return (
    <section
      id="contact"
      className="bg-[#262626] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold uppercase">
            Get In Touch!
          </h2>

          <p className="text-gray-300 mt-5 max-w-2xl mx-auto">
            This is Photoshop's version of Lorem Ipsum.
            Proin gravida nibh vel velit auctor aliquet.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <div>

            <h3 className="text-4xl mb-6">
              Contact Info
            </h3>

            <p className="text-gray-300 leading-8">
              Nam nec tellus a odio tincidunt auctor a ornare
              odio. Sed non mauris vitae erat consequat.
            </p>

            <p className="text-gray-300 leading-8 mt-6">
              Nullam ac urna eu felis dapibus condimentum sit
              amet a augue. Sed non neque elit.
            </p>

            <hr className="border-gray-700 my-8" />

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                <span>Lorem Ipsum Street</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-cyan-400 text-xl" />
                <span>+399 (500) 321 9548</span>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-xl" />
                <span>info@domain.com</span>
              </div>

            </div>

          </div>

          {/* Right */}

          <form onSubmit={handleSubmit}>

            <div className="grid md:grid-cols-2 gap-4">

              <div className="flex bg-white">

                <div className="w-16 flex items-center justify-center border-r">
                  <FaUser className="text-black" />
                </div>

                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 outline-none text-black"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>

              <textarea
                rows="5"
                placeholder="Message"
                className="bg-white text-black p-4 outline-none md:row-span-2"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <div className="flex bg-white">

                <div className="w-16 flex items-center justify-center border-r">
                  <FaEnvelope className="text-black" />
                </div>

                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full p-4 outline-none text-black"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>

              <div className="flex bg-white">

                <div className="w-16 flex items-center justify-center border-r">
                  <FaLink className="text-black" />
                </div>

                <input
                  type="text"
                  placeholder="Website"
                  className="w-full p-4 outline-none text-black"
                  name="websiteLink"
                  value={formData.websiteLink}
                  onChange={handleChange}
                />

              </div>
              <button type="submit"
                className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white font-semibold uppercase px-6 py-3 md:px-8 md:py-4 text-sm md:text-base rounded transition duration-300"
              >
                SEND MESSAGE
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;


