import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import restaurants from "../../data/restaurants.json";
import RestaurantCard from "../../components/RestaurantCard";
import useTastyTokenContract from "../../helpers/useTastyTokenContract";

const Home = () => {
  const [contract, setContract] = useState({});

  useEffect(() => {
    const tasty = useTastyTokenContract();
    setContract(tasty);
  }, []);

  console.log({ contract });

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 gap-y-10 gap-x-6">
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="group">
          <RestaurantCard restaurant={restaurant} />
        </div>
      ))}
    </div>
  );
};

export default Home;
