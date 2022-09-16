import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import restaurants from "../../data/restaurants.json";
import Carousel from "../../components/Carousel";
import Hero from "../../components/Hero";
// import { memo } from "preact/compat";

const Home = () => {
  const [test, setTest] = useState(0);

  useEffect(() => {
    setTest(1);
  }, []);

  return (
    <div>
      <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10 pb-10">
        <Hero />
        <Carousel />
      </div>
      <div
        class=" bg-white shadow	 px-1 pt-1"
        style={{ backgroundColor: "#862DF7" }}
      >
        <div class="container my-4  px-3 mx-auto bg-violet-600 ">
          <section class="mb-32 text-gray-800 text-center lg:text-left">
            <div class="container mx-auto xl:px-32 text-center lg:text-left">
              <div class="grid lg:grid-cols-2 flex items-center">
                <div>
                  <img
                    src="footer-people.png"
                    className="w-full shadow-lg fancy-border-radius rotate-lg-6"
                    alt=""
                  />
                </div>{" "}
                <div class="mb-12 lg:mb-0">
                  <div
                    class="relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                    style="background: hsla(0, 0%, 100%, 0.55); backdrop-filter: blur(30px); z-index: 1"
                  >
                    <h2 class="text-3xl font-bold mb-4 display-5">
                      No te pierdas los mejores lugares
                    </h2>
                    <p class="text-gray-500 mb-12">
                      Conecta tu wallet descentralizada, reserva tu mesa en el
                      mejor lugar y conectate con otros comenzales si queres
                      ofertar su reserva. Gana POAPS para volver
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
