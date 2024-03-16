import { useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      title: "Amazing Experience",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam mauris quis est tempus, vel cursus leo lacinia.",
      name: "John Doe",
      location: "New York, USA",
    },
    {
      id: 2,
      title: "Highly Recommended",
      text: "Sed aliquam mauris quis est tempus, vel cursus leo lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Alice Smith",
      location: "London, UK",
    },
    {
      id: 3,
      title: "Great Service",
      text: "Vel cursus leo lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam mauris quis est tempus.",
      name: "Robert Johnson",
      location: "Sydney, Australia",
    },
    {
      id: 4,
      title: "Awesome Team",
      text: "Consectetur adipiscing elit. Sed aliquam mauris quis est tempus, vel cursus leo lacinia. Lorem ipsum dolor sit amet.",
      name: "Emma Wilson",
      location: "Toronto, Canada",
    },
    {
      id: 5,
      title: "Excellent Work",
      text: "Sed aliquam mauris quis est tempus, vel cursus leo lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Michael Brown",
      location: "Paris, France",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex + 1) % testimonialData.length
    );
  };

  const previousTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialData.length) % testimonialData.length
    );
  };

  const currentTestimonial = testimonialData[currentTestimonialIndex];

  function StarIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 text-yellow-700"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  return (
    <div className="lg:px-24 md:px-16 px-4 py-12 bg-blue-gray-50 ">
      <div className=" flex justify-between items-center w-full">
        <div className="md:w-1/2 mx-auto">
          <div className=" w-[70%] bg-white  py-12 px-8">
            <div className=" flex items-center gap-0">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <h1 className="pl-1 flex items-center">
                Check out our 57+ review
              </h1>
            </div>
            <h1 className="text-2xl poppins-regular-italic primaryColor pt-2">
              WevLoper
            </h1>
            <h1 className="text-3xl poppins-semibold py-12 ">
              SOME OF OUR CLIENT’S FEEDBACK.
            </h1>

            <Button
              size="sm"
              variant="text"
              className="flex items-center gap-2 hover:bg-[#019031] hover:text-white"
            >
              See More
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

        {/* Testimonial */}
        <div className=" space-y-6 md:w-1/2 mx-auto">
          <RiDoubleQuotesL className=" h-6 w-6" />
          <h1 className=" text-3xl poppins-semibold primaryColor">
            {currentTestimonial.title}
          </h1>
          <p className=" poppins-light text-lg py-3">
            {currentTestimonial.text}
          </p>
          <div>
            <p className=" text-2xl poppins-semibold">
              {currentTestimonial.name}
            </p>
            <p className=" text-lg poppins-lights">
              {currentTestimonial.location}
            </p>
          </div>

          <div className=" flex gap-3 py-3">
            <IconButton
              onClick={previousTestimonial}
              variant="outlined"
              className="rounded-full hover:bg-[#019031] hover:border-none hover:text-white"
            >
              <FaArrowLeft className=" h-4 w-4" />
            </IconButton>
            <IconButton
              onClick={nextTestimonial}
              variant="outlined"
              className="rounded-full hover:bg-[#019031] hover:border-none hover:text-white"
            >
              <FaArrowRight className=" h-4 w-4" />
            </IconButton>
          </div>
          {/* <RiDoubleQuotesR className=" h-6 w-6 flex justify-end" /> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
