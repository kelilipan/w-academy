import { Content } from "./components/Content";
import Navigation from "./components/Navigation";
import Header from "./components/Header";

const Details = () => {
  //@todo: use markdown renderer
  return (
    <div className="flex flex-col bg-white rounded-md relative h-full">
      <Header />
      <Content />
      <Navigation />
    </div>
  );
};

export default Details;
