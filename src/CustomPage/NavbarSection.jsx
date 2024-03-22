import {
  Navbar,
  Typography,
  IconButton,
  MobileNav,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
// import logo from "../assets/Image/wevloper-tp-150.png";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavbarSection = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul
      className={`mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center text-2xl lg:gap-6 ${
        scrolling | openNav ? "text-black" : "text-white font-bold "
      }`}
    >
      <Menu
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
      >
        <MenuHandler>
          <Typography className="flex items-center  text-lg cursor-pointer">
            Service
          </Typography>
        </MenuHandler>
        <MenuList className="bg-[#019031] border-none text-white">
          <MenuItem className="hover:bg-[#019031]">
            <Link to={"/webDev"} className="text-md">
              WEBSITE DEVELOPMENT
            </Link>
          </MenuItem>

          <MenuItem className="hover:bg-[#019031]">UX/UI DESIGN</MenuItem>
          <MenuItem className="hover:bg-[#019031]">Digital Marketing</MenuItem>
          <MenuItem className="hover:bg-[#019031]">
            Business Development
          </MenuItem>
        </MenuList>
      </Menu>

      <Typography as="li" className="p-1 ">
        <a href="#" className="flex items-center  text-lg">
          Account
        </a>
      </Typography>
      <Typography as="li" className="p-1 ">
        <a href="#" className="flex items-center  text-lg">
          Blocks
        </a>
      </Typography>
      <Typography as="li" className="p-1 ">
        <a href="#" className="flex items-center  text-lg">
          Docs
        </a>
      </Typography>
    </ul>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("Scroll: ", scrolling, openNav);

  return (
    <Navbar
      className={`sticky top-0 z-20 lg:px-24 md:px-16 px-4 py-3 max-w-full shadow-none border-none rounded-none pt-5 ${
        !scrolling
          ? " backdrop-blur-none backdrop-saturate-100 bg-opacity-0 "
          : "bg-white "
      } `}
    >
      <div className="flex items-center justify-between ">
        <Typography
          className={`mr-4 cursor-pointer text-2xl font-bold  primaryColor`}
        >
          Material
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
        </div>
        <div className={`flex gap-3 `}>
          <h1 className=" text-lg font-bold primaryColor flex items-center gap-2">
            <FaPhone />
            017834768558
          </h1>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6 text-black"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${scrolling ? "text-black" : "text-white"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav} className=" bg-white">
        {navList}
      </MobileNav>
    </Navbar>
  );
};

export default NavbarSection;
