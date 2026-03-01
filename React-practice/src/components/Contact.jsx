import React from "react";
import "../styles/Contact.css";
const Contact = () => {
  return (
   <div className="contact-page">
      <div className="contact-card">
        <form>
          <label>NAME:</label>
          <input
            type="text"
            placeholder="[ Enter here ]"
          />
          
          <label>E-MAIL:</label>
          <textarea
            placeholder="[ Text area ]"
            rows="6"
          ></textarea>

          <label>MESSAGE:</label>
          <textarea
            placeholder="[ Text area ]"
            rows="6"
          ></textarea>
          

          <button type="submit">
            <span className="arrow">▶</span> [ Execute ]
          </button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
