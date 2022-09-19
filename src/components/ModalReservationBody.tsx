import { h } from "preact";
import { useState } from "react";
import { ethers } from "ethers";
import times from "../data/times.json";
import useTastyTokenContract from "../helpers/useTastyTokenContract";
import { Restaurant } from "./RestaurantCard";
import { daysFromToday, getDaysArray } from "../helpers/dates";

type ModalReservationBodyProps = {
  setShowModal: Function;
  restaurant: Restaurant;
  setHash: Function;
  toggleVisible: Function;
};

const ModalReservationBody = ({
  setShowModal,
  restaurant,
  setHash,
  toggleVisible,
}: ModalReservationBodyProps) => {
  const futureDate = daysFromToday(3);
  const rangeDates = getDaysArray(new Date(), futureDate);

  const [selectedDate, setSelectedDate] = useState(rangeDates[0]);
  const [selectedTime, setSelectedTime] = useState(1);
  const [cta, setCta] = useState("Reservar!");

  const makeReservation = async () => {
    try {
      const tasty = useTastyTokenContract();
      const value = ethers.utils.parseEther("0.001");

      const dates = selectedDate.split("/");
      const action = await tasty.contract.reserve(
        selectedTime,
        parseInt(dates[0]),
        parseInt(dates[1]),
        {
          value,
        }
      );

      setShowModal(false);

      // await action.wait();

      console.log(action);

      if (action.hash) {
        tasty.provider
          .waitForTransaction(action.hash)
          .then((data) => {
            toggleVisible();
            alert(`Transaccion ${data.transactionIndex} realizada`);
          })
          .catch((er) => console.log(er));

        setHash(action.hash);
        // toggleVisible();
      }
    } catch (e) {
      setCta("Reservar!");
      console.log(e);
    }
  };

  return (
    <div>
      <div
        className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 mx-auto"
        style={{ padding: 10 }}
      >
        <div className="px-6 flex flex-wrap">
          <div className="block w-full relative">
            <h5 className="mt-3 mb-2 text-2xl font-bold tracking-tight text-gray-900 block">
              {restaurant.name}
              <span
                title="Close"
                className="block cursor-pointer absolute right-0 top-1 text-red-500 hover:text-red-600"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowModal(false);
                }}
              >
                &times;
              </span>
            </h5>
            <p
              className="mb-3 font-normal text-gray-700 dark:text-gray-400"
              style={"color: #862DF7"}
            >
              Solo {restaurant.availablePlaces} mesas disponibles!
            </p>
          </div>
          <div class="justify-between">
            <h1>Selecciona una fecha</h1>
            <div style={"display: flex"} class="justify-between">
              {rangeDates.map((date) => (
                <button
                  onClick={() => setSelectedDate(date)}
                  className={`mx-2 my-2 bg-violet-700 transition duration-150 ease-in-out hover:bg-violet-600 rounded text-white px-6 py-2 text-xs ${
                    date === selectedDate
                      ? "outline-none ring-2 ring-offset-2  ring-indigo-600"
                      : ""
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>

            <h1>Selecciona el horario</h1>
            <div style={"display: flex"}>
              {times.map((time) => (
                <button
                  onClick={() => setSelectedTime(time.id)}
                  className={`mx-2 my-2 bg-violet-700 transition duration-150 ease-in-out hover:bg-violet-600 rounded text-white px-6 py-2 text-xs ${
                    time.id === selectedTime
                      ? "outline-none ring-2 ring-offset-2  ring-indigo-600"
                      : ""
                  }`}
                >
                  {time.hour}hs
                </button>
              ))}
            </div>
          </div>

          <img
            className="object-cover w-full mt-5 h-96 px-2 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={restaurant.img}
            style={"width: 100%; border-radius: 15px"}
            alt=""
          ></img>
          <div className="flex flex-col justify-between p-4 leading-normal"></div>

          <button
            className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600"
            style={"width: 100%; height:40px; border-radius: 10px"}
            onClick={async (e) => {
              e.preventDefault();
              setCta("Reservando...");
              await makeReservation();
            }}
          >
            {cta}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalReservationBody;
