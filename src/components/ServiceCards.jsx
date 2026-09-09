const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <section id="services">
    <div className="flex items-start gap-6">
 
      <div
        className="w-35 h-24 bg-cyan-400 flex justify-center items-center"
        style={{
          clipPath: "polygon(30% 0%,100% 0%,80% 100%,0% 100%)",
        }}
      >
        <Icon className="text-white text-3xl" />
      </div>

      <div>

        <h3 className="text-3xl font-mono uppercase">
          {service.title}
        </h3>

   <p className="text-gray-400 text-[18px] leading-8 mt-3">

    {service.description}
</p>

      </div>

    </div>
    </section>
  );
};

export default ServiceCard;