import { h } from "preact";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Test from "./pages/Test/index";
import Layout from "./components/Layout";

export function App() {
  return (
    <div style={{ maxWidth: 1800, marginLeft: "auto", marginRight: "auto" }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="test" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
