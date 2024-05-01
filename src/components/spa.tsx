import { useEffect, useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface SpaServices {
  name: string;
  service_name: string;
  service_description: string;
  img: string;
}

export default function Spa() {
  const [services, setServices] = useState<null | SpaServices[]>();
  const [scrollPosition, setScrollPosition] = useState(0);

  const ref = useRef<null | HTMLDivElement>(null);

  //left right arrow display
  const handleScroll = () => {
    const newScrollLeft = ref.current?.scrollLeft;
    setScrollPosition(newScrollLeft || 0);
    console.log(scrollPosition);
  };

  // fetching the spa-services data
  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/spaServices");
        const SpaServices = await response.json();
        setServices(SpaServices);
      } catch (err) {
        console.log((err as Error).message);
      }
    };

    getServices();
  }, []);

  const scrollHorizontal = (direction: string) => {
    const slider = ref.current;
    if (!slider) return;
    if (direction === "left") {
    }
  };

  return (
    <div className="w-full px-[10%]">
      <h1>Guerlain Spa</h1>
      <img
        src="https://www.fairmont.com/assets/0/104/3225/3230/4116/4117/f37813bb-d70b-40a2-ae4e-428a65148a88.jpg"
        alt={"spa"}
        className="w-full"
      />
      <div className="w-[70%] shadow-lg mx-auto px-3">
        <h2> Guerlain Spa</h2>
        <div className="w-[60%] mx-auto">
          The Magic of Guerlain: In the world of fragrance and beauty, The House
          of Guerlain has a reputation of unparalleled devotion to luxury,
          sophistication and elegance. The spirit of discovery, handed down from
          generation to generation, complements Guerlain’s dedication to beauty.
          In 1939, Guerlain opened its first “Institut de Beauté” and invented
          an exclusive facial massage technique. Perfected over time, all the
          Guerlain facial massage techniques remain just as unique and exclusive
          today. Fittingly, Guerlain Spa massage therapists are each trained in
          the manner of Guerlain in Paris. In 1939, Guerlain created one of the
          first “Spas” in the world at 68, avenue des Champs-Elysées. It was
          during this period that the Guerlain massage method was born, which
          remains unique and exclusive today. It has been enriched with numerous
          exclusive treatment protocols, all with the aim of offering the best
          of beauty expertise and optimal effectiveness. The very essence of the
          Guerlain experience is to transform your beauty treatment into an
          event created for you and you alone – a real alchemy between our
          know-how and our beauty expertise.
        </div>
        <h2>Services: The Magic of Guerlain</h2>
        <div className="w-[60%] text-center mx-auto">
          Every treatment at our New York spa, located within The Plaza, is
          transformed into a unique and personal occasion, a moment created
          especially for you. Reflecting the essence of the Guerlain, the
          treatment becomes a beauty experience – the perfect union of effective
          know-how and aesthetic expertise. Our aestheticians begin each
          treatment with a systematic analysis and precise skin diagnosis to
          reveal your specific beauty and well-being profile. Understanding your
          essential concerns our beauty consultants can tailor a treatment from
          our spa menu according to your needs and expectations.
        </div>
      </div>

      {/* Spa servies  */}

      <div className="w-full relative">
        <FaChevronLeft
          className="absolute -left-10 top-[48%]"
          onClick={() => scrollHorizontal("left")}
        />
        <div
          id="slider"
          className="flex gap-10 w-full overflow-x-scroll scroll-smooth no-scrollbar"
          ref={ref}
          onScroll={handleScroll}
        >
          {services?.map((service) => (
            // service card
            <div className="w-[30%] flex-shrink-0">
              <img src={service.img} />
              <h4 className="font-bold text-xl font-Cormorant my-3">
                {service.service_name}
              </h4>
              <p className="text-sm ">{service.service_description}</p>
            </div>
          ))}
        </div>
        <FaChevronRight
          className="absolute -right-10 top-[48%]"
          onClick={() => scrollHorizontal("right")}
        />
      </div>
    </div>
  );
}
