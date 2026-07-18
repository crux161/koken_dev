import { useState } from 'react';
import {
  IconArrowRight,
  IconCloudStroked,
  IconCodeStroked,
  IconComponentStroked,
  IconServerStroked,
} from './SemiIcons';

const views = {
  source: {
    index: '01',
    label: 'Authoring',
    icon: IconCodeStroked,
    title: 'Write close to the idea.',
    copy: 'Long-form thinking lives in MDX. Interface work stays composable in React and Astro, with Tailwind keeping the visual system explicit.',
    chips: ['MDX', 'React', 'Tailwind CSS'],
  },
  build: {
    index: '02',
    label: 'Build',
    icon: IconComponentStroked,
    title: 'Ship the quietest version.',
    copy: 'Astro resolves content and components at build time. Vite optimizes the graph, then emits lean static HTML for the default path.',
    chips: ['Astro', 'Vite', 'Static HTML'],
  },
  runtime: {
    index: '03',
    label: 'Runtime',
    icon: IconServerStroked,
    title: 'Hydrate only what earns it.',
    copy: 'The browser receives content first. JavaScript wakes up only around intentional React islands, keeping the experience fast and legible.',
    chips: ['Browser', 'Selective hydration', 'React island'],
  },
} as const;

type ViewKey = keyof typeof views;

export default function ArchitectureExplorer() {
  const [active, setActive] = useState<ViewKey>('source');
  const current = views[active];
  const ActiveIcon = current.icon;

  return (
    <div className="architecture-console">
      <div className="console-tabs" role="tablist" aria-label="KUMO site architecture">
        {(Object.entries(views) as [ViewKey, (typeof views)[ViewKey]][]).map(([key, view]) => {
          const Icon = view.icon;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={active === key}
              onClick={() => setActive(key)}
              className={active === key ? 'active' : ''}
            >
              <span className="tab-index">{view.index}</span>
              <Icon size="large" aria-hidden="true" />
              <span>{view.label}</span>
            </button>
          );
        })}
      </div>

      <div className="console-detail" role="tabpanel">
        <div className="detail-icon"><ActiveIcon size="extra-large" aria-hidden="true" /></div>
        <div>
          <p className="console-kicker"><IconCloudStroked /> KUMO / SYSTEM PROFILE</p>
          <h3>{current.title}</h3>
          <p className="detail-copy">{current.copy}</p>
          <div className="chips" aria-label="Technologies">
            {current.chips.map((chip) => <span key={chip}>{chip}</span>)}
          </div>
        </div>
        <IconArrowRight className="detail-arrow" size="extra-large" aria-hidden="true" />
      </div>
    </div>
  );
}
