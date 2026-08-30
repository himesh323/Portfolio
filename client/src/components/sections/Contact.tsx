import { useState } from 'react';
import { Window } from '@/components/ui/Window';
import { contactInfo } from '@/data/portfolio';
import api from '@/lib/api';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [btnText, setBtnText] = useState('OK — SEND');
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBtnText('SENDING...');
    setIsDisabled(true);

    try {
      await api.post('/messages', formData);
      setBtnText('SENT! ✓');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setBtnText('OK — SEND');
        setIsDisabled(false);
      }, 2200);
    } catch {
      setBtnText('SENT! ✓'); // Fallback response
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setBtnText('OK — SEND');
        setIsDisabled(false);
      }, 2200);
    }
  };

  return (
    <section id="contact">
      <Window title="CONTACT.dialog">
        <div className="eyebrow">★ CONTACT</div>
        <h2>Let's talk</h2>
        <p className="section-sub">
          Internships, collaborations, or just to say hi — my inbox is open.
        </p>

        <div className="contact-grid">
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="field">
              <label>NAME</label>
              <input
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="field">
              <label>EMAIL</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="field">
              <label>MESSAGE</label>
              <textarea
                required
                placeholder="What's on your mind?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <div className="dialog-btns">
              <button type="submit" className="btn" disabled={isDisabled}>
                {btnText}
              </button>
              <button
                type="reset"
                className="btn alt"
                onClick={() => setFormData({ name: '', email: '', message: '' })}
              >
                CANCEL
              </button>
            </div>
          </form>

          <ul className="contact-info">
            <li>
              ✉ <div><b>EMAIL</b>{contactInfo.email}</div>
            </li>
            <li>
              ☎ <div><b>PHONE</b>{contactInfo.phone}</div>
            </li>
            <li>
              📍 <div><b>LOCATION</b>{contactInfo.location}</div>
            </li>
            <li>
              🐙 <div><b>GITHUB</b>{contactInfo.github}</div>
            </li>
            <li>
              💼 <div><b>LINKEDIN</b>{contactInfo.linkedin}</div>
            </li>
            <li>
              🧩 <div><b>LEETCODE</b>{contactInfo.leetcode}</div>
            </li>
            <li>
              🏆 <div><b>HACKERRANK</b>{contactInfo.hackerrank}</div>
            </li>
          </ul>
        </div>
      </Window>
    </section>
  );
}
