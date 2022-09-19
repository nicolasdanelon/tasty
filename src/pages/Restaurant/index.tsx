import { h } from "preact";
import { useState } from "preact/hooks";
import restaurants from "../../data/restaurants.json";
import RestaurantCard from "../../components/RestaurantCard";
import ModalStatus from "../../components/ModalStatus";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [hash, setHash] = useState("");

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <ModalStatus
        toggleVisible={toggleVisible}
        visible={visible}
        title="La transacción se está procesando"
        line1="Toda tu información está segura ahora."
        line2="Este es el hash de tu transacción: "
        hash={hash}
      />

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 gap-y-10 gap-x-6">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="group">
            <RestaurantCard
              restaurant={restaurant}
              setHash={setHash}
              toggleVisible={toggleVisible}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
