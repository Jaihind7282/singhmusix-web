import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MusicStudioForm = () => {
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    songName: "",
    recordingDate: "",
    notes: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://singhmusix-web.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerDetails),
      });

      const data = await response.json();
      if (response.ok) {
        navigate("/thank-you");
        console.log(data);
        setCustomerDetails({
          name: "",
          email: "",
          phone: "",
          address: "",
          songName: "",
          recordingDate: "",
          notes: "",
        });
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="register-container">
      <h2>Music Studio Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={customerDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={customerDetails.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={customerDetails.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            value={customerDetails.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="songName"
            placeholder="Enter the song name"
            value={customerDetails.songName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            className="date"
            type="date"
            name="recordingDate"
            value={customerDetails.recordingDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <textarea
            name="notes"
            placeholder="Any additional notes..."
            value={customerDetails.notes}
            onChange={handleChange}
          />
        </div>
        <button type="submit" method="post">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MusicStudioForm;
