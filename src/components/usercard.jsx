import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/150"; // Placeholder image
  const name = "Parth";
  const email = "parth@example.com";
  const phone = "+1 234 567 890";
  const address = "123 Main Street, New York, NY";

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-4">
      <img className="w-24 h-24 mx-auto rounded-full" src={profilePhoto} alt="Profile" />
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-600">{phone}</p>
        <p className="text-gray-600">{address}</p>
      </div>
    </div>
  );
};

export default Usercard;
