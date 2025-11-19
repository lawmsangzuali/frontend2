import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Feedback.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendMail = async (e) => {
    e.preventDefault();

    const params = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      email_id: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_57mz8ij",
        "template_chr6yzo",
        params,
        "c_crO6oE62atSX0FN"
      );
      setStatus("Feedback sent successfully!");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send feedback.");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-text">
          <h2>
            Feed <span>back</span>
          </h2>
          <p>
            "We’d love to hear from you! Your feedback helps us improve and serve you better."
          </p>
          <a href="mailto:info@shikshacom.com" className="contact-email">
             info@shikshacom.com
          </a>

        </div>

        <form className="contact-form" onSubmit={sendMail}>
          <label>
            Name (required)
            <div className="name-inputs">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </label>

          <label>
            Email (required)
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Message (required)
            <textarea
              name="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>

          <button type="submit">Send</button>

          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Feedback; 


