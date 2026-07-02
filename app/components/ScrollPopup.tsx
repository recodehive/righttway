'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ScrollPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (dismissed || ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        if (scrollPercent >= 60) {
          setShow(true);
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!show || dismissed) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={() => setDismissed(true)}
    >
      <div
        className="relative mx-4 max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow-md transition-colors"
          aria-label="Close popup"
        >
          ✕
        </button>
        <Image
          src="https://github.com/user-attachments/assets/4218ab32-ed17-43d2-accd-777d6471b537"
          alt="Rightt Way - Student Achievements"
          width={600}
          height={700}
          className="w-full h-auto"
          unoptimized
        />
      </div>
    </div>
  );
}
