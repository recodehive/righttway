'use client';
import Link from 'next/link';
import { MapPin, Phone, Mail, ExternalLink, Map } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#020817', color: '#fff', paddingTop: 60, paddingBottom: 0 }}>
      <div className="container-max">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, paddingBottom: 48 }}>
          {/* Col 1 */}
          <div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 22, color: '#fff', marginBottom: 6 }}>
              Righttway
            </div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#64748B', marginBottom: 16 }}>Since 2010</div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748B', lineHeight: '22px' }}>
              Kunnamkulam&apos;s Trusted Coaching Centre Since 2010. Guiding students from 8th Standard to Engineering entrance success.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 20 }}>
              Quick Links
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Home', 'About', 'Courses', 'Results', 'Web Coaching', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748B', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = '#EAB308'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = '#64748B'}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 20 }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <MapPin size={16} color="#EAB308" style={{ marginTop: 2, flexShrink: 0 }} />
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748B', lineHeight: '20px' }}>
                  2nd floor , central plaza, SH69, Kunnamkulam, Kerala 680503
                </span>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <Phone size={16} color="#EAB308" />
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748B' }}>+91 9846214009, +91  7736859773</span>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <Mail size={16} color="#EAB308" />
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748B' }}>righttwaykkm@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Col 4 */}
          <div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 20 }}>
              Follow Us
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a
                href="https://www.facebook.com/righttwaykkm/"
                style={{ display: 'flex', gap: 10, alignItems: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748B', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = '#EAB308'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = '#64748B'}
              >
                <ExternalLink size={16} color="#EAB308" />
                Facebook Page
              </a>
              <a
                href="https://share.google/bgY0zrdMzEGo4O6Fn"
                style={{ display: 'flex', gap: 10, alignItems: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748B', transition: 'color 0.2s' }}
              >
                <Map size={16} color="#EAB308" />
                Google Maps
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #161C2D', padding: '20px 0', textAlign: 'center' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#475569' }}>
            2026 Righttway Coaching Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
