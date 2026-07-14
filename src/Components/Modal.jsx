import React from 'react'

const Modal = ({
    isOpen,
    title,
    formData,
    handleChange,
    handleSubmit,
    closeModal,
    isEditing,
    parents = [],
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
  />

  <input
    type="text"
    name="lastName"
    placeholder="Last Name"
    value={formData.lastName}
    onChange={handleChange}
    className="w-full border rounded-lg p-3"
  />

  {/* Only show for Children */}

  {"age" in formData && (
    <input
      type="number"
      name="age"
      placeholder="Age"
      value={formData.age}
      onChange={handleChange}
      className="w-full border rounded-lg p-3"
    />
  )}

  {"gender" in formData && (
    <select
      name="gender"
      value={formData.gender}
      onChange={handleChange}
      className="w-full border rounded-lg p-3"
    >
      <option value="">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
  )}

  {"classroom" in formData && (
    <input
      type="text"
      name="classroom"
      placeholder="Classroom"
      value={formData.classroom}
      onChange={handleChange}
      className="w-full border rounded-lg p-3"
    />
  )}

  {"parentId" in formData && (
    <select
      name="parentId"
      value={formData.parentId}
      onChange={handleChange}
      className="w-full border rounded-lg p-3"
    >
      <option value="">Select Parent</option>

      {parents.map((parent) => (
        <option key={parent.id} value={parent.id}>
          {parent.firstName} {parent.lastName}
        </option>
      ))}
    </select>
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

export default Modal;