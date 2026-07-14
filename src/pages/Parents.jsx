import React from 'react'

import { register, updateUser } from "../services/api";

import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/api";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DataTable from "../components/DataTable";
import ParentModal from '../Components/ParentModal';


const Parents = () => {

    const [parents, setParents] = useState([]);

    const loadParents = async () => {

        try {

            const response = await getUsers();

            setParents(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        loadParents();

    }, []);

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this parent?")) return;

        await deleteUser(id);

        loadParents();

    };

    const [isOpen, setIsOpen] = useState(false);

const [isEditing, setIsEditing] = useState(false);

const [selectedId, setSelectedId] = useState(null);

const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
});

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
};

const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        if (isEditing) {

            await updateUser(selectedId, formData);

        } else {

            await register(formData);

        }

        loadParents();

        setIsOpen(false);

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

                    <div className="flex justify-between mb-6">

                        <h2 className="text-3xl font-bold">
                            Parents
                        </h2>

                        <button
    onClick={() => {

        setIsEditing(false);

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
        });

        setIsOpen(true);

    }}
    className="bg-pink-500 text-white px-5 py-2 rounded-lg cursor-pointer"
>
    + Add Parent
</button>
                    </div>

                    <DataTable

                        columns={[
                            "First Name",
                            "Last Name",
                            "Email",
                            "Phone",
                        ]}

                        data={parents}

                        renderActions={(parent) => (

                            <div className="space-x-2">

                                <button
    onClick={() => {

        setIsEditing(true);

        setSelectedId(parent.id);

        setFormData(parent);

        setIsOpen(true);

    }}
    className="bg-blue-500 text-white px-3 py-1 rounded cursor-pointer"
>
    Edit
</button>
                                <button
                                    onClick={() =>
                                        handleDelete(parent.id)
                                    }
                                    className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
                                >
                                    Delete
                                </button>

                            </div>

                        )}

                    />

                </div>

            </div>
     <ParentModal
    isOpen={isOpen}
    title={isEditing ? "Edit Parent" : "Add Parent"}
    formData={formData}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    closeModal={() => setIsOpen(false)}
    isEditing={isEditing}
/>

        </div>
    );
};

export default Parents;
