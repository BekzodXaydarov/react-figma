import { Destination, Hero, Navbar, Title } from "./components/ui";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Title text="Choose your" title="Destination" />
      <Destination />
    </>
  );
};

export default App;
