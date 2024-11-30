"use client";
import Link from "next/link";

const Confirmed = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Main Container */}
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-3xl text-center">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-900">Booking Confirmed!</h1>
        <p className="text-lg text-gray-700 mt-6">
          Congratulations! Your therapy session has been successfully scheduled.
          We are looking forward to helping you on your journey to better mental health.
        </p>

        {/* Instructions Section */}
        <div className="mt-8 text-left">
          <p className="italic text-lg text-gray-700">i. Instructions</p>
          <ul className="list-disc list-inside mt-4 text-lg text-gray-700 space-y-3">
            <li>
              A confirmation email with all the session details has been sent to{" "}
              <span className="font-semibold text-blue-600">amal123@gmail.com</span>
            </li>
            <li>
              If this is your first session, consider jotting down any key points or questions
              you want to discuss.
            </li>
          </ul>
        </div>

        {/* Back to Home Button */}
        <div className="mt-10">
          <button
            onClick={() => (window.location.href = "/")} // Redirect to home
            className="w-full py-4 text-xl bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2"
          >
            <Link
            href={'/TherapistPortfolio'}
            >
            Back to home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Confirmed;
