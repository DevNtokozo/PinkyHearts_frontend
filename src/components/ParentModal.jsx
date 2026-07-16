const ParentModal = ({
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
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          {!isEditing && (
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          )}

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 border rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-pink-500 text-white px-5 py-2 rounded-lg"
            >
              {isEditing ? "Update" : "Save"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default ParentModal;