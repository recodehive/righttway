import Link from 'next/link';
import Image from 'next/image';
import { Star, Award, Target, BookOpen } from 'lucide-react';

export default function AboutPage() {
  const faculty = [
    { name: 'Mary Elsy Varghese', subject: 'Physics', exp: '11+ Years', img: '/images/faculty/mary-elsy-varghese-physics.jpeg' },
    { name: 'Sanjana', subject: 'Chemistry', exp: '6+ Years', img: '/images/faculty/sanjana-chemistry.jpeg' },
    { name: 'Rannya P S', subject: 'Geography', exp: '8+ Years', img: '/images/faculty/rannya-ps-geography.jpeg' },
    { name: 'Honey Jaison', subject: 'Chemistry', exp: '9+ Years', img: '/images/faculty/honey-jaison-chemistry.jpeg' },
    { name: 'Jithu V A', subject: 'Maths', exp: '7+ Years', img: '/images/faculty/jithu-va-maths.jpeg' },
    { name: 'Praveesh K K', subject: 'Maths', exp: '13+ Years', img: '/images/faculty/praveesh-kk-maths.jpeg' },
    { name: 'Riya A G', subject: 'Social Science', exp: '5+ Years', img: '/images/faculty/riya-ag-social.jpeg' },
    { name: 'Rathnam', subject: 'History', exp: '15+ Years', img: '/images/faculty/rathnam-history.jpeg' },
    { name: 'Remya Biju', subject: 'Maths', exp: '10+ Years', img: '/images/faculty/remya-biju-maths.jpeg' },
    { name: 'Sheena Vasan', subject: 'Biology', exp: '12+ Years', img: '/images/faculty/sheena-vasan-biology.jpeg' },
    { name: 'Vysali', subject: 'Hindi', exp: '4+ Years', img: '/images/faculty/vysali-hindi.jpeg' },
    { name: 'Anjali', subject: 'English', exp: '9+ Years', img: '/images/faculty/anjali-english.jpeg' },
    { name: 'Shiji', subject: 'Hindi', exp: '10+ Years', img: '/images/faculty/Shiji  hinid.jpeg' },
    { name: 'Prapitha', subject: 'Hindi', exp: '10+ Years', img: '/images/faculty/co founder.jpeg' },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#020817', padding: '80px 0 60px' }}>
        <div className="container-max">
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748B', marginBottom: 12 }}>
            <Link href="/" style={{ color: '#64748B', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: '#EAB308' }}>About</span>
          </div>
          <h1 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', color: '#fff', lineHeight: 1.1 }}>
            About Righttway
          </h1>
        </div>
      </section>

      {/* Founder story */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <span className="section-label">Our Story</span>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 36, color: '#020817', marginBottom: 20 }}>
                Founded by a Visionary Educators
              </h2>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 18, lineHeight: '29.25px', color: '#475569', marginBottom: 20 }}>
                Righttway was established in 2010 with a clear mission: to create a coaching centre in Kunnamkulam that would stand apart through personal attention, rigorous academic standards, and genuine care for every student&apos;s future.
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 18, lineHeight: '29.25px', color: '#475569', marginBottom: 20 }}>
                Over 10+ years, we have shaped thousands of students across State Board syllabuses, and built a track record of strong results.
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 18, lineHeight: '29.25px', color: '#475569' }}>
                Our philosophy goes beyond academics. We prepare students to excel in their chosen fields and become responsible, humble human beings ready for the challenges ahead.
              </p>
            </div>
            <div>
              <div className="card" style={{ padding: 40, textAlign: 'center' }}>
                <div style={{
                  width: 140, height: 140, borderRadius: '50%',
                  border: '4px solid #EAB308',
                  background: 'linear-gradient(135deg, #E2E8F0 0%, #cbd5e1 100%)',
                  margin: '0 auto 20px', position: 'relative', overflow: 'hidden',
                }}>
                  <Image src="/images/Vasan CG.png" alt="Vasan CG" fill style={{ objectFit: 'cover' }} sizes="140px" />
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 22, color: '#020817', marginBottom: 6 }}>
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

      {/* Director vision */}
      <section style={{ background: '#F1F5F9', padding: '80px 0' }}>
        <div className="container-max">
          <div style={{
            maxWidth: 800, margin: '0 auto',
            borderLeft: '4px solid #EAB308',
            paddingLeft: 32,
          }}>
            <span className="section-label">Director&apos;s Vision</span>
            <blockquote style={{
              fontFamily: 'Inter, sans-serif', fontSize: 24, fontWeight: 600,
              color: '#020817', lineHeight: '34px', marginBottom: 24, fontStyle: 'italic',
            }}>
              &quot;Every student who walks through our doors carries a unique potential. Our job is not just to teach, but to ignite a lifelong love of learning and the confidence to pursue any goal they set.&quot;
            </blockquote>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, fontWeight: 600, color: '#2132B9' }}>
              Founder and Director, Righttway Coaching Centre
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">Our Team</span>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 36, color: '#020817' }}>
              Meet Our Expert Faculty
            </h2>
          </div>
          <div className="faculty-marquee">
            <div className="faculty-track">
              {[...faculty, ...faculty].map((f, i) => (
                <div key={i} className="card" style={{ textAlign: 'center', padding: '32px 24px', width: 220, flex: '0 0 auto' }}>
                  <div style={{
                    width: 80, height: 80, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #E2E8F0 0%, #cbd5e1 100%)',
                    margin: '0 auto 16px', position: 'relative', overflow: 'hidden',
                  }}>
                    <Image src={f.img} alt={f.name} fill style={{ objectFit: 'cover' }} sizes="80px" />
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 16, color: '#020817', marginBottom: 6 }}>
                    {f.name}
                  </div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748B', marginBottom: 12 }}>{f.subject}</div>
                  <span className="badge badge-default">{f.exp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#020817', padding: '80px 0' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="badge badge-warning" style={{ marginBottom: 16 }}>What Drives Us</span>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 36, color: '#fff' }}>
              Our Core Values
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[
              { icon: Target, title: 'Excellence', desc: 'We hold every student and teacher to the highest standard of academic excellence.' },
              { icon: BookOpen, title: 'Integrity', desc: 'Honest feedback and genuine guidance, always in the student\'s best interest.' },
              { icon: Award, title: 'Achievement', desc: 'Celebrating every milestone, from improved grades to top ranks in national exams.' },
              { icon: Star, title: 'Innovation', desc: 'Modern teaching methods blended with proven fundamentals for lasting understanding.' },
            ].map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="card" style={{ textAlign: 'center', padding: '32px 24px' }}>
                  <div style={{
                    width: 52, height: 52, background: 'rgba(234,179,8,0.12)', borderRadius: 12,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px',
                  }}>
                    <Icon size={24} color="#EAB308" />
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 18, color: '#020817', marginBottom: 10 }}>
                    {v.title}
                  </div>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: '#475569', lineHeight: '22px' }}>
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
