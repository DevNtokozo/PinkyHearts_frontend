const Header = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <header className="bg-white shadow px-8 py-5 flex justify-between items-center">

      <div>

        <h1 className="text-2xl font-bold text-gray-700">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome back {user?.firstName || "Admin"}
        </p>

      </div>

    </header>

  );
};

export default Header;