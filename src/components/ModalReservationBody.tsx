import { h } from "preact";

// @ts-ignore
const ModalReservationBody = ({ setShowModal, restaurant }) => {
  return (
    <div>
      <div
        className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto"
        style={{ padding: 10 }}
      >
        <div className="px-6 flex flex-wrap">
          <div className="block w-full relative">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white block">
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
              Solo {Math.floor(Math.random() * 12)} mesas disponibles!
            </p>
          </div>
          <div>
            <h1>Donde queres tu mesa?</h1>

            <div style={"display: flex"}>
              <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">
                Ventana
              </button>

              <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">
                Salón
              </button>

              <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">
                Terraza
              </button>

              <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">
                Patio
              </button>
            </div>

            <h1>Selecciona el horario</h1>
            <div style={"display: flex"}>
              <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">
                20:00hs.
              </button>

              <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">
                21:00hs.
              </button>

              <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">
                22:00hs.
              </button>

              <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">
                23:00hs.
              </button>
            </div>
          </div>

          <img
            className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={restaurant.img}
            style={"width: 100%; border-radius: 15px"}
            alt=""
          ></img>
          <div className="flex flex-col justify-between p-4 leading-normal"></div>

          <button
            className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600"
            style={"width: 100%; height:40px; border-radius: 10px"}
          >
            Reservar!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalReservationBody;
