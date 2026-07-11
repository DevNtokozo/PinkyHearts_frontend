import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaChild,
  FaMoneyBillWave,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { name: "Parents", icon: <FaUsers />, path: "/parents" },
    { name: "Children", icon: <FaChild />, path: "/children" },
    { name: "Payments", icon: <FaMoneyBillWave />, path: "/payments" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-pink-500 text-white shadow-lg">

      <div className="p-6 border-b border-pink-400">
        <h2 className="text-2xl font-bold">
          Pinky Hearts
        </h2>
        <p className="text-sm text-pink-100">
          Day Care
        </p>
      </div>

      <nav className="mt-6">

        {menu.map((item) => (

          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-6 py-4 transition
            ${
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

      <div className="absolute bottom-0 w-64">

        <button className="flex items-center gap-3 w-full px-6 py-4 hover:bg-pink-600">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
};

export default Sidebar;