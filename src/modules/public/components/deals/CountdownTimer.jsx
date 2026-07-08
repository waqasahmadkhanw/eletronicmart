import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const CountdownTimer = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(endDate) - new Date();

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(
        Math.floor(difference / (1000 * 60 * 60 * 24))
      ).padStart(2, "0"),

      hours: String(
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0"),

      minutes: String(
        Math.floor((difference / (1000 * 60)) % 60)
      ).padStart(2, "0"),

      seconds: String(
        Math.floor((difference / 1000) % 60)
      ).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
      <div className="mb-4 flex items-center gap-2">
        <Clock
          size={20}
          className="text-red-500"
        />

        <span className="font-semibold text-gray-900">
          Offer Ends In
        </span>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl bg-white py-3 text-center shadow-sm"
          >
            <p className="text-2xl font-bold text-red-600">
              {item.value}
            </p>

            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;