import React, { useState } from 'react';
import './Contact.css'
function Contact() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    subject: "",
    message: ""
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mbllbadr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccessModal(true);
        setFormData({ full_name: "", email: "", phone_number: "", subject: "", message: "" });
      } else {
        setShowFailureModal(true);
      }
    } catch (error) {
      setShowFailureModal(true);
    }
  };

  return (
    <div>
        <h2 className='h2' >Let's work together</h2>
      <section className="formulaire" id='contact' data-aos="fade-left">
        <h2 className="heading">Contact <span>Us</span></h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-box">
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                value={formData.full_name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="number"
                name="phone_number"
                placeholder="Phone Number"
                value={formData.phone_number}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="input-group-2">
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <input type="submit" value="Send Message" className="btn1" />
          </div>
        </form>

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="modal" onClick={() => setShowSuccessModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <p className="text-center">Your message has been sent successfully!</p>
              <button onClick={() => setShowSuccessModal(false)} className="close-btn">Close</button>
            </div>
          </div>
        )}

        {/* Failure Modal */}
        {showFailureModal && (
          <div className="modal" onClick={() => setShowFailureModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <p className="text-center">Sorry, your message could not be sent. Please try again later.</p>
              <button onClick={() => setShowFailureModal(false)} className="close-btn">Close</button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Contact;
