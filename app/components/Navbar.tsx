'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Results', href: '/results' },
  { label: 'Web Coaching', href: '/web-coaching' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#fff',
        borderBottom: '1px solid #E2E8F0',
        padding: '16px 32px',
        boxShadow: scrolled
          ? 'rgba(0,0,0,0.15) 0px 8px 32px 0px'
          : 'rgba(0,0,0,0.05) 0px 2px 8px 0px',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 22, color: '#020817', lineHeight: 1.1 }}>
              Righttway
            </div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#64748B', fontWeight: 400 }}>
              Since 2010
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ gap: 32, alignItems: 'center', display: isMobile ? 'none' : 'flex' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 16,
                color: '#020817',
                textDecoration: 'none',
                fontWeight: 400,
                transition: 'color 0.2s',
                padding: '4px 0',
                borderBottom: '2px solid transparent',
              }}
              onMouseEnter={e => {
                (e.target as HTMLElement).style.color = '#2132B9';
                (e.target as HTMLElement).style.borderBottomColor = '#2132B9';
              }}
              onMouseLeave={e => {
                (e.target as HTMLElement).style.color = '#020817';
                (e.target as HTMLElement).style.borderBottomColor = 'transparent';
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: isMobile ? 'none' : 'flex' }}>
          <Link href="/contact" className="btn-primary">
            Enquire Now
          </Link>
        </div>

        {/* Hamburger */}
        <button
          style={{ display: isMobile ? 'flex' : 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} color="#020817" /> : <Menu size={24} color="#020817" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 65,
            left: 0,
            right: 0,
            background: '#fff',
            borderTop: '1px solid #E2E8F0',
            padding: '24px 16px',
            boxShadow: 'rgba(0,0,0,0.15) 0px 20px 40px 0px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            zIndex: 99,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 16,
                color: '#020817',
                textDecoration: 'none',
                padding: '12px 16px',
                borderRadius: 8,
                transition: 'background 0.2s',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" onClick={() => setMenuOpen(false)} style={{ marginTop: 16 }}>
            Enquire Now
          </Link>
        </div>
      )}
    </nav>
  );
}
