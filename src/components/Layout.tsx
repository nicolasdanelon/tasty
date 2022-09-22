import { h } from "preact";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div class="flex flex-col h-screen justify-between relative">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
