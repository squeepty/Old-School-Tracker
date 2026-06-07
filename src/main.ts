import './style.css';
import { TrackerApp } from './tracker/TrackerApp';

const mountNode = document.querySelector<HTMLElement>('#app');

if (!mountNode) {
  throw new Error('Could not find the #app mount node.');
}

const tracker = new TrackerApp(mountNode);

void tracker.start().catch((error: unknown) => {
  console.error('Old School Tracker failed to start.', error);
});

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    tracker.destroy();
  });
}
