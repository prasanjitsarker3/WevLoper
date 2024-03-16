import { IconButton } from "@material-tailwind/react";
import { TiArrowRight } from "react-icons/ti";
import webLogo from "../../assets/Icon/coding.png";
import uiLogo from "../../assets/Icon/ui.png";
import digitalLogo from "../../assets/Icon/bullhorn.png";
import bussinessLogo from "../../assets/Icon/self-development.png";

const Services = () => {
  return (
    <div className="lg:px-24 md:px-16 px-4 bg-blue-gray-100">
      <div className=" pt-12 pb-4 space-y-2">
        <h1 className="text-3xl primaryColor uppercase poppins-bold">
          OUR Services
        </h1>
        <p className="poppins-light text-md">
          Delivering comprehensive solution for your online presence
        </p>
      </div>

      <div className=" grid md:grid-cols-4 gap-8 py-7">
        <div className="flex flex-col px-8 py-10  bg-white">
          <div className=" space-y-4 pb-5">
            <img className=" h-[64px] w-[64px]" src={webLogo} alt="" />
            <h1 className=" poppins-bold text-2xl text-black">
              WEBSITE DEVELOPMENT
            </h1>
            <p className=" poppins-light text-md">
              Creating a cutting-edge website that breeds modernism to your
              business goals
            </p>
          </div>
          <div className="mt-auto flex items-center gap-5 cursor-pointer">
            <IconButton className="rounded-full bg-blue-gray-700 hover:bg-[#019031]">
              <TiArrowRight className=" w-6 h-6" />
            </IconButton>
            <h1 className=" hover:text-[#019031]">Explore</h1>
          </div>
        </div>

        <div className="flex flex-col px-8 py-10 bg-white h-full">
          <div className=" space-y-4 pb-5">
            <img className=" h-[64px] w-[64px]" src={uiLogo} alt="" />
            <h1 className=" poppins-bold text-2xl text-black">UX/UI DESIGN</h1>
            <p className=" poppins-light text-md">
              COffering appealing and functional UI/UX design services that
              attract and engage users
            </p>
          </div>
          <div className=" flex mt-auto items-center gap-5 cursor-pointer">
            <IconButton className="rounded-full bg-blue-gray-700 hover:bg-[#019031] ">
              <TiArrowRight className=" w-6 h-6" />
            </IconButton>
            <h1 className=" hover:text-[#019031]">Explore</h1>
          </div>
        </div>

        <div className="flex flex-col px-8 py-10  bg-white">
          <div className=" space-y-4 pb-5">
            <img className=" h-[64px] w-[64px]" src={digitalLogo} alt="" />
            <h1 className="font-bold text-2xl text-black">Digital Marketing</h1>
            <p className="text-md text-gray-700">
              Elevate your online presence and reach your target audience
              effectively with our digital marketing strategies.
            </p>
          </div>
          <div className=" mt-auto flex items-center gap-5 cursor-pointer">
            <IconButton className="rounded-full bg-blue-gray-700 hover:bg-[#019031]">
              <TiArrowRight className=" w-6 h-6" />
            </IconButton>
            <h1 className=" hover:text-[#019031]">Explore</h1>
          </div>
        </div>
        <div className="flex flex-col px-8 py-10 bg-white">
          <div className=" space-y-4 pb-5">
            <img className=" h-[64px] w-[64px]" src={bussinessLogo} alt="" />
            <h1 className="font-bold text-2xl text-black">
              Business Development
            </h1>
            <p className="text-md text-gray-700">
              Drive growth and expand your business with our strategic business
              development solutions.
            </p>
          </div>
          <div className="mt-auto flex items-center gap-5 cursor-pointer">
            <IconButton className="rounded-full bg-blue-gray-700 hover:bg-[#019031]">
              <TiArrowRight className=" w-6 h-6" />
            </IconButton>
            <h1 className=" hover:text-[#019031]">Explore</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
