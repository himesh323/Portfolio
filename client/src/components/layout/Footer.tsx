import { heroData } from '@/data/portfolio';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="taskbar">
      <div className="start">☰ HIMESH_OS</div>
      <div>© {currentYear} THOTA HIMESH — BUILT WITH ♥ AND TOO MUCH COFFEE</div>
      <div className="foot-socials">
        <a href={heroData.socials.github} target="_blank" rel="noopener noreferrer">GH</a>
        <a href={heroData.socials.linkedin} target="_blank" rel="noopener noreferrer">IN</a>
        <a href="#contact">✉</a>
      </div>
    </footer>
  );
}
