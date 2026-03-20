import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-container">

      <span className="badge">Reach Out To Us</span>

      <h1 className="heading">
        We'd love to Hear From You.
      </h1>

      <p className="subtext">
        Or just reach out manually to{" "}
        <a href="" className="link">
          contact@prebuiltui.com
        </a>
      </p>

      <div className="contact-grid">

        {/* Email */}
        <div className="card">
          <div className="icon">📧</div>
          <p className="title">Email Support</p>
          <p className="desc">Our team can respond in real time.</p>
          <a href="mailto:contact@prebuiltui.com" className="link">
            contact@prebuiltui.com
          </a>
        </div>

        {/* Address */}
        <div className="card">
          <div className="icon">📍</div>
          <p className="title">Visit Our Office</p>
          <p className="desc">Visit our location in real life.</p>
          <span className="link">
            221b Elementary Avenue, NY
          </span>
        </div>

        {/* Phone */}
        <div className="card">
          <div className="icon">📞</div>
          <p className="title">Call Us Directly</p>
          <p className="desc">Available during working hours.</p>
          <span className="link">
            (+1) 234 - 4567 - 789
          </span>
        </div>

      </div>
    </div>
  );
}

export default Contact;