const EventModal = ({
  isOpen,
  title,
  formData,
  handleChange,
  handleSubmit,
  closeModal,
  isEditing,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-8">

        <h2 className="text-2xl font-bold text-pink-500 mb-6">
          {title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Event Title"
            required
            className="w-full border rounded-lg p-3"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Event Description"
            rows="4"
            required
            className="w-full border rounded-lg p-3"
          />

          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
          />

          <input
            type="time"
            name="eventTime"
            value={formData.eventTime}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            placeholder="Venue"
            required
            className="w-full border rounded-lg p-3"
          />

          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={closeModal}
              className="px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-pink-500 text-white hover:bg-pink-600"
            >
              {isEditing ? "Update Event" : "Add Event"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EventModal;