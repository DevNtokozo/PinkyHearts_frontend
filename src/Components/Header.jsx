import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

const Header = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    return (

        <header className="bg-white shadow px-8 py-4 flex justify-between items-center">

            <div>

                <h1 className="text-3xl font-bold text-pink-500">
                    Dashboard
                </h1>

                <p className="text-gray-500">
                    Welcome back, {user?.firstName}
                </p>

            </div>

            <div className="flex items-center gap-6">

                <div className="relative">

                    <FaSearch className="absolute top-4 left-3 text-gray-400"/>

                    <input
                        placeholder="Search..."
                        className="border rounded-lg pl-10 pr-4 py-2 w-72 focus:ring-2 focus:ring-pink-400 outline-none"
                    />

                </div>

                <button className="relative">

                    <FaBell className="text-2xl text-pink-500"/>

                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
                        3
                    </span>

                </button>

                <FaUserCircle className="text-4xl text-pink-500"/>

            </div>

        </header>

    );

};

export default Header;