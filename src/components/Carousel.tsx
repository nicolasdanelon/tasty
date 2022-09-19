import { useState, useRef, useEffect } from "react";

import data from "../data/restaurants.json";
import { h } from "preact";
import ModalReservationBody from "./ModalReservationBody";

type Restaurant = {
  rating: number;
  img: string;
  address: string;
  name: string;
  availablePlaces: number;
};

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] =
    // @ts-ignore
    useState<Restaurant>(null);

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

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current["offsetWidth"] * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: string) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current["offsetWidth"] * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (
      carousel !== null &&
      carousel.current !== null &&
      carousel.current["scrollLeft"] != null
    ) {
      // @ts-ignore
      carousel.current["scrollLeft"] =
        carousel.current["offsetWidth"] * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current["scrollWidth"] - carousel.current["offsetWidth"]
      : 0;
  }, []);

  return (
    <div className="carousel my-12 mb-20 mx-auto">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center relative w-80 h-80 snap-start"
              >
                <a
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${resource.img || ""})` }}
                >
                  <img
                    src={resource.img || ""}
                    alt={resource.name}
                    className="w-full aspect-square hidden"
                  />
                </a>
                <a className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10">
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {resource.name}
                  </h3>
                  {resource.availablePlaces == 0 && (
                    <>
                      <p class="text-violet-200">No hay mesas disponibles</p>
                      <br />
                      <br />
                      <br />
                      <button
                        type="button"
                        onClick={() => {
                          setShowModal(true);
                          setSelectedRestaurant(resource);
                        }}
                        className=" inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Ofertar por una mesa
                      </button>
                    </>
                  )}
                  {resource.availablePlaces > 0 && (
                    <>
                      <p class="text-violet-200">
                        Mesas disponibles: {resource.availablePlaces}
                      </p>
                      <br />
                      <br />
                      <br />
                      <button
                        type="button"
                        onClick={() => {
                          setShowModal(true);
                          setSelectedRestaurant(resource);
                        }}
                        className=" inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Reservar mesa
                      </button>
                    </>
                  )}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      {showModal && (
        <div>
          <div
            class="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto">
              <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <ModalReservationBody
                    restaurant={selectedRestaurant}
                    setShowModal={setShowModal}
                    setHash={() => null}
                    toggleVisible={() => null}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
