import { TypeWriter } from '@/components/ui/TypeWriter';
import { Window } from '@/components/ui/Window';
import { AvatarCard } from '@/components/ui/AvatarCard';
import { heroData } from '@/data/portfolio';

export function Hero() {
  return (
    <section id="home">
      <Window title="WELCOME.exe">
        <div className="hero">
          <div>
            <div className="eyebrow">★ SYSTEM BOOT COMPLETE</div>
            <h1 className="hero-name">
              Thota<br />Himesh
            </h1>
            <div className="hero-role">{heroData.title}</div>
            <div className="typewrap">
              <TypeWriter words={heroData.roles} />
            </div>
            <p className="hero-desc">{heroData.description}</p>
            
            <div className="hero-ctas">
              <a href="#projects" className="btn">▶ SEE PROJECTS</a>
              <a href="#contact" className="btn alt">✉ CONTACT ME</a>
              <a href="#" className="btn pink" download>⬇ RESUME.pdf</a>
            </div>

            <div className="hero-socials">
              <a href={heroData.socials.github} target="_blank" rel="noopener noreferrer">GITHUB</a>
              <a href={heroData.socials.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN</a>
              <a href={heroData.socials.leetcode} target="_blank" rel="noopener noreferrer">LEETCODE</a>
              <a href={heroData.socials.hackerrank} target="_blank" rel="noopener noreferrer">HACKERRANK</a>
            </div>
          </div>

          <div className="avatar-window">
            <AvatarCard imageSrc="/avatar.jpg" levelText="LVL 03" badgeText="YEAR 3" />
          </div>
        </div>
      </Window>
      
      <div className="scroll-ind">▼ SCROLL TO EXPLORE ▼</div>
    </section>
  );
}
