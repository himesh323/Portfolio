import { useState, useEffect } from 'react';
import { navLinks } from '@/data/portfolio';

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [time, setTime] = useState('00:00:00');

  // Clock ticker
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const h = String(d.getHours()).padStart(2, '0');
      const m = String(d.getMinutes()).padStart(2, '0');
      const s = String(d.getSeconds()).padStart(2, '0');
      setTime(`${h}:${m}:${s}`);
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  // Section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="menubar">
      <div className="logo">
        <span className="dot" /> HIMESH_OS v1.0
      </div>

      <button
        className="nav-toggle"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        MENU
      </button>

      <nav className={`menu-links ${isMobileOpen ? 'open' : ''}`}>
        {navLinks.map((link) => {
          const id = link.href.replace('#', '');
          const isActive = activeSection === id;
          return (
            <a
              key={link.href}
              href={link.href}
              className={isActive ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label.toUpperCase()}
            </a>
          );
        })}
      </nav>

      <div className="clock">{time}</div>
    </header>
  );
}
