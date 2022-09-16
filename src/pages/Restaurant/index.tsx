import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import RestaurantCard from "../../components/RestaurantCard";
import Restaurants from "../../components/Restaurants";

const Home = () => {
  const [test, setTest] = useState(0);

  useEffect(() => {
    setTest(1);
  }, []);

  return (
    <h1>
      <Restaurants />
    </h1>
  );
};

export default Home;
