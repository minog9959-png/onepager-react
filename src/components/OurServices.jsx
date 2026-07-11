import React from 'react'
import { services } from "./ServiceData";
import ServiceCard from "./ServiceCards";

const OurServices = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto text-center mt-15">

        <h2 className="portfolio-title text-5xl font-bold">
          OUR SERVICES
        </h2>

        <p className="mt-6 text-gray-500 text-2xl">
          This is Photoshop's version of Lorem Ipsum. Proin gravida
        </p>
  </div>
  
      <section className="max-w-7xl mx-auto py-24">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-16">

        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}

      </div>

    </section>
</>
  )

}

export default OurServices