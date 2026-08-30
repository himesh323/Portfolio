import { Window } from '@/components/ui/Window';
import { interests } from '@/data/portfolio';

export function Interests() {
  return (
    <section id="interests">
      <Window title="INTERESTS.sys">
        <div className="eyebrow">★ AREAS OF INTEREST</div>
        <h2>What I keep coming back to</h2>
        <p className="section-sub">
          Twelve threads I'm actively pulling on — some core to my degree, some self-taught on the side.
        </p>

        <div className="interest-grid">
          {interests.map((it, index) => (
            <div key={index} className="interest-card">
              <div className="ico">{it.icon}</div>
              <b>{it.title}</b>
              <span>{it.description}</span>
            </div>
          ))}
        </div>
      </Window>
    </section>
  );
}
