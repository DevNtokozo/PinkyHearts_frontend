import React from "react";
import { useEffect, useState } from "react";
import { getUsers } from "../services/api";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import {
  FaUsers,
  FaChild,
  FaMoneyBillWave,
  FaClipboardCheck,
} from "react-icons/fa";

const Dashboard = () => {
  const [parents, setParents] = useState([]);

  useEffect(() => {
    loadParents();
}, []);

const loadParents = async () => {
    try {
        const response = await getUsers();
        setParents(response.data);
    } catch (error) {
        console.log(error);
    }
};
  return (
    <div className="flex bg-pink-50 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DashboardCard
              title="Parents"
              value={parents.length}
              icon={<FaUsers />}
              color="text-pink-500"
            />

            <DashboardCard
              title="Children"
              value="67"
              icon={<FaChild />}
              color="text-violet-500"
            />

            <DashboardCard
              title="Payments"
              value="R25 600"
              icon={<FaMoneyBillWave />}
              color="text-green-500"
            />

            <DashboardCard
              title="Attendance"
              value="58"
              icon={<FaClipboardCheck />}
              color="text-amber-500"
            />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">

    <h2 className="text-2xl font-semibold text-pink-500 mb-5">
        Recently Registered Parents
    </h2>

    <table className="w-full">

        <thead>

            <tr className="border-b">

                <th className="text-left py-3">
                    Name
                </th>

                <th className="text-left py-3">
                    Email
                </th>

                <th className="text-left py-3">
                    Phone
                </th>

            </tr>

        </thead>

        <tbody>

            {parents.slice(0, 5).map((parent) => (

                <tr
                    key={parent.id}
                    className="border-b hover:bg-pink-50"
                >

                    <td className="py-3">
                        {parent.firstName} {parent.lastName}
                    </td>

                    <td>
                        {parent.email}
                    </td>

                    <td>
                        {parent.phone}
                    </td>

                </tr>

            ))}

        </tbody>

    </table>

</div>
            <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-2xl font-semibold text-pink-500 mb-4">
      Upcoming Events
    </h2>

    <ul className="space-y-4">
      <li>🎨 Art Day - Friday</li>
      <li>🎂 Birthday Celebration</li>
      <li>🌳 Outdoor Learning</li>
    </ul>
  </div>
          </div>
          <div className="mt-10 bg-white rounded-xl shadow-lg p-6">

    <h2 className="text-2xl font-semibold text-pink-500 mb-6">
        Quick Actions
    </h2>

    <div className="flex gap-4 flex-wrap">

        <button className="bg-pink-500 text-white px-5 py-3 rounded-lg hover:bg-pink-600">
            Add Parent
        </button>

        <button className="bg-violet-500 text-white px-5 py-3 rounded-lg">
            Add Child
        </button>

        <button className="bg-green-500 text-white px-5 py-3 rounded-lg">
            Record Payment
        </button>

    </div>

</div>
        </div>
      </div>
    
  );
};

export default Dashboard;