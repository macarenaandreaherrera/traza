import { useStudioStore } from '../store/useStudioStore';

export function RightPanel() {
  const layers = useStudioStore((s) => s.layers);
  const selectedId = useStudioStore((s) => s.selectedId);
  const updateLayer = useStudioStore((s) => s.updateLayer);
  const selected = layers.find((l) => l.id === selectedId);

  return (
    <aside className="panel">
      <h3>Propiedades</h3>
      {selected ? (
        <>
          <p><strong>{selected.name}</strong> ({selected.kind})</p>
          <label className="label">X</label>
          <input type="number" value={selected.x} onChange={(e) => updateLayer(selected.id, { x: Number(e.target.value) })} />
          <label className="label">Y</label>
          <input type="number" value={selected.y} onChange={(e) => updateLayer(selected.id, { y: Number(e.target.value) })} />
          <label className="label">Ancho</label>
          <input type="number" value={selected.width} onChange={(e) => updateLayer(selected.id, { width: Number(e.target.value) })} />
          <label className="label">Alto</label>
          <input type="number" value={selected.height} onChange={(e) => updateLayer(selected.id, { height: Number(e.target.value) })} />
        </>
      ) : <p>Selecciona una capa para editar.</p>}
      <h4>Exportables objetivo</h4>
      <ul>
        <li>Imagen final</li>
        <li>Fondo sin bodegón</li>
        <li>Producto aislado</li>
      </ul>
    </aside>
  );
}
