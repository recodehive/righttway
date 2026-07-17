'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Star } from 'lucide-react';

const resultsByYear: Record<string, { name: string; exam: string; score: string; badge: string }[]> = {
  '2024': [
    { name: 'Arjun Menon', exam: 'JEE Advanced 2024', score: 'AIR 847', badge: 'Top Rank' },
    { name: 'Devika Nair', exam: 'NEET 2024', score: '672/720', badge: 'Top Rank' },
    { name: 'Rahul Krishnan', exam: 'KEAM 2024', score: '99.2 %ile', badge: 'Top Rank' },
    { name: 'Sneha Pillai', exam: 'Class 10 CBSE', score: '97.4%', badge: 'District Topper' },
    { name: 'Vishnu Raj', exam: 'JEE Main 2024', score: '98.6 %ile', badge: 'Top 100' },
    { name: 'Ananya Mohan', exam: 'NEET 2024', score: '655/720', badge: 'Top Rank' },
  ],
  '2023': [
    { name: 'Kiran Thomas', exam: 'JEE Advanced 2023', score: 'AIR 1240', badge: 'Top Rank' },
    { name: 'Meera Suresh', exam: 'NEET 2023', score: '660/720', badge: 'Top Rank' },
    { name: 'Arun Kumar', exam: 'KEAM 2023', score: '98.8 %ile', badge: 'Top Rank' },
    { name: 'Priya Nambiar', exam: 'Class 12 State', score: '96.8%', badge: 'State Rank' },
    { name: 'Rohith Menon', exam: 'JEE Main 2023', score: '97.9 %ile', badge: 'Top 100' },
    { name: 'Lakshmi Devi', exam: 'NEET 2023', score: '648/720', badge: 'Top Rank' },
  ],
  '2022': [
    { name: 'Abhijith P', exam: 'JEE Advanced 2022', score: 'AIR 1650', badge: 'Top Rank' },
    { name: 'Neethu Varghese', exam: 'NEET 2022', score: '645/720', badge: 'Top Rank' },
    { name: 'Sreedev R', exam: 'KEAM 2022', score: '98.5 %ile', badge: 'Top Rank' },
    { name: 'Anjali Biju', exam: 'Class 10 State', score: 'A+ All Subjects', badge: 'State Topper' },
    { name: 'Vivek Shenoy', exam: 'JEE Main 2022', score: '97.2 %ile', badge: 'Top 100' },
    { name: 'Dhanya Rajan', exam: 'NEET 2022', score: '638/720', badge: 'Top Rank' },
  ],
};

export default function ResultsPage() {
  const [activeYear, setActiveYear] = useState('2022');
  const results = resultsByYear[activeYear];

  return (
    <>
      <section style={{ background: '#020817', padding: '80px 0 60px' }}>
        <div className="container-max">
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748B', marginBottom: 12 }}>
            <Link href="/" style={{ color: '#64748B', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: '#EAB308' }}>Results</span>
          </div>
          <h1 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', color: '#fff', lineHeight: 1.1 }}>
            Ranks and Results
          </h1>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 18, color: '#E2E8F0', marginTop: 16 }}>
            Our students consistently achieve outstanding results in board exams and competitive entrance tests.
          </p>
        </div>
      </section>

      <section style={{ background: '#F1F5F9', padding: '80px 0' }}>
        <div className="container-max">
          {/* Year tabs */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
            {['2022', '2023', '2024'].map(year => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                style={{
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 14,
                  padding: '10px 24px', borderRadius: 9999, border: 'none', cursor: 'pointer',
                  background: activeYear === year ? '#2132B9' : '#fff',
                  color: activeYear === year ? '#fff' : '#475569',
                  boxShadow: activeYear === year ? 'rgba(33,50,185,0.2) 0px 4px 12px' : 'rgba(0,0,0,0.05) 0px 1px 3px',
                  transition: 'all 0.2s',
                }}
              >
                {year === '2024' ? '2023 - 2024 batch' : year === '2023' ? '2024 -2025 batch' : year === '2022' ? '2025 - 2026 batch' : year}
              </button>
            ))}
          </div>

          {activeYear === '2024' ? (
            <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
              <Image
                src="/images/2024.png"
                alt="Congrats to our 2024 achievers"
                width={1024}
                height={1600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          ) : activeYear === '2023' ? (
            <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
              <Image
                src="/images/2024%202nd%20image.jpeg"
                alt="Congrats to our 2024-2025 batch achievers"
                width={1024}
                height={1600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          ) : activeYear === '2022' ? (
            <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
              <Image
                src="/images/2025.jpeg"
                alt="Congrats to our 2025-2026 batch achievers"
                width={1024}
                height={1600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
              {results.map((r, i) => (
                <div key={i} className="card" style={{ textAlign: 'center', padding: '32px 24px' }}>
                  <div style={{
                    width: 80, height: 80, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #E2E8F0 0%, #cbd5e1 100%)',
                    margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32,
                  }}>
                    🎓
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 18, color: '#020817', marginBottom: 4 }}>
                    {r.name}
                  </div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748B', marginBottom: 12 }}>
                    {r.exam}
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 28, color: '#EAB308', marginBottom: 16 }}>
                    {r.score}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 3, marginBottom: 12 }}>
                    {[1,2,3,4,5].map(j => <Star key={j} size={14} fill="#EAB308" color="#EAB308" />)}
                  </div>
                  <span className="badge badge-warning">{r.badge}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
