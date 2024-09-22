import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="flex space-x-5 mt-4 ml-2">
      <Card/>
      <Card/>
      <Card/>
    </div>
    </>
  );
};

export default Home;
