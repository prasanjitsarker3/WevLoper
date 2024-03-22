import webDev2 from "../../assets/Image/webDev3.jpg";
import { DiUikit } from "react-icons/di";
import { BsCodeSquare } from "react-icons/bs";
import { MdOutlineContentPasteGo } from "react-icons/md";
import { BiLogoWordpress, BiSupport } from "react-icons/bi";
import { Button } from "@material-tailwind/react";

const WordPress = () => {
  return (
    <div className="lg:px-24 md:px-16 px-4 py-12">
      <div className="w-full h-full">
        <img className="w-full h-[500px]" src={webDev2} alt="" />
        <div className="w-full flex flex-col md:flex-row justify-between -mt-32 ">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="bg-gray-100  space-y-4 py-14 px-16 text-lg">
              <h1 className=" flex items-center gap-3">
                {" "}
                <DiUikit className=" primaryColor h-6 w-6" />
                Theme Development
              </h1>
              <hr className="border-t-2 border-gray-700 w-full" />
              <h1 className=" flex items-center gap-3">
                <BsCodeSquare className=" primaryColor h-5 w-5" />
                Plug-In Development
              </h1>
              <hr className="border-t-2 border-gray-700 w-full" />

              <h1 className=" flex items-center gap-3">
                <MdOutlineContentPasteGo className=" primaryColor h-6 w-6" />
                WooCommerce Development
              </h1>
              <hr className="border-t-2 border-gray-700 w-full" />

              <h1 className=" flex items-center gap-3">
                <BiLogoWordpress className=" primaryColor h-6 w-6" />
                Wordpress Migration
              </h1>
              <hr className="border-t-2 border-gray-700 w-full" />
              <h1 className=" flex items-center gap-3">
                <BiSupport className=" primaryColor h-6 w-6" /> Maintenance &
                Support
              </h1>
              <hr className="border-t-2 border-gray-700 w-full" />
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2 hover:bg-[#019031] hover:text-white"
              >
                Explore Service
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
            <div className="space-y-8 text-center md:text-left">
              <h1 className="text-3xl text-white poppins-semibold ">
                WORDPRESS DEVELOPMENT
              </h1>
              <p className="text-lg poppins-regular text-black text-justify">
                To power up your company’s website, share your requirements with
                our WordPress experts and get your site delivered in days..
              </p>
              <p className="text-lg poppins-regular text-black">
                We have established ourselves as a significant WordPress
                development company in Bangladesh and around the world, with
                over a decade of experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordPress;
