// import React from "react";

import { Link } from "react-router-dom";
import { Button } from "../components/button";

export const Welcome = () => {
  return (
    <div>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        asperiores vero in eaque veritatis autem ut quisquam eligendi non,
        aliquid molestiae illo explicabo recusandae possimus, aperiam et hic
        sunt placeat!
      </p>
      <Button>
        <Link to="/signup">Get Started</Link>
      </Button>
    </div>
  );
};
