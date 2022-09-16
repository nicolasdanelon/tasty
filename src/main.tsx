import { h, render } from "preact";
import { App } from "./app";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "react-daisyui";
import "./index.sass";

render(
  <Theme dataTheme="light">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Theme>,
  document.getElementById("app") as HTMLElement
);
