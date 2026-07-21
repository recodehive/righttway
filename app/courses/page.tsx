import Link from 'next/link';
import { BookOpen, FlaskConical, BarChart3, Video, Clock, Users, ArrowRight } from 'lucide-react';

const courses = [
  {
    icon: BookOpen,
    title: '8th  Standard',
    badge: 'All Boards',
    boards: ['State Board'],
    desc: 'Comprehensive foundation coaching covering all major boards. We focus on building strong conceptual understanding across Mathematics, Science, Social Studies, and Languages with weekly assessments to track progress.',
    schedule: 'Mon to Fri | 7:30 AM - 9:00 AM',
    students: '100+ enrolled',
  },
  {
    icon: FlaskConical,
    title: '9th  Standard',
    badge: 'All Boards',
    boards: ['State Board'],
    desc: 'Comprehensive foundation coaching covering all major boards. We focus on building strong conceptual understanding across Mathematics, Science, Social Studies, and Languages with weekly assessments to track progress.',
    schedule: 'Mon to Fri | 7:30 AM - 9:00 AM',
    students: '120+ enrolled',
  },
  {
    icon: BarChart3,
    title: '10th  Standard',
    badge: 'All Boards',
    boards: ['State Board'],
    desc: 'Comprehensive foundation coaching covering all major boards. We focus on building strong conceptual understanding across Mathematics, Science, Social Studies, and Languages with weekly assessments to track progress.',
    schedule: 'Mon to Fri | 7:30 AM - 9:00 AM',
    students: '110+ enrolled',
  },

  {
    icon: Video,
    title: 'Web Coaching',
    badge: 'Online',
    boards: ['All Boards', 'Self-paced'],
    desc: 'Recorded video sessions by our expert faculty covering key concepts across subjects. Perfect for revision, makeup classes, or students who cannot attend in-person sessions. Learn at your own pace.',
    schedule: 'Self-paced, 24/7 access',
    students: '1000+ enrolled',
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#020817', padding: '80px 0 60px' }}>
        <div className="container-max">
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748B', marginBottom: 12 }}>
            <Link href="/" style={{ color: '#64748B', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: '#EAB308' }}>Courses</span>
          </div>
          <h1 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', color: '#fff', lineHeight: 1.1 }}>
            Our Courses
          </h1>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 18, color: '#E2E8F0', marginTop: 16, maxWidth: 560 }}>
            From foundation to competitive entrance exams, we have a course designed for every stage of your academic journey.
          </p>
        </div>
      </section>

      {/* Course Cards */}
      <section style={{ background: '#F1F5F9', padding: '80px 0' }}>
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
            {courses.map((course, i) => {
              const Icon = course.icon;
              return (
                <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', padding: '32px' }}>
                  <div style={{
                    width: 52, height: 52, background: 'rgba(33,50,185,0.08)', borderRadius: 12,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
                  }}>
                    <Icon size={24} color="#2132B9" />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: '#020817', flex: 1, paddingRight: 12 }}>
                      {course.title}
                    </h3>
                    <span className="badge badge-warning" style={{ flexShrink: 0 }}>{course.badge}</span>
                  </div>

                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                    {course.boards.map((b, j) => (
                      <span key={j} className="badge badge-default" style={{ fontSize: 11 }}>{b}</span>
                    ))}
                  </div>

                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, lineHeight: '26px', color: '#475569', flex: 1, marginBottom: 24 }}>
                    {course.desc}
                  </p>

                  <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: 20, marginBottom: 20 }}>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                      <Clock size={14} color="#64748B" />
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748B' }}>{course.schedule}</span>
                    </div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <Users size={14} color="#64748B" />
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748B' }}>{course.students}</span>
                    </div>
                  </div>

                  <Link href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', gap: 8 }}>
                    Enquire for This Course <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#2132B9', padding: '72px 0' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 36, color: '#fff', marginBottom: 16 }}>
            Not Sure Which Course Is Right?
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 18, color: 'rgba(255,255,255,0.8)', marginBottom: 32 }}>
            Talk to our counsellors and we will help you find the perfect fit.
          </p>
          <Link
            href="/contact"
            style={{
              background: '#fff', color: '#2132B9', fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600, fontSize: 14, padding: '16px 28px', borderRadius: 9999,
              display: 'inline-flex', alignItems: 'center', textDecoration: 'none',
            }}
          >
            Get Free Counselling
          </Link>
        </div>
      </section>
    </>
  );
}
