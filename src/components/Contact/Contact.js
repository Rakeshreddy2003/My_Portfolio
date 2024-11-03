import React, { useState } from 'react';
import '../../css/Contact.css';

const Contact = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };
const handlsubmit= ()=>{
  console.log('msg sent')
}
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">
        Feel free to reach out if you're interested in collaborating on projects, discussing ideas, or just grabbing a cup of coffee together
        </p>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Info</h3>
            <p>Email: <a href="mailto:rakeshreddysarikonda11@gmail.com">rakeshreddysarikonda11@gmail.com</a></p>
            <p>Phone: <a href="tel:+919949860490">+91 7981631520</a></p>
            <p>Location: Hyderabad, India</p>
          </div>
          <form className="contact-form" onSubmit={handlsubmit}>
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" required></textarea>

            {/* Star Rating Section */}
            <div className="rating-section">
              <p>Rate your experience:</p>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${star <= rating ? 'filled' : ''}`}
                    onClick={() => handleRating(star)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>

            <button type="submit" >Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
