import { h } from "preact";
import { Outlet } from "react-router-dom";
import Logo from "../assets/Logo";
import Header from "./Header";

const Layout = () => {
  return (
    <div class="flex flex-col h-screen justify-between">
      <Header />
      <main class="mb-auto h-10 bg-green-500">
        <Outlet />
      </main>
      <footer
        class="p-4 bg-white shadow md:px-6 md:py-4 dark:bg-gray-900"
        style={{ backgroundColor: "#862DF7" }}
      >
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="flex items-center mb-4 sm:mb-0">
            <Logo color="#fff" />
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline">
                Terms of service
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
