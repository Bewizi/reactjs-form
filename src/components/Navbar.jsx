import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="md:flex md:justify-between md:container md:mx-auto ">
      {/* logo */}
      <div>
        <h1>Logo</h1>
      </div>
      {/* end of logo */}

      {/* navlinks */}
      <nav>
        <Link to="/guest" className="md:mr-9 md:text-xl">
          Home
        </Link>
        <Link to="/about" className="md:mr-9 md:text-xl">
          About
        </Link>
        <Link to="/gallery" className="md:mr-9 md:text-xl">
          Gallery
        </Link>
        <Link to="/contact" className="md:text-xl">
          Contact Us
        </Link>
      </nav>
      {/* end of navlinks */}
      <div>
        <Link to="/login" className="md:text-xl md:mr-9">
          Login
        </Link>
        <Link to="/signup" className="md:text-xl">
          Sign Up
        </Link>
      </div>
    </header>
  );
};
