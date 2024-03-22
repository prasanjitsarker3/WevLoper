import { FaAngleRight } from "react-icons/fa6";
import webdev1 from "../assets/Image/webDev1.jpg";
import { Link } from "react-router-dom";
import WebWork from "../components/Web/WebWork";
import WordPress from "../components/Web/WordPress";
const WebDevelopment = () => {
  return (
    <div>
      <div className="px-4 h-[100vh] -mt-16 relative">
        <img className="h-full w-full" src={webdev1} alt="" />
        <div className="absolute inset-x-0 bottom-0 flex justify-center items-center text-center text-white">
          <div className="md:w-1/2 h-full space-y-5 -mt-52 p-12 lg:px-24 md:px-16 bottom-0 bg-white bg-opacity-50 rounded-md  backdrop-blur-lg backdrop-filter flex flex-col justify-center items-center">
            <div className=" flex items-center gap-3">
              <Link to="/" className="text-xl flex items-center">
                Home <FaAngleRight className="primaryColor" />
              </Link>

              <h1 className="text-xl  ">Website Development</h1>
            </div>
            <h2 className="text-xl lg:text-2xl poppins-semibold primaryColor ">
              MAKING YOUR BUSINESS FUTURE-READY
            </h2>
          </div>
        </div>
      </div>

      {/* Web Working Section */}
      <WebWork />
      <WordPress />
    </div>
  );
};

export default WebDevelopment;
