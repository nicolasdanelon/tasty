import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
// import { memo } from "preact/compat";

const Home = () => {
  const [test, setTest] = useState(0);

  useEffect(() => {
    setTest(1);
  }, []);

  return <h1>Home {test}!</h1>;
};

export default Home;
