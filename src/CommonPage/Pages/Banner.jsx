import video from "../../assets/Image/video (2160p).mp4";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="h-screen -mt-16 relative overflow-hidden">
      <video
        className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
        {/* Add more <source> elements for different video formats if needed */}
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex justify-start items-center h-full">
        <div className=" pl-24 space-y-5">
          <h1 className="text-white lg:text-4xl md:text-2xl text-xl">
            Grow Your Business & Online Presence with WEVLOPER
          </h1>
          <div className=" flex gap-3">
            <h1 className=" text-white lg:text-8xl md:text-4xl text-2xl">Re</h1>
            <div className=" primaryColor poppins-regular lg:text-8xl md:text-4xl text-2xl">
              <TypeAnimation
                sequence={[
                  "Imagin ...",
                  1000,
                  "Design ...",
                  1000,
                  "Build ...",
                  1000,
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 250 }}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
