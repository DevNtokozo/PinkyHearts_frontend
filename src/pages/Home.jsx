import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />

       <main className="bg-pink-50">

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between">

          <div className="md:w-1/2">

            <h1 className="text-5xl font-bold text-pink-500 leading-tight">
              Welcome to <br />
              Pinky Hearts Day Care
            </h1>

            <p className="mt-6 text-gray-700 text-lg">
              A safe, caring and stimulating environment where children learn,
              play and grow every day.
            </p>

            <div className="mt-8 flex gap-4">

              <Link
                to="/register"
                className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600"
              >
                Register
              </Link>

              <Link
                to="/login"
                className="border border-pink-500 text-pink-500 px-6 py-3 rounded-lg hover:bg-pink-100"
              >
                Login
              </Link>

            </div>

          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">

            <img
              src="/babies.png"
              alt="Day Care"
              className="w-96 rounded-xl shadow-lg"
            />

          </div>

        </section>

        <section className="bg-white py-20">

  <div className="max-w-5xl mx-auto text-center px-8">

    <h2 className="text-4xl font-bold text-pink-500">
      About Us
    </h2>

    <p className="mt-6 text-gray-600 leading-8">
      Pinky Hearts Day Care is committed to providing quality early childhood
      education in a safe, loving and stimulating environment. We encourage
      learning through creativity, play and positive relationships.
    </p>

  </div>

</section>

<section className="bg-pink-50 py-20">

  <div className="max-w-6xl mx-auto px-8">

    <h2 className="text-4xl font-bold text-center text-pink-500">
      Our Services
    </h2>

    <div className="grid md:grid-cols-3 gap-8 mt-14">

      <div className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-semibold">
          Early Learning
        </h3>

        <p className="mt-4 text-gray-600">
          Fun educational activities designed for every stage of development.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-semibold">
          Healthy Meals
        </h3>

        <p className="mt-4 text-gray-600">
          Nutritious meals and snacks prepared every day.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-semibold">
          Safe Environment
        </h3>

        <p className="mt-4 text-gray-600">
          Caring teachers and secure facilities where children can thrive.
        </p>
      </div>

    </div>

  </div>

</section>



      </main>
      <section className="bg-pink-500 py-20">

  <div className="max-w-4xl mx-auto text-center text-white px-8">

    <h2 className="text-4xl font-bold">
      Ready to Join the Pinky Hearts Family?
    </h2>

    <p className="mt-6 text-lg">
      Register today and give your child the best start to their learning journey.
    </p>

    <Link
      to="/register"
      className="inline-block mt-8 bg-white text-pink-500 px-8 py-3 rounded-lg font-semibold hover:bg-pink-100 transition"
    >
      Register Now
    </Link>

  </div>

</section>


      <Footer />
    </>
  );
};

export default Home;