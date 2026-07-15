import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DataTable from "../components/DataTable";
import AttendanceModal from "../components/AttendanceModal";

import {
    getAttendance,
    markAttendance,
    checkOut,
    deleteAttendance,
    getChildren
} from "../services/api";

const Attendance = () => {

    const [attendance, setAttendance] = useState([]);
    const [children, setChildren] = useState([]);

    const [isOpen, setIsOpen] = useState(false);

    const [formData, setFormData] = useState({
        childId: "",
        status: ""
    });

    const loadAttendance = async () => {

    const response = await getAttendance();

    setAttendance(response.data);

};

const loadChildren = async () => {

    const response = await getChildren();

    setChildren(response.data);

};

useEffect(() => {

    loadAttendance();

    loadChildren();

}, []);

const handleChange = (e) => {

    setFormData({

        ...formData,

        [e.target.name]: e.target.value,

    });

};

const handleSubmit = async (e) => {

    e.preventDefault();

    await markAttendance(formData);

    loadAttendance();

    setIsOpen(false);

    setFormData({

        childId: "",

        status: "",

    });

};

    return (

        <div className="flex bg-pink-50 min-h-screen">

            <Sidebar />

            <div className="flex-1">

                <Header />

                <div className="p-8">

                    <h2 className="text-3xl font-bold">
                        Attendance
                    </h2>

                </div>

                <DataTable
  columns={[
    "Date",
    "Check In",
    "Check Out",
    "Status",
    "Child",
  ]}
  fields={[
    "attendanceDate",
    "checkIn",
    "checkOut",
    "status",
    "child.firstName",
  ]}
    data={attendance}
    renderActions={(record)=>(

        <div className="space-x-2">

            <button
                onClick={()=>checkOut(record.id)}
                className="bg-green-500 text-white px-3 py-1 rounded"
            >
                Check Out
            </button>

            <button
                onClick={()=>deleteAttendance(record.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
            >
                Delete
            </button>

        </div>

    )}
/>

            </div>
            <AttendanceModal
    isOpen={isOpen}
    title="Mark Attendance"
    formData={formData}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    closeModal={() => setIsOpen(false)}
    children={children}
/>

        </div>

    );

};

export default Attendance;