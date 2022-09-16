import { h } from "preact";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div class="flex flex-col h-screen justify-between">
      <header class="h-10 bg-red-500">
        <div />
      </header>
      <main class="mb-auto h-10 bg-green-500">
        <Outlet />
      </main>
      <footer class="h-10 bg-blue-500">Footer</footer>
    </div>
  );
};

export default Layout;
