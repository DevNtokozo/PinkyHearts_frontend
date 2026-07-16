import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white py-10">

  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-8">

    <div>

      <h3 className="text-2xl font-bold">
        Pinky Hearts
      </h3>

      <p className="mt-4">
        Safe • Caring • Learning
      </p>

    </div>

    <div>

      <h3 className="font-bold text-xl">
        Contact
      </h3>

      <p className="mt-4">
        📍 334 Fortress Street, Ormonde View, Johannesburg, 2091
      </p>

      <p>📞 +27 71 039 6101</p>

      <p>✉ info@pinkyhearts.co.za</p>

    </div>

    <div>

      <h3 className="font-bold text-xl">
        Opening Hours
      </h3>

      <p className="mt-4">
        Monday - Friday
      </p>

      <p>06:30 - 18:00</p>

    </div>

  </div>

  <div className="text-center mt-10 border-t border-pink-400 pt-6">

    © 2020 Pinky Hearts Day Care. All Rights Reserved.

  </div>

</footer>
  );
};

export default Footer;
