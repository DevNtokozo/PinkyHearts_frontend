import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaChild,
  FaMoneyBillWave,
  FaClipboardCheck,
  FaCalendarAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const menu = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { name: "Parents", icon: <FaUsers />, path: "/parents" },
    { name: "Events", icon: <FaCalendarAlt />, path: "/events" },
    { name: "Children", icon: <FaChild />, path: "/children" },
    { name: "Payments", icon: <FaMoneyBillWave />, path: "/payments" },
    {
      name: "Attendance",
      icon: <FaClipboardCheck />,
      path: "/attendance",
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-pink-500 text-white shadow-lg flex flex-col">

      {/* Logo */}
      <div className="p-6">
        <h2 className="text-center text-2xl font-bold mt-4">
          Pinky Hearts
        </h2>

        <p className="text-center text-pink-100">
          Day Care
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-6">

        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-6 py-4 transition ${
              location.pathname === item.path
                ? "bg-pink-700"
                : "hover:bg-pink-600"
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}

      </nav>

      {/* Logout */}
      <div className="border-t border-pink-400">
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-6 py-4 hover:bg-pink-600 transition duration-200 cursor-pointer"
        >
          <FaSignOutAlt className="text-lg" />
          Logout
        </button>
      </div>

    </aside>
  );
};

export default Sidebar;