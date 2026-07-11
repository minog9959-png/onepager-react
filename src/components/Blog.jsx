import {
  FaRegClock,
  FaRegComments,
} from "react-icons/fa";

import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";

function Blog() {

  const blogs = [
    {
      id: 1,
      image: image1,
      title: "Mobile Friendly Dashboard Now Launched!",
      date: "19 Oct",
      comments: 10,
    },
    {
      id: 2,
      image: image2,
      title: "Creative Logo Design Inspiration",
      date: "19 Oct",
      comments: 10,
    },
    {
      id: 3,
      image: image3,
      title: "Modern Business Card Design Ideas",
      date: "19 Oct",
      comments: 10,
    },
    {
      id: 4,
      image: image4,
      title: "Golden Gesture Branding Project",
      date: "19 Oct",
      comments: 10,
    },
  ];

  return (
    <section id="blog" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="bg-cyan-500 text-white px-4 py-2 uppercase tracking-wider">
            Latest News
          </span>

          <h2 className="text-5xl font-bold uppercase mt-5">
            Latest Blog
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {blogs.map((blog) => (

            <div
              key={blog.id}
              className="group"
            >

              <div className="overflow-hidden">

                <img
                  src={blog.image}
                  alt=""
                  className="w-full h-56 object-cover group-hover:scale-110 duration-500"
                />

              </div>

              {/* Date Box */}

              <div className="w-44 mx-auto -mt-8 relative z-10 bg-cyan-500 text-white py-3 flex justify-center gap-5 font-semibold">

                <span className="flex items-center gap-2">
                  <FaRegClock />
                  {blog.date}
                </span>

                <span className="flex items-center gap-2">
                  <FaRegComments />
                  {blog.comments}
                </span>

              </div>

              {/* Content */}

              <div className="text-center mt-8">

                <h3 className="text-3xl font-medium leading-10 hover:text-cyan-500 duration-300 cursor-pointer">

                  {blog.title}

                </h3>

                <hr className="my-6 text-gray-300"/>

                <p className="text-gray-500 leading-8">

                  Sed non mauris vitae erat consequat auctor eu in elit.
                  Class aptent taciti sociosqu ad litora torquent.

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Blog;