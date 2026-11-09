import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((previousData) => ({ ...previousData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const previousMessages = JSON.parse(localStorage.getItem('cavmsMessages') || '[]');
    const newMessage = { ...formData, id: Date.now(), submittedAt: new Date().toISOString() };
    localStorage.setItem('cavmsMessages', JSON.stringify([...previousMessages, newMessage]));
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  }

  return (
    <section className="container page-section">
      <span className="eyebrow">WE'RE HERE TO HELP</span>
      <h1 className="page-title">Contact us</h1>
      <p className="lead">Have a question, suggestion, or idea for an activity? Send us a message.</p>
      <div className="contact-layout">
        <div className="contact-info">
          <h2>Let's connect</h2>
          <p>Use the form to contact the CAVMS student team. This demonstration stores your message in this browser.</p>
          <div className="contact-detail"><strong>Email</strong><span>student.activities@university.edu</span></div>
          <div className="contact-detail"><strong>Location</strong><span>University Student Center</span></div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && <div className="success-message" role="status">Thank you! Your message has been saved in this browser.</div>}
          <label>Full name<input name="name" value={formData.name} onChange={handleChange} required /></label>
          <label>Email address<input type="email" name="email" value={formData.email} onChange={handleChange} required /></label>
          <label>Subject<input name="subject" value={formData.subject} onChange={handleChange} required /></label>
          <label>Message<textarea name="message" rows="5" value={formData.message} onChange={handleChange} required /></label>
          <button className="button" type="submit">Send message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;