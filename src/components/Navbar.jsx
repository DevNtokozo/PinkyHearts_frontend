import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-pink-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold"
        >
          <FaHeart className="text-white" />
          Pinky Hearts
        </Link>

        {/* Navigation */}
        <div className="flex gap-6 font-medium">
          <Link to="/" className="hover:text-pink-200">
            Home
          </Link>

          <Link to="/login" className="hover:text-pink-200">
            Login
          </Link>

          <Link to="/register" className="hover:text-pink-200">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;