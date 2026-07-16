import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DataTable from "../components/DataTable";
import EventModal from "../components/EventModal";

import {
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent,
} from "../services/api";

const Events = () => {

  const [events, setEvents] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    eventDate: "",
    eventTime: "",
    venue: "",
  });

  const loadEvents = async () => {
    try {
      const response = await getEvents();
      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

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

        await updateEvent(selectedId, formData);

      } else {

        await addEvent(formData);

      }

      loadEvents();

      setIsOpen(false);

      setFormData({
        title: "",
        description: "",
        eventDate: "",
        eventTime: "",
        venue: "",
      });

    } catch (error) {

      console.log(error);

    }
  };

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this event?")) return;

    try {

      await deleteEvent(id);

      loadEvents();

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

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-3xl font-bold">
              Events
            </h2>

            <button
              onClick={() => {

                setIsEditing(false);

                setFormData({
                  title: "",
                  description: "",
                  eventDate: "",
                  eventTime: "",
                  venue: "",
                });

                setIsOpen(true);

              }}
              className="bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-600"
            >
              + Add Event
            </button>

          </div>

          <DataTable
            columns={[
              "Title",
              "Description",
              "Date",
              "Time",
              "Venue",
            ]}
            fields={[
              "title",
              "description",
              "eventDate",
              "eventTime",
              "venue",
            ]}
            data={events}
            renderActions={(event) => (

              <div className="space-x-2">

                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={() => {

                    setIsEditing(true);

                    setSelectedId(event.id);

                    setFormData({
                      title: event.title,
                      description: event.description,
                      eventDate: event.eventDate,
                      eventTime: event.eventTime,
                      venue: event.venue,
                    });

                    setIsOpen(true);

                  }}
                >
                  Edit
                </button>

                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(event.id)}
                >
                  Delete
                </button>

              </div>

            )}
          />

        </div>

      </div>

      <EventModal
        isOpen={isOpen}
        title={isEditing ? "Edit Event" : "Add Event"}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        closeModal={() => setIsOpen(false)}
        isEditing={isEditing}
      />

    </div>

  );

};

export default Events;