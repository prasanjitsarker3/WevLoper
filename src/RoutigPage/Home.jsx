import Banner from "../CommonPage/Pages/Banner";
import Company from "../CommonPage/Pages/Company";
import OurClient from "../CommonPage/Pages/OurClient";
import Services from "../CommonPage/Pages/Services";
import Testimonial from "../CommonPage/Pages/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Company />
      <Services />
      <OurClient />
      <Testimonial />
    </div>
  );
};

export default Home;
