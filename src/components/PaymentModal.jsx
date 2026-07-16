const PaymentModal = ({
  isOpen,
  title,
  formData,
  handleChange,
  handleSubmit,
  closeModal,
  isEditing,
  children,
}) => {

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-8">

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

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <select
            name="month"
            value={formData.month}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          >

            <option value="">Select Month</option>

            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>

          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          >

            <option value="">
              Payment Status
            </option>

            <option>Paid</option>
            <option>Pending</option>

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
              {isEditing ? "Update" : "Save"}
            </button>

          </div>

        </form>

      </div>

    </div>

  );

};

export default PaymentModal;