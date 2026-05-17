import { useStudioStore } from '../store/useStudioStore';

export function LeftPanel() {
  const prompt = useStudioStore((s) => s.prompt);
  const setPrompt = useStudioStore((s) => s.setPrompt);
  return (
    <aside className="panel">
      <h3>Referencias + Prompt</h3>
      <label className="label">Subir referencias</label>
      <input type="file" multiple accept="image/*" />
      <label className="label">Subir PNGs de producto</label>
      <input type="file" multiple accept="image/png" />
      <label className="label">Subir tipografías</label>
      <input type="file" multiple accept=".otf,.ttf" />
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ej: Regenera SOLO el fondo estilo verano tropical. No mover producto ni logo."
        rows={7}
      />
      <button>Generar capas IA</button>
    </aside>
  );
}
