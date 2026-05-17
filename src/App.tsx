import { CanvasPanel } from './components/CanvasPanel';
import { LeftPanel } from './components/LeftPanel';
import { RightPanel } from './components/RightPanel';

export function App() {
  return (
    <div className="layout">
      <LeftPanel />
      <CanvasPanel />
      <RightPanel />
    </div>
  );
}
