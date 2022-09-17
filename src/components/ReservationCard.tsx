import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

type Reservation = {
  img: string;
  address: string;
  name: string;
  time: string;
  area: string;
  tableId: number;
  diners: number;
  date: string;
};

const ReservationCard = (props: { reservation: Reservation }) => {
  const { reservation } = props;
  const { name, address, time, area, tableId, diners, img, date } = reservation;
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const keyDownHandler = (event: {
      key: string;
      preventDefault: () => void;
    }) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setShowModal(false);
      }
    };

    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    //HTML
    <div>
      <div class="flex justify-center rounded-md">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <p style={"margin: 10px; color: #6C2BD9"}>{date}</p>
          <a href="#">
            <img class="rounded-t-lg" src={img} alt=""></img>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                {name}
              </h5>
            </a>
            <p
              class="mb-3 font-normal text-gray-700 dark:text-gray-400"
              style={"font-size: 12px"}
            >
              {address}
            </p>

            <p style={"color: #6C2BD9"}>Mesa para {diners}</p>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              {time}
            </button>

            <button
              type="button"
              class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Subastar Mesa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
