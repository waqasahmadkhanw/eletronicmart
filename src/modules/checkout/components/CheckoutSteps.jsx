// modules/checkout/components/CheckoutSteps.jsx

const CheckoutSteps = ({ currentStep = 1 }) => {
  const steps = [
    { id: 1, label: "Shipping" },
    { id: 2, label: "Payment" },
    { id: 3, label: "Review" },
    { id: 4, label: "Confirmation" },
  ];

  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;

          return (
            <div
              key={step.id}
              className="flex items-center flex-1"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold transition-all
                    ${
                      isCompleted
                        ? "bg-green-600 border-green-600 text-white"
                        : isActive
                        ? "bg-blue-600 border-blue-600 text-white"
                        : "bg-white border-gray-300 text-gray-500"
                    }`}
                >
                  {isCompleted ? "✓" : step.id}
                </div>

                <span
                  className={`mt-2 text-sm font-medium ${
                    isActive || isCompleted
                      ? "text-gray-900"
                      : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {index !== steps.length - 1 && (
                <div
                  className={`mx-3 h-1 flex-1 rounded-full ${
                    currentStep > step.id
                      ? "bg-green-600"
                      : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckoutSteps;