import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Company = () => {
  const [count, setCount] = useState(false);
  return (
    <div className="lg:px-24 md:px-16 px-4 flex md:flex-row flex-col justify-between items-center w-full py-12 bg-gradient-to-r from-[#050909] via-[#0b1816] to-[#050909] text-white border-none ">
      <div className=" space-y-12 md:w-1/2">
        <div>
          <ScrollTrigger
            onEnter={() => setCount(true)}
            onExit={() => setCount(false)}
          >
            <p className="text-8xl poppins-semibold">
              {count && <CountUp start={0} end={6} duration={2} delay={0} />} +
            </p>
          </ScrollTrigger>
          <h1 className=" poppins-regular pt-2">Completed Projects</h1>
        </div>
        <div className=" flex items-center gap-12">
          <div className=" space-y-3">
            <ScrollTrigger
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}
            >
              <p className="text-5xl poppins-semibold">
                {count && <CountUp start={0} end={8} duration={2} delay={0} />}{" "}
                +
              </p>
            </ScrollTrigger>
            <h1 className=" poppins-regular">Clients Worldwide</h1>
          </div>
          <div className=" space-y-3">
            <ScrollTrigger
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}
            >
              <p className="text-5xl poppins-semibold">
                {count && <CountUp start={0} end={2} duration={2} delay={0} />}{" "}
                +
              </p>
            </ScrollTrigger>
            <h1 className=" poppins-regular">Years of Experience</h1>
          </div>
        </div>
      </div>
      <div className=" md:w-1/2 space-y-4">
        <h1 className=" text-2xl poppins-semibold primaryColor">
          A results-driven company creating robust, unique and tailored Web and
          UI/Ux solutions
        </h1>
        <p className="text-md poppins-light text-justify">
          Dcastalia is a software development company in Bangladesh that started
          its journey back in 2009; with the aim to deliver personal, passionate
          and tailored services. Over a decade’s operation, we have marked a
          place of reliability and trustworthiness both nationally and
          internationally among our clients of different industries.
        </p>
        <p className="text-md poppins-light">
          Since our inception, we have been helping organizations with complete
          technological solutions consisting of services like software
          development, web design and development, technical support, graphic
          design and many others.
        </p>
      </div>
    </div>
  );
};

export default Company;
