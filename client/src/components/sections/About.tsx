import { Window } from '@/components/ui/Window';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { aboutData } from '@/data/portfolio';

export function About() {
  return (
    <section id="about">
      <Window title="ABOUT_ME.txt">
        <div className="eyebrow">★ ABOUT</div>
        <h2>{aboutData.heading}</h2>

        <div className="about-grid">
          <div>
            <div className="terminal-box">
              <span className="prompt">himesh@srm:~$</span> cat about.txt
              <br />
              I'm <b>Thota Himesh</b>, a B.Tech Computer Science (Cloud Computing)
              student at SRM Institute of Science and Technology, Chennai.
              <br /><br />
              I'm passionate about building intelligent software by combining
              Artificial Intelligence, Machine Learning, Cloud Computing and
              TensorFlow — applications that solve real problems with AI-driven
              automation and scalable cloud platforms.
              <br /><br />
              I'm exploring Generative AI, LLMs, AI Agents, NLP and intelligent
              web apps. Goal: become an AI Engineer who ships innovative,
              efficient, impactful systems.
              <br />
              <span className="prompt">himesh@srm:~$</span> <span className="cursor-blink">_</span>
            </div>

            <ul className="journey-mini">
              {aboutData.timeline.map((item: { year: string; description: string }, index: number) => (
                <li key={index}>
                  <b>{item.year}</b>
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="stat-grid">
              {aboutData.stats.map((stat: { value: number; label: string }, index: number) => (
                <div key={index} className="stat-box">
                  <div className="num">
                    <AnimatedCounter target={stat.value} />
                  </div>
                  <div className="label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Window>
    </section>
  );
}
