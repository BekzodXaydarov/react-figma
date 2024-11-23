import { useEffect } from "react";
import {
  Activity,
  Contact,
  Destination,
  Footer,
  Hero,
  Navbar,
  Photos,
  Review,
  Title,
  Tour,
} from "./components/ui";
import "aos/dist/aos.css";
import AOS from 'aos'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Title text="Choose your" title="Destination" />
      <Destination />
      <Title
        text="Travel by"
        title="Activity"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />
      <Activity />
      <Title
        style={{ marginTop: "76px" }}
        text="Popular"
        title="tour packages"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />
      <Tour />
      <Title
        style={{ marginTop: "76px" }}
        text="Best Traveler’s"
        title="Shared photos"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />
      <Photos />
      <Title
        style={{ marginTop: "76px" }}
        text="Review & Testimonials"
        title="top reviews for etour"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />
      <Review />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
