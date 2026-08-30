import { Window } from '@/components/ui/Window';
import { skillCategories } from '@/data/portfolio';
import { useIntersection } from '@/hooks/useIntersection';

function SkillFill({ percentage }: { percentage: number }) {
  const { ref, isInView } = useIntersection({ threshold: 0.4 });

  return (
    <div ref={ref} className="skill-bar">
      <div
        className="skill-fill"
        style={{ width: isInView ? `${percentage}%` : '0%' }}
      />
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills">
      <Window title="STACK.dll">
        <div className="eyebrow">★ TECHNICAL SKILLS</div>
        <h2>Skill dashboard</h2>
        <p className="section-sub">
          Bars fill when they scroll into view — an honest read of where I currently stand, not a sales pitch.
        </p>

        <div className="skill-cats">
          {skillCategories.map((cat, cIndex) => (
            <div key={cIndex} className="skill-cat">
              <b className="cat-title">{cat.category}</b>
              {cat.skills.map((s: { name: string; percentage: number }, sIndex: number) => (
                <div key={sIndex} className="skill-row">
                  <div className="sr-top">
                    <span>{s.name}</span>
                    <span>{s.percentage}%</span>
                  </div>
                  <SkillFill percentage={s.percentage} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </Window>
    </section>
  );
}
