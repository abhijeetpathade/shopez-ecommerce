import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">

      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-wrapper">

        {/* Contact Information */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Email:</strong> support@shopez.com</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Address:</strong> Mumbai, India</p>

          <p className="contact-desc">
            Have questions about our products or your order?  
            Our support team is here to help you.
          </p>
        </div>

        {/* Contact Form */}
        <form className="contact-form">

          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>

    </div>
  );
}

export default Contact;