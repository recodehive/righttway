'use client';
import Link from 'next/link';
import { useState } from 'react';
import { MapPin, Phone, Mail, ChevronDown, ChevronUp, Send } from 'lucide-react';

const faqs = [
  {
    q: 'What boards do you coach for?',
    a: 'We coach for CBSE, ICSE, and Kerala State Board from 8th to 12th Standard. We also offer specialised preparation for JEE, NEET, and KEAM.',
  },
  {
    q: 'What are the batch timings?',
    a: 'Timings vary by course. Foundation batches run evenings from 4:00 PM to 6:00 PM, while competitive exam batches also have early morning sessions from 6:00 AM to 8:00 AM. Contact us for a full schedule.',
  },
  {
    q: 'Do you offer demo classes?',
    a: 'Yes, we offer a free demo class for all courses. You can attend one session before enrolling to see if the teaching style suits you.',
  },
  {
    q: 'Is online coaching available?',
    a: 'Yes, we have our Web Coaching series with recorded video sessions. For live online sessions, please enquire directly with us.',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', grade: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) errs.phone = 'Enter a valid 10-digit phone number';
    if (!form.grade) errs.grade = 'Please select a grade';
    return errs;
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <>
      <section style={{ background: '#020817', padding: '80px 0 60px' }}>
        <div className="container-max">
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748B', marginBottom: 12 }}>
            <Link href="/" style={{ color: '#64748B', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: '#EAB308' }}>Contact</span>
          </div>
          <h1 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', color: '#fff', lineHeight: 1.1 }}>
            Contact Us
          </h1>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 18, color: '#E2E8F0', marginTop: 16 }}>
            We are here to answer any questions you have about our courses and admissions.
          </p>
        </div>
      </section>

      <section style={{ background: '#F1F5F9', padding: '80px 0' }}>
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
            {/* Form */}
            <div>
              {submitted ? (
                <div className="card" style={{ textAlign: 'center', padding: 48 }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 22, color: '#020817', marginBottom: 12 }}>
                    Message Received!
                  </h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: '#475569' }}>
                    Our team will reach out to you within 24 hours. Thank you for your interest in Righttway.
                  </p>
                </div>
              ) : (
                <div className="card" style={{ padding: '40px' }}>
                  <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 24, color: '#020817', marginBottom: 28 }}>
                    Send Us a Message
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div>
                      <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 600, color: '#020817', display: 'block', marginBottom: 8 }}>
                        Full Name *
                      </label>
                      <input
                        className="input-field"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={e => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }); }}
                        style={errors.name ? { borderColor: '#DC2626' } : {}}
                      />
                      {errors.name && <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#DC2626', marginTop: 4 }}>{errors.name}</p>}
                    </div>

                    <div>
                      <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 600, color: '#020817', display: 'block', marginBottom: 8 }}>
                        Phone Number *
                      </label>
                      <input
                        className="input-field"
                        placeholder="10-digit mobile number"
                        value={form.phone}
                        onChange={e => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: '' }); }}
                        style={errors.phone ? { borderColor: '#DC2626' } : {}}
                      />
                      {errors.phone && <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#DC2626', marginTop: 4 }}>{errors.phone}</p>}
                    </div>

                    <div>
                      <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 600, color: '#020817', display: 'block', marginBottom: 8 }}>
                        Grade / Class *
                      </label>
                      <select
                        className="input-field"
                        value={form.grade}
                        onChange={e => { setForm({ ...form, grade: e.target.value }); setErrors({ ...errors, grade: '' }); }}
                        style={errors.grade ? { borderColor: '#DC2626' } : {}}
                      >
                        <option value="">Select grade</option>
                        {['8th', '9th', '10th', '11th', '12th', 'Engineering / JEE', 'Medical / NEET'].map(g => (
                          <option key={g} value={g}>{g}</option>
                        ))}
                      </select>
                      {errors.grade && <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#DC2626', marginTop: 4 }}>{errors.grade}</p>}
                    </div>

                    <div>
                      <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 600, color: '#020817', display: 'block', marginBottom: 8 }}>
                        Message (Optional)
                      </label>
                      <textarea
                        className="input-field"
                        rows={4}
                        placeholder="Any specific questions or requirements?"
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        style={{ resize: 'vertical' }}
                      />
                    </div>

                    <button
                      className="btn-primary"
                      onClick={handleSubmit}
                      style={{ width: '100%', justifyContent: 'center', gap: 8 }}
                    >
                      <Send size={16} /> Submit Enquiry
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="card" style={{ padding: '32px' }}>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: '#020817', marginBottom: 24 }}>
                  Our Location
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 40, height: 40, background: 'rgba(33,50,185,0.08)', borderRadius: 10,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <MapPin size={18} color="#2132B9" />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 14, color: '#020817', marginBottom: 4 }}>Address</div>
                      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748B', lineHeight: '20px' }}>
                        Near Town Hall, Kunnamkulam,<br />Thrissur, Kerala - 680503
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <div style={{
                      width: 40, height: 40, background: 'rgba(33,50,185,0.08)', borderRadius: 10,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <Phone size={18} color="#2132B9" />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 14, color: '#020817', marginBottom: 2 }}>Phone</div>
                      <a href="tel:+919876543210" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#2132B9', textDecoration: 'none' }}>+91 9846214009</a>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <div style={{
                      width: 40, height: 40, background: 'rgba(33,50,185,0.08)', borderRadius: 10,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <Mail size={18} color="#2132B9" />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 14, color: '#020817', marginBottom: 2 }}>Email</div>
                      <a href="mailto:info@righttway.com" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#2132B9', textDecoration: 'none' }}>info@righttway.com</a>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div style={{
                  marginTop: 24, background: 'linear-gradient(135deg, #E2E8F0 0%, #cbd5e1 100%)',
                  borderRadius: 12, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <MapPin size={32} color="#2132B9" />
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748B', marginTop: 8 }}>
                      Google Maps Embed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container-max">
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="section-label">FAQ</span>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 36, color: '#020817' }}>
                Common Questions
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12,
                    overflow: 'hidden', transition: 'box-shadow 0.2s',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                      padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    }}
                  >
                    <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, color: '#020817', textAlign: 'left' }}>
                      {faq.q}
                    </span>
                    {openFaq === i
                      ? <ChevronUp size={20} color="#2132B9" />
                      : <ChevronDown size={20} color="#64748B" />
                    }
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 24px 20px', borderTop: '1px solid #E5E7EB' }}>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: '#475569', lineHeight: '26px', paddingTop: 16 }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
