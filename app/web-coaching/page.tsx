'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Play, BookOpen } from 'lucide-react';

const topics = [
  { subject: 'Mathematics', title: 'Circles and Tangents', grade: '10th', icon: '⭕' },
  { subject: 'Mathematics', title: 'Complex Numbers', grade: '11th / 12th', icon: '🔢' },
  { subject: 'Mathematics', title: 'Coordinate Geometry', grade: '10th / 11th', icon: '📐' },
  { subject: 'Physics', title: 'Laws of Motion', grade: '11th', icon: '⚡' },
  { subject: 'Chemistry', title: 'Chemical Bonding', grade: '11th', icon: '🧪' },
  { subject: 'Biology', title: 'Cell Division', grade: '11th / 12th', icon: '🔬' },
];

export default function WebCoachingPage() {
  const [form, setForm] = useState({ name: '', topic: '', grade: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (form.name && form.topic && form.grade) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <section style={{ background: '#020817', padding: '80px 0 60px' }}>
        <div className="container-max">
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748B', marginBottom: 12 }}>
            <Link href="/" style={{ color: '#64748B', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: '#EAB308' }}>Web Coaching</span>
          </div>
          <h1 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', color: '#fff', lineHeight: 1.1 }}>
            Web Coaching Series
          </h1>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 18, color: '#E2E8F0', marginTop: 16, maxWidth: 560 }}>
            Our faculty explains key concepts through video series for students to learn anytime, anywhere.
          </p>
        </div>
      </section>

      {/* Video topics */}
      <section style={{ background: '#F1F5F9', padding: '80px 0' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">Available Topics</span>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 36, color: '#020817' }}>
              Browse Our Video Library
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {topics.map((t, i) => (
              <div key={i} className="card" style={{ padding: '28px' }}>
                {/* YouTube placeholder */}
                <div style={{
                  background: 'linear-gradient(135deg, #020817 0%, #1e293b 100%)',
                  borderRadius: 12, aspectRatio: '16/9', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', marginBottom: 20, position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{ fontSize: 36, marginRight: 12 }}>{t.icon}</div>
                  <div style={{
                    width: 48, height: 48, background: 'rgba(234,179,8,0.9)', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', transition: 'transform 0.2s',
                  }}>
                    <Play size={20} fill="#020817" color="#020817" />
                  </div>
                </div>
                <span className="badge badge-default" style={{ marginBottom: 10 }}>{t.subject}</span>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 18, color: '#020817', marginBottom: 6 }}>
                  {t.title}
                </h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748B' }}>Grade: {t.grade}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request form */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container-max">
          <div style={{ maxWidth: 560, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <span className="section-label">Request a Topic</span>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 36, color: '#020817' }}>
                Can&apos;t Find Your Topic?
              </h2>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: '#64748B', marginTop: 12 }}>
                Tell us what you need and our faculty will create a video for it.
              </p>
            </div>

            {submitted ? (
              <div className="card" style={{ textAlign: 'center', padding: 48 }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 22, color: '#020817', marginBottom: 12 }}>
                  Request Submitted!
                </h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: '#475569' }}>
                  Our team will review your request and upload the topic video within 3-5 working days.
                </p>
              </div>
            ) : (
              <div className="card" style={{ padding: '40px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div>
                    <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 600, color: '#020817', display: 'block', marginBottom: 8 }}>
                      Your Name
                    </label>
                    <input
                      className="input-field"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 600, color: '#020817', display: 'block', marginBottom: 8 }}>
                      Topic You Need
                    </label>
                    <input
                      className="input-field"
                      placeholder="e.g. Quadratic Equations"
                      value={form.topic}
                      onChange={e => setForm({ ...form, topic: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 600, color: '#020817', display: 'block', marginBottom: 8 }}>
                      Grade / Class
                    </label>
                    <select
                      className="input-field"
                      value={form.grade}
                      onChange={e => setForm({ ...form, grade: e.target.value })}
                    >
                      <option value="">Select your grade</option>
                      {['8th', '9th', '10th', '11th', '12th', 'JEE', 'NEET'].map(g => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    className="btn-primary"
                    onClick={handleSubmit}
                    style={{ width: '100%', justifyContent: 'center', gap: 8 }}
                  >
                    <BookOpen size={16} /> Submit Request
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
