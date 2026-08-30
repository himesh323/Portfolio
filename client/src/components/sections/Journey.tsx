import { Window } from '@/components/ui/Window';
import { roadmapTracks } from '@/data/portfolio';

export function Journey() {
  return (
    <section id="journey">
      <Window title="AI_JOURNEY.map">
        <div className="eyebrow">★ AI LEARNING JOURNEY</div>
        <h2>The level map</h2>
        <p className="section-sub">
          What I'm learning, grouped by track. Nodes are roughly ordered left → right by how I'm working through them.
        </p>

        <div className="roadmap">
          {roadmapTracks.map((group, gIndex) => (
            <div key={gIndex} className="road-group">
              <b>▸ {group.title}</b>
              <div className="road-nodes">
                {group.nodes.map((n: string, nIndex: number) => (
                  <div key={nIndex} className="road-node">
                    {n}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Window>
    </section>
  );
}
