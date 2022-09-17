import { h } from "preact";
import ReservationCard from "../../components/ReservationCard";
import reservations from "../../data/reservations.json";
const Profile = () => {
  return (
    <div>
      <div
        class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md "
        style={"max-width: 100%; margin: 20px, background: #CABFFD"}
      >
        <div class="flex flex-col items-center pb-10 pt-4">
          <img
            class="mb-3 w-24 h-24 rounded-full shadow-lg"
            src="https://ik.imagekit.io/lensterimg/tr:n-avatar,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/QmY7WEGzavjdh9zmLyFTdGj4FvTgjB58Mdvaky9p3NvdiF"
            alt="Bonnie image"
          ></img>
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Bonnie Green
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            Comensal #3821
          </span>
          <div class="flex mt-4 space-x-3 md:mt-6">
            <a
              href="#"
              class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              style={"background-color: #6C2BD9"}
            >
              Reservar Nueva Mesa
            </a>
            <a
              href="#"
              class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 "
              style={"color: #6C2BD9"}
            >
              BNFT
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 gap-y-10 gap-x-6">
        {reservations.map((reservation) => (
          <div key={reservation.id} className="group">
            <ReservationCard reservation={reservation} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
