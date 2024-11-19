import React, { useState } from "react";

function MeetBtn() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenMeet = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();

    const startHour = 10;
    const endHour = 20;

    if (
      (currentHour > startHour ||
        (currentHour === startHour && currentMinutes >= 0)) &&
      (currentHour < endHour ||
        (currentHour === endHour && currentMinutes === 0))
    ) {
      window.open("https://meet.google.com/", "_blank");
    } else {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="text-center">
      <button
        onClick={handleOpenMeet}
        className="btn bg-slate-500 text-white hover:bg-slate-700"
      >
        Talk to Expert
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full border shadow-2xl">
            <h3 className="text-lg font-semibold mb-4">Consultation Time</h3>
            <p className="text-gray-700">
              Google Meet is available between <strong>10:00 AM</strong> and{" "}
              <strong>8:00 PM</strong>.
            </p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="btn bg-red-500 text-white hover:bg-red-700 px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MeetBtn;
