import { Stage, Layer, Rect, Text } from 'react-konva';
import { useStudioStore } from '../store/useStudioStore';

export function CanvasPanel() {
  const layers = useStudioStore((s) => s.layers);
  const selectedId = useStudioStore((s) => s.selectedId);
  const selectLayer = useStudioStore((s) => s.selectLayer);
  const updateLayer = useStudioStore((s) => s.updateLayer);

  return (
    <main className="canvasWrap">
      <Stage width={1120} height={680} onMouseDown={() => selectLayer(undefined)}>
        <Layer>
          {layers.map((item) =>
            item.kind === 'text' ? (
              <Text
                key={item.id}
                text={item.text ?? item.name}
                x={item.x}
                y={item.y}
                fontSize={52}
                fill={item.color ?? '#fff'}
                draggable={!item.locked}
                onClick={() => selectLayer(item.id)}
                onDragEnd={(e) => updateLayer(item.id, { x: e.target.x(), y: e.target.y() })}
              />
            ) : (
              <Rect
                key={item.id}
                x={item.x}
                y={item.y}
                width={item.width}
                height={item.height}
                fill={item.kind === 'product' ? '#f59e0b' : '#334155'}
                stroke={selectedId === item.id ? '#22d3ee' : '#64748b'}
                strokeWidth={selectedId === item.id ? 3 : 1}
                cornerRadius={8}
                draggable={!item.locked}
                onClick={() => selectLayer(item.id)}
                onDragEnd={(e) => updateLayer(item.id, { x: e.target.x(), y: e.target.y() })}
              />
            )
          )}
        </Layer>
      </Stage>
    </main>
  );
}
