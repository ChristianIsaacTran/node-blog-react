import { useEffect } from "react";
import Navbar from "../navbar/Navbar";

const Homepage = () => {
  // do something external, like fetch requests to sync with react app
  useEffect(() => {}, []);

  return (
    <>
      <Navbar />
      This is test NOW
    </>
  );
};

export default Homepage;
