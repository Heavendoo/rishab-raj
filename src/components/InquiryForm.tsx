import { useState } from 'react';
import './InquiryForm.css';

interface InquiryFormProps {
  propertyTitle: string;
}

const InquiryForm = ({ propertyTitle }: InquiryFormProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In demo, show alert
    alert(`Thank you ${name}! We'll contact you shortly about "${propertyTitle}".`);
    setName('');
    setPhone('');
    setEmail('');
  };

  const whatsappMessage = encodeURIComponent(
    `Hi, I am interested in "${propertyTitle}". Please share more details.`
  );

  return (
    <div className="inquiry">
      <h3>📩 Interested? Get in Touch</h3>

      <form className="inquiry-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="tel"
          className="form-input"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="email"
          className="form-input"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-primary form-btn">
          I'm Interested
        </button>
      </form>

      <div className="form-divider">or</div>

      <a
        href={`https://wa.me/918690906006?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp whatsapp-btn"
      >
        💬 Chat on WhatsApp
      </a>
    </div>
  );
};

export default InquiryForm;
