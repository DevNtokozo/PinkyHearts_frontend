import { useEffect, useState } from "react";
import {
  getChildren,
  addChild,
  updateChild,
  deleteChild,
  getUsers,
} from "../services/api";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DataTable from "../components/DataTable";
import ChildModal from "../Components/ChildModal";




const Children = () => {

  const [children, setChildren] = useState([]);
  const [parents, setParents] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    classroom: "",
    parentId: "",
  });

  useEffect(() => {
    loadChildren();
    loadParents();
  }, []);

  const loadChildren = async () => {
    try {
      const response = await getChildren();
      setChildren(response.data);
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

        await updateChild(selectedId, formData);

      } else {

        await addChild(formData);

      }

      loadChildren();

      setIsOpen(false);

    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {

    if (!window.confirm("Delete child?")) return;

    await deleteChild(id);

    loadChildren();

  };

  return (

    <div className="flex bg-pink-50 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <div className="p-8">

          {/* Page Header */}

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-3xl font-bold">
              Children
            </h2>

            <button
              onClick={() => {

                setIsEditing(false);

                setFormData({
                  firstName: "",
                  lastName: "",
                  age: "",
                  gender: "",
                  classroom: "",
                  parentId: "",
                });

                setIsOpen(true);

              }}
              className="bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-600 cursor-pointer"
            >
              + Add Child
            </button>

          </div>

          <DataTable
            columns={[
              "First Name",
              "Last Name",
              "Age",
              "Gender",
              "Classroom",
              "Parent",
            ]}
            data={children}
            renderActions={(child) => (

              <div className="space-x-2">

                <button
                  onClick={() => {

                    setIsEditing(true);

                    setSelectedId(child.id);

                    setFormData({
                      firstName: child.firstName,
                      lastName: child.lastName,
                      age: child.age,
                      gender: child.gender,
                      classroom: child.classroom,
                      parentId: child.parent.id,
                    });

                    setIsOpen(true);

                  }}
                  className="bg-blue-500 text-white px-3 py-1 rounded cursor-pointer"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(child.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
                >
                  Delete
                </button>

              </div>

            )}
          />

        </div>

      </div>
    <ChildModal
    isOpen={isOpen}
    title={isEditing ? "Edit Child" : "Add Child"}
    formData={formData}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    closeModal={() => setIsOpen(false)}
    isEditing={isEditing}
    parents={parents}
/>

    </div>

  );

};

export default Children;