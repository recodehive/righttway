'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ScrollPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('achievementsPopupShown')) {
      setDismissed(true);
    }
  }, []);

  useEffect(() => {
    if (dismissed || show) return;
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      if (scrolled >= 0.7) {
        setShow(true);
        sessionStorage.setItem('achievementsPopupShown', '1');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed, show]);

  if (!show || dismissed) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={() => setDismissed(true)}
    >
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-white/10"
        style={{ animation: 'popupIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a2e]">
          <span className="text-white font-bold text-sm tracking-wide uppercase opacity-80">
            🏆 Student Achievements
          </span>
          <button
            onClick={() => setDismissed(true)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-red-500 text-white text-xl font-bold transition-all duration-200 hover:scale-110 hover:shadow-lg"
            aria-label="Close popup"
          >
            ✕
          </button>
        </div>

        {/* Image */}
        <Image
          src="https://github.com/user-attachments/assets/4218ab32-ed17-43d2-accd-777d6471b537"
          alt="Rightt Way - Student Achievements"
          width={600}
          height={700}
          className="w-full h-auto max-h-[75vh] object-contain block"
          unoptimized
        />

        {/* Footer */}
        <div className="bg-[#1a1a2e] px-4 py-3 text-center">
          <button
            onClick={() => setDismissed(true)}
            className="w-full py-2 rounded-lg bg-white/10 hover:bg-red-500 text-white text-sm font-semibold tracking-wide transition-all duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
