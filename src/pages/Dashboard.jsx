import React from "react";
import { useEffect, useState } from "react";
import { getUsers } from "../services/api";
import { getChildren } from "../services/api";
import { getPayments } from "../services/api";
import { getAttendance } from "../services/api";
import { getEvents } from "../services/api";

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
  const [children, setChildren] = useState([]);
  const [payments, setPayments] = useState([]);
  const [attendance, setAttendance] = useState([]);



const loadPayments = async () => {

    try {

        const response = await getPayments();

        setPayments(response.data);

    } catch (error) {

        console.log(error);

    }

};

const loadAttendance = async () => {

    try {

        const response = await getAttendance();

        setAttendance(response.data);

    } catch (error) {

        console.log(error);

    }

};

const loadParents = async () => {
    try {
        const response = await getUsers();
        setParents(response.data);
    } catch (error) {
        console.log(error);
    }
};

const loadChildren = async () => {

    const response = await getChildren();

    setChildren(response.data);

};

useEffect(() => {

    loadParents();
    loadChildren();
    loadPayments();
    loadAttendance();

}, []);

const totalRevenue = payments.reduce(
    (total, payment) => total + Number(payment.amount),
    0
);

const presentToday = attendance.filter(
    (record) => record.status === "Present"
).length;

const pendingPayments = payments.filter(
    (payment) => payment.status === "Pending"
).length;

const [events, setEvents] = useState([]);

useEffect(() => {
    loadEvents();
}, []);

const loadEvents = async () => {
    const response = await getEvents();
    setEvents(response.data);
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
              value={children.length}
              icon={<FaChild />}
              color="text-violet-500"
            />

            <DashboardCard
            title="Revenue"
            value={`R ${totalRevenue}`}
            icon={<FaMoneyBillWave />}
            color="text-green-500"
/>

            <DashboardCard
             title="Present Today"
             value={presentToday}
             icon={<FaClipboardCheck />}
             color="text-amber-500"
/>

            <DashboardCard
             title="Pending Payments"
             value={pendingPayments}
             icon={<FaMoneyBillWave />}
             color="text-red-500"
/>

           
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">

    <h2 className="text-2xl font-semibold text-pink-500 mb-5">
        Registered Parents
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

<div className="bg-white rounded-xl shadow-lg p-6 mt-8">

    <h2 className="text-2xl font-semibold text-pink-500 mb-4">
        Recent Payments
    </h2>

    <table className="w-full">

        <thead>
            <tr className="border-b">
                <th className="text-left py-3">Child</th>
                <th className="text-left py-3">Amount</th>
                <th className="text-left py-3">Month</th>
                <th className="text-left py-3">Status</th>
            </tr>
        </thead>

        <tbody>

            {payments.slice(0, 5).map((payment) => (

                <tr key={payment.id} className="border-b hover:bg-pink-50">

                    <td>{payment.child.firstName} {payment.child.lastName}</td>

                    <td>R {payment.amount}</td>

                    <td>{payment.month}</td>

                    <td>
                        <span
                            className={`px-2 py-1 rounded-full text-white ${
                                payment.status === "Paid"
                                    ? "bg-green-500"
                                    : "bg-yellow-500"
                            }`}
                        >
                            {payment.status}
                        </span>
                    </td>

                </tr>

            ))}

        </tbody>

    </table>

</div>
            <div className="bg-white rounded-xl shadow p-6">

    <h2 className="text-xl font-bold mb-4">
        Upcoming Events
    </h2>

    {events.length === 0 ? (
        <p>No upcoming events.</p>
    ) : (
        events.map(event => (
            <div key={event.id} className="border-b py-3">

                <h3 className="font-semibold">
                    {event.title}
                </h3>

                <p>{event.description}</p>

                <p className="text-sm text-gray-500">
                    {event.eventDate} • {event.eventTime}
                </p>

                <p className="text-sm">
                    {event.venue}
                </p>

            </div>
        ))
    )}

</div>
          </div>
          
        </div>
      </div>
    
  );
};

export default Dashboard;