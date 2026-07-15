const AttendanceModal = ({
  isOpen,
  title,
  formData,
  handleChange,
  handleSubmit,
  closeModal,
  children = [],
}) => {

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8">

        <h2 className="text-2xl font-bold text-pink-500 mb-6">
          {title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <select
            name="childId"
            value={formData.childId}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          >

            <option value="">
              Select Child
            </option>

            {children.map(child => (

              <option
                key={child.id}
                value={child.id}
              >
                {child.firstName} {child.lastName}
              </option>

            ))}

          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          >

            <option value="">
              Attendance Status
            </option>

            <option>Present</option>
            <option>Late</option>
            <option>Absent</option>

          </select>

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={closeModal}
              className="border px-5 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-pink-500 text-white px-5 py-2 rounded-lg"
            >
              Save
            </button>

          </div>

        </form>

      </div>

    </div>

  );

};

export default AttendanceModal;