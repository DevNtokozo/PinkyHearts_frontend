import React from 'react'

const DashboardCard = ({ title, value, color }) => {

  return (

    <div className={`rounded-xl shadow-md p-6 ${color}`}>

      <h3 className="text-white text-lg">
        {title}
      </h3>

      <p className="text-white text-4xl font-bold mt-3">
        {value}
      </p>

    </div>

  );
};

export default DashboardCard;