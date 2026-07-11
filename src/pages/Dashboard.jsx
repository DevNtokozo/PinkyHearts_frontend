import React from 'react'
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
  return (
    <div className="flex bg-pink-50 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <div className="p-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <DashboardCard
              title="Parents"
              value="25"
              color="bg-pink-500"
            />

            <DashboardCard
              title="Children"
              value="48"
              color="bg-violet-500"
            />

            <DashboardCard
              title="Payments"
              value="R32 000"
              color="bg-green-500"
            />

            <DashboardCard
              title="Pending"
              value="4"
              color="bg-amber-400"
            />

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;
