import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { OrderForm } from "../components";
import { useOrderActions } from "../hooks";

const initialValues = {
  customerName: "",
  email: "",
  phone: "",
  shippingAddress: "",
  paymentMethod: "",
  paymentStatus: "Pending",
  orderStatus: "Pending",
  notes: "",
};

const CreateOrder = () => {
  const navigate = useNavigate();

  const {
    createOrder,
  } = useOrderActions();

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm }
  ) => {
    try {
      await createOrder(values).unwrap();

      toast.success("Order created successfully.");

      resetForm();

      navigate("/orders");
    } catch (error) {
      toast.error(
        error?.message ||
          "Failed to create order."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Create Order
            </h1>

            <p className="mt-1 text-gray-500">
              Add a new customer order.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/orders")}
            className="rounded-lg border border-gray-300 px-5 py-2 font-medium transition hover:bg-gray-100"
          >
            Back
          </button>
        </div>

        {/* Form */}
        <OrderForm
          initialValues={initialValues}
          submitText="Create Order"
          onSubmit={handleSubmit}
        />
      </div>
    </section>
  );
};

export default CreateOrder;