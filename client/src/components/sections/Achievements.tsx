import { Window } from '@/components/ui/Window';
import { achievements } from '@/data/portfolio';

export function Achievements() {
  return (
    <section id="achievements">
      <Window title="ACHIEVEMENTS.log">
        <div className="eyebrow">★ ACHIEVEMENTS</div>
        <h2>System log</h2>

        <ul className="log">
          {achievements.map((a, index) => (
            <li key={index}>
              <span className="tstamp">[{a.year}]</span>
              <span>
                {a.description} <span className="tag-ok">[{a.status}]</span>
              </span>
            </li>
          ))}
        </ul>
      </Window>
    </section>
  );
}
