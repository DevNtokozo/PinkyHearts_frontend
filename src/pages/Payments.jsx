import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DataTable from "../components/DataTable";
import PaymentModal from "../components/PaymentModal";

import {
  getPayments,
  addPayment,
  updatePayment,
  deletePayment,
  getChildren,
} from "../services/api";

const Payments = () => {

  const [payments, setPayments] = useState([]);
  const [children, setChildren] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [formData, setFormData] = useState({
    childId: "",
    amount: "",
    month: "",
    status: "",
  });

  const loadPayments = async () => {
  try {
    const response = await getPayments();

    console.log(response.data);
    setPayments(response.data);
  } catch (error) {
    console.log(error);
  }
};

const loadChildren = async () => {
  try {
    const response = await getChildren();
    setChildren(response.data);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  loadPayments();
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

  try {

    if (isEditing) {

      await updatePayment(selectedId, formData);

    } else {

      await addPayment(formData);

    }

    loadPayments();

    setIsOpen(false);

    setFormData({
      childId: "",
      amount: "",
      month: "",
      status: "",
    });

  } catch (error) {

    console.log(error);

  }
};

const handleDelete = async (id) => {

  if (!window.confirm("Delete this payment?")) return;

  await deletePayment(id);

  loadPayments();

};



  return (
    <div className="flex bg-pink-50 min-h-screen">

      <Sidebar />

      <div className="flex-1">

  <Header />

  <div className="p-8">

    <div className="flex justify-between items-center mb-6">

      <h2 className="text-3xl font-bold">
        Payments
      </h2>

      <button
        onClick={() => {

          setIsEditing(false);

          setFormData({
            childId: "",
            amount: "",
            month: "",
            status: "",
          });

          setIsOpen(true);

        }}
        className="bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-600"
      >
        + Record Payment
      </button>

    </div>

    <DataTable
      columns={[
        "Child",
        "Amount",
        "Month",
        "Status",
      ]}
      fields={[
        "child",
        "amount",
        "month",
        "status",
      ]}
      data={payments}
      renderActions={(payment) => (

        <div className="space-x-2">

          <button
            className="bg-blue-500 text-white px-3 py-1 rounded"
            onClick={() => {

              setIsEditing(true);

              setSelectedId(payment.id);

              setFormData({
                childId: payment.child?.id || "",
                amount: payment.amount,
                month: payment.month,
                status: payment.status,
              });

              setIsOpen(true);

            }}
          >
            Edit
          </button>

          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => handleDelete(payment.id)}
          >
            Delete
          </button>

        </div>

      )}
    />

  </div>

</div>
      <PaymentModal
  isOpen={isOpen}
  title={isEditing ? "Edit Payment" : "Record Payment"}
  formData={formData}
  handleChange={handleChange}
  handleSubmit={handleSubmit}
  closeModal={() => setIsOpen(false)}
  isEditing={isEditing}
  children={children}
/>

    </div>
  );

};

export default Payments;