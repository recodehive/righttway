'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, FlaskConical, BarChart3, Trophy, Heart, Video, Star, CheckCircle, Users, ClipboardList, MessageSquare, Zap, ArrowRight } from 'lucide-react';
import ScrollPopup from './ScrollPopup';

function useCountUp(target: number, duration: number, enabled: boolean): number {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setValue(target);
    };
    const rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, enabled]);
  return value;
}

function AnimatedStat({ value, label, index }: { value: string; label: string; index: number }) {
  const [enabled, setEnabled] = useState(false);
  const match = value.match(/^(\d+)(.*)$/);
  const num = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const count = useCountUp(num, 2000, enabled);

  useEffect(() => {
    const timer = setTimeout(() => setEnabled(true), 800 + index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`stat-badge stat-badge-${index + 1}`}
      style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', borderRadius: 12, padding: '10px 18px', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', gap: 8 }}
    >
      <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 22, color: '#EAB308' }}>{count}{suffix}</span>
      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#CBD5E1', fontWeight: 500 }}>{label}</span>
    </div>
  );
}

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '5000+', label: 'Students Shaped' },
  { value: '100%', label: 'Recommend Us' },
];

const courses = [
  { icon: BookOpen, title: '8th Standard', desc: 'State Board coaching with personal attention and weekly assessments.', badge: 'All Boards' },
  { icon: FlaskConical, title: '9th Science', desc: 'Physics, Chemistry, Math and Biology with expert faculty and doubt-clearing sessions.', badge: 'PCM / PCB' },
  { icon: BarChart3, title: '10th Science', desc: 'Accounts, Economics, Business Studies and B.Com coaching.', badge: 'Commerce' },
{ icon: Video, title: 'Web Coaching', desc: 'Online concept video series by our faculty. Learn anytime, anywhere.', badge: 'Online' },
];

const strengths = [
  { icon: Users, title: 'Personal Attention', desc: 'Every student gets individual guidance and customized doubt-clearing sessions.' },
  { icon: ClipboardList, title: 'Weekly Tests', desc: 'Regular assessments keep students on track and build exam temperament.' },
  { icon: MessageSquare, title: 'Parent Meetings', desc: 'Frequent Parent-Teacher Meetings keep families informed of progress.' },
  { icon: Zap, title: 'Expert Faculty', desc: 'Dedicated teachers with years of experience across all boards and subjects.' },
];

const results = [
  { name: 'Sravan', exam: 'NCERT', score: '95.2 %', badge: 'Top Rank', image: 'https://github.com/user-attachments/assets/dffac472-d1f0-4fdb-a02d-84d0952971ef' },
  { name: 'Ananya', exam: 'NCERT', score: '95.2 %', badge: 'Top Rank', image: 'https://github.com/user-attachments/assets/aac8d3ef-cf57-470f-b55a-75d83d6bf2d9' },
  { name: 'Dilna', exam: 'NCERT', score: '95.2 %', badge: 'Top Rank', image: 'https://github.com/user-attachments/assets/7d0c3c32-c2d8-40aa-93de-44b8628ab2ad' },
];

const testimonials = [
  { quote: "The guidance given by the faculty at Righttway prepares students to excel in their chosen fields and become responsible human beings.", name: 'Parent, Kunnamkulam' },
  { quote: "A fantastic coaching centre. My child improved dramatically in just one term. The weekly tests really build confidence.", name: 'Student, Class 10' },
  { quote: "Truly commendable team. The personal attention and teacher dedication make a real difference to every student.", name: 'Parent, Thrissur' },
];

export default function HomePage() {
  return (
    <>
      <ScrollPopup />
      {/* HERO */}
      <section
        style={{
          background: '#020817',
          backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(33,50,185,0.18) 0%, transparent 70%)',
          padding: '100px 0 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Gold decorative circle */}
        <div style={{
          position: 'absolute', top: -80, right: -80, width: 400, height: 400,
          borderRadius: '50%', border: '60px solid rgba(234,179,8,0.07)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: 60, right: 40, width: 160, height: 160,
          borderRadius: '50%', border: '2px solid rgba(234,179,8,0.12)', pointerEvents: 'none',
        }} />

        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            {/* Left */}
            <div>
              <span className="badge badge-warning" style={{ marginBottom: 24 }}>
                Kunnamkulam&apos;s #1 Coaching Centre
              </span>
              <h1 style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 72px)',
                lineHeight: 1.05, color: '#fff', marginBottom: 24,
              }}>
                Shaping Futures <br />
                <span style={{ color: '#EAB308' }}>Since 2010</span>
              </h1>
              <p style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: 18, lineHeight: '29.25px',
                color: '#E2E8F0', marginBottom: 36, maxWidth: 480,
              }}>
                Expert coaching for 8th, 9th, 10th grade for State Board, Trusted by 5000+ families across Kunnamkulam and Thrissur.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link href="/courses" className="btn-primary">
                  Explore Courses
                </Link>
                <Link href="/contact" className="btn-ghost-dark">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right: Photo Collage */}
            <div style={{ position: 'relative', paddingBottom: 20 }}>
              {/* Decorative dots */}
              <div className="dot-float dot-float-1" style={{ position: 'absolute', top: -28, left: 56, width: 44, height: 44, borderRadius: '50%', background: '#2132B9', zIndex: 1, pointerEvents: 'none' }} />
              <div className="dot-float dot-float-2" style={{ position: 'absolute', top: -6, right: 96, width: 28, height: 28, borderRadius: 8, background: '#2132B9', zIndex: 1, pointerEvents: 'none' }} />
              <div className="dot-float dot-float-3" style={{ position: 'absolute', bottom: 8, left: -8, width: 56, height: 56, borderRadius: '50%', background: '#EAB308', zIndex: 1, pointerEvents: 'none' }} />
              <div className="dot-float dot-float-4" style={{ position: 'absolute', bottom: 80, right: -18, width: 30, height: 30, borderRadius: '50%', background: '#2132B9', zIndex: 1, pointerEvents: 'none' }} />

              {/* 2×2 photo grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 14, position: 'relative', zIndex: 2 }}>
                {/* Top-left: classroom */}
                <div className="collage-tile collage-tile-1" style={{ borderRadius: 20, overflow: 'hidden', height: 230, background: 'linear-gradient(135deg, #1e3a5f 0%, #2d3a8c 100%)', position: 'relative' }}>
                  <Image className="collage-media" src="/images/logo.jpg" alt="Classroom at Righttway" fill style={{ objectFit: 'cover' }} />
                </div>
                {/* Top-right: building exterior (circular crop) */}
                <div className="collage-tile collage-tile-2" style={{ borderRadius: '50%', overflow: 'hidden', width: 172, height: 172, background: 'linear-gradient(135deg, #334155 0%, #475569 100%)', margin: '0 auto', border: '5px solid rgba(255,255,255,0.12)', alignSelf: 'center', position: 'relative' }}>
                  <Image className="collage-media" src="/images/rightt2.jpg" alt="Righttway Centre Building" fill style={{ objectFit: 'cover' }} />
                </div>
                {/* Bottom-left: meeting room */}
                <div className="collage-tile collage-tile-3" style={{ borderRadius: 20, overflow: 'hidden', height: 200, background: 'linear-gradient(135deg, #1e40af 0%, #2132B9 100%)', position: 'relative' }}>
                  <Image className="collage-media" src="/images/exam10.jpg" alt="Parent meeting room" fill style={{ objectFit: 'cover' }} />
                </div>
                {/* Bottom-right: study group */}
                <div className="collage-tile collage-tile-4" style={{ borderRadius: 20, overflow: 'hidden', height: 200, background: 'linear-gradient(135deg, #92400e 0%, #ca8a04 100%)', position: 'relative' }}>
                  <Image className="collage-media" src="/images/trend.jpg" alt="Students studying" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>

              {/* Stats as compact badges below collage */}
              <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap', position: 'relative', zIndex: 2 }}>
                {stats.map((s, i) => (
                  <AnimatedStat key={i} value={s.value} label={s.label} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ background: '#F1F5F9', padding: '24px 0' }}>
        <div className="container-max">
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 0, flexWrap: 'wrap',
          }}>
            {['8th', '9th', '10th','State Board', 'Since 2010'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 28px' }}>
                  <CheckCircle size={16} color="#2132B9" />
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 600, color: '#475569' }}>
                    {item}
                  </span>
                </div>
                {i < 3 && <div style={{ width: 1, height: 24, background: '#E2E8F0' }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <span className="section-label">Our Story</span>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 36, lineHeight: '40px', color: '#020817', marginBottom: 20 }}>
                Founded by a Visionary Educator
              </h2>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 18, lineHeight: '29.25px', color: '#475569', marginBottom: 20 }}>
                Righttway was founded in 2010 with a vision to establish a benchmark coaching institution in Kunnamkulam. For over 15 years, we have shaped thousands of students, providing personal attention and guided mentorship that goes beyond textbooks.
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 18, lineHeight: '29.25px', color: '#475569', marginBottom: 32 }}>
                Our philosophy goes beyond academics. We prepare students to excel in their chosen fields and become responsible, humble human beings ready for the real world.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>

            {/* Founder card */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="card" style={{ textAlign: 'center', padding: 40, maxWidth: 320, width: '100%' }}>
                <div style={{
                  width: 120, height: 120, borderRadius: '50%',
                  border: '4px solid #EAB308',
                  background: 'linear-gradient(135deg, #E2E8F0 0%, #cbd5e1 100%)',
                  margin: '0 auto 20px', position: 'relative', overflow: 'hidden',
                }}>
                  <Image src="/images/Vasan CG.png" alt="Vasan CG" fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: '#020817', marginBottom: 6 }}>
                 Vasan CG - The Founder
                </div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748B', marginBottom: 16 }}>
                  Founder and Director, Righttway
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 16 }}>
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#EAB308" color="#EAB308" />)}
                </div>
                <span className="badge badge-warning">Guru of Gurus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section style={{ background: '#F1F5F9', padding: '80px 0' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">What We Teach</span>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 36, lineHeight: '40px', color: '#020817' }}>
              Courses Offered
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {courses.map((course, i) => {
              const Icon = course.icon;
              return (
                <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    width: 48, height: 48, background: 'rgba(33,50,185,0.08)', borderRadius: 12,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16,
                  }}>
                    <Icon size={22} color="#2132B9" />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                    <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 18, color: '#020817', lineHeight: '24px', flex: 1, paddingRight: 8 }}>
                      {course.title}
                    </h3>
                    <span className="badge badge-default" style={{ flexShrink: 0, fontSize: 11 }}>{course.badge}</span>
                  </div>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, lineHeight: '24px', color: '#475569', flex: 1, marginBottom: 20 }}>
                    {course.desc}
                  </p>
                  <Link
                    href="/courses"
                    style={{
                      fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 600,
                      color: '#2132B9', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6,
                    }}
                  >
                    Know More <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">Our Strengths</span>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 36, lineHeight: '40px', color: '#020817' }}>
              Why 5000+ Families Trust Us
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {strengths.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="card" style={{ textAlign: 'center', padding: '32px 24px' }}>
                  <div style={{
                    width: 56, height: 56, background: 'rgba(33,50,185,0.08)', borderRadius: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px',
                  }}>
                    <Icon size={26} color="#2132B9" />
                  </div>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 18, color: '#020817', marginBottom: 10 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, lineHeight: '24px', color: '#475569' }}>
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section style={{ background: '#020817', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: -100, left: -100, width: 400, height: 400,
          borderRadius: '50%', border: '60px solid rgba(234,179,8,0.05)', pointerEvents: 'none',
        }} />
        <div className="container-max" style={{ position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="badge badge-warning" style={{ marginBottom: 16 }}>Our Pride</span>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 36, color: '#fff' }}>
              Students Who Made Us Proud
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24, marginBottom: 40 }}>
            {results.map((r, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #E2E8F0 0%, #cbd5e1 100%)',
                  margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                  overflow: 'hidden', position: 'relative',
                }}>
                  <Image src={r.image} alt={r.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 18, color: '#020817', marginBottom: 4 }}>
                  {r.name}
                </div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748B', marginBottom: 8 }}>{r.exam}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 24, color: '#EAB308', marginBottom: 12 }}>
                  {r.score}
                </div>
                <span className="badge badge-warning">{r.badge}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/results" className="btn-ghost-dark">
              View All Results
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: '#F1F5F9', padding: '80px 0' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">What They Say</span>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 36, color: '#020817' }}>
              Words From Our Students and Parents
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {testimonials.map((t, i) => (
              <div key={i} className="card">
                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                  {[1,2,3,4,5].map(j => <Star key={j} size={16} fill="#EAB308" color="#EAB308" />)}
                </div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, lineHeight: '26px', color: '#475569', marginBottom: 20, fontStyle: 'italic' }}>
                  &quot;{t.quote}&quot;
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 14, color: '#020817' }}>
                    {t.name}
                  </span>
                  <span className="badge badge-primary" style={{ fontSize: 11 }}>Verified Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: '#2132B9', padding: '72px 0' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 36, color: '#fff', marginBottom: 16 }}>
            Ready to Start Your Journey?
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 18, color: 'rgba(255,255,255,0.8)', marginBottom: 36 }}>
            Join hundreds of students achieving their best results at Righttway.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              style={{
                background: '#fff', color: '#2132B9', fontFamily: 'DM Sans, sans-serif',
                fontWeight: 600, fontSize: 14, padding: '16px 28px', borderRadius: 9999,
                height: 52, display: 'inline-flex', alignItems: 'center', textDecoration: 'none',
                transition: 'all 0.2s',
              }}
            >
              Enquire Now
            </Link>
            <a
              href="tel:+919876543210"
              className="btn-ghost-dark"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
