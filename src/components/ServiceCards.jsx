const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <section id="services">
    <div className="flex items-start gap-6">
 
      <div
        className="w-35 h-24 bg-cyan-400 flex justify-center items-center"
        style={{
          clipPath: "polygon(28% 0%,100% 0%,72% 100%,0% 100%)",
        }}
      >
        <Icon className="text-white text-3xl" />
      </div>

      <div>

        <h3 className="text-3xl font-mono uppercase">
          {service.title}
        </h3>

   <p className="text-gray-400 text-[18px] leading-8 mt-3">
  Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.
</p>

      </div>

    </div>
    </section>
  );
};

export default ServiceCard;