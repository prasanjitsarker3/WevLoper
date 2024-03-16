import { Outlet } from "react-router-dom";
import FooterSection from "../CustomPage/FooterSection";
import NavbarSection from "../CustomPage/NavbarSection";

const MainLayout = () => {
  return (
    <div className="">
      <NavbarSection />
      <Outlet />
      <FooterSection />
    </div>
  );
};

export default MainLayout;
