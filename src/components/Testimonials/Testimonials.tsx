"use client";
import Image from "next/image";
import QuoteImage from "@/assets/Quote-image.png";

const testimonials = [
  {
    id: 1,
    name: "Cameron",
    role: "Web Designer",
    image:
      "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin iaculis nisl et neque sed fermentum sollicitudin lectus.",
    glowColor: "from-purple-500/20",
  },
  {
    id: 2,
    name: "Esther Howard",
    role: "Web Developer",
    image:
      "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "At viverra enim enim sed turpis orci cursus. Imperdiet eros mauris sed sodales nisi interdum ac. Eu congue quis egestas donec lectus",
    glowColor: "from-blue-500/20",
  },
  {
    id: 3,
    name: "Jenny Wilson",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "Sed ut diam amet accumsan in. Elementum lorem aliquam venenatis amet sit posuere sed sit. Aliquet suspendisse vitae placerat donec.",
    glowColor: "from-teal-500/20",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 bg-[#1a1625] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What our clients say
          </h2>
          <p className="text-[#FFFFFF] text-lg max-w-3xl mx-auto">
            Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae
            lobortis orci tincidunt facilisis. Pulvinar lacus ultricies turpis
            urna sapien.
          </p>
        </div>

        <div className="flex justify-center flex-col lg:flex-row gap-[30px] lg:gap-[100px] w-[100%] mx-auto mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`relative opacity-100 transition-opacity duration-300 lg:w-[350px]`}
            >
              <div
                className={`
                  hidden
                  lg:block  
                  absolute 
                  bottom-0 
                  left-[-5%]
                  top-[70%]
                  right-0
                  h-[100px] 
                  rounded-lg
                  w-[110%]
                  bg-gradient-to-r 
                  from-[#282D45] 
                  via-[#4162EC] 
                  via-[#8541EB] 
                  to-[#A550E2] 
                  backdrop-blur-lg
                `}
              />
              <div className="bg-[#13111c] rounded-xl p-8 relative h-[250px]">
                {/* Quote mark */}
                <div className="absolute top-8 right-8 text-6xl text-gray-700 font-serif">
                  <Image
                    src={QuoteImage}
                    alt="quote-mark"
                    height={50}
                    width={50}
                  />
                </div>

                {/* Content */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 relative z-10 text-sm">
                  {testimonial.quote}
                </p>

                {/* Gradient glow */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${testimonial.glowColor} to-transparent opacity-20 blur-xl rounded-b-xl`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
