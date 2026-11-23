import { useState } from "react";
import { Camera, MessageCircle, Play, Mail, Phone } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section className="contact-page page-section">
      <div className="page-title">
        <span className="kicker">CUSTOMER CARE</span>
        <h1>Let’s talk.</h1>
      </div>
      <div className="contact-layout">
        <div className="contact-aside">
          <h2>How can we help?</h2>
          <p>Our team is available Monday through Friday, 9am–6pm.</p>
          <a href="mailto:hello@azure.com">
            <Mail /> hello@azure.com
          </a>
          <a href="tel:+880123456789">
            <Phone /> +880 1234 567 89
          </a>
          <div className="socials">
            <Camera />
            <MessageCircle />
            <Play />
          </div>
          <div className="faq">
            <h3>Frequently asked</h3>
            <details>
              <summary>What is your return policy?</summary>
              <p>
                We accept unworn items in original packaging within seven days.
              </p>
            </details>
            <details>
              <summary>Do you ship internationally?</summary>
              <p>We currently ship to more than 18 international markets.</p>
            </details>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="form-grid">
            <label>
              Name
              <input required />
            </label>
            <label>
              Email
              <input required type="email" />
            </label>
            <label className="full">
              Subject
              <select required defaultValue="">
                <option value="" disabled>
                  Choose a topic
                </option>
                <option>Order support</option>
                <option>Returns</option>
                <option>Product question</option>
              </select>
            </label>
            <label className="full">
              Message
              <textarea required rows="6" />
            </label>
          </div>
          <button className="lime-button">Send message</button>
          {sent && (
            <p className="success-text">
              Your message has been received. We’ll be in touch soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
