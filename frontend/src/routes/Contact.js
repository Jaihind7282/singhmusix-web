import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://singhmusix-web.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      navigate("/thank-you");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Error saving contact");
    }
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="about-container-2">
        <h1>Sing With Singh Musix</h1>
        <p>
          Welcome to Singhmusix! We bring your musical vision to life. Our
          state-of-the-art studio caters to solo artists, bands, and producers.
          Explore our services and let’s create professional-quality music
          together!
        </p>
        <Link to="/register" className="button-on-image">
          <h2>Register Now</h2>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
