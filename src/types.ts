export type LayerKind = 'final' | 'background' | 'product' | 'text' | 'logo' | 'props';

export interface CanvasLayer {
  id: string;
  kind: LayerKind;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  locked?: boolean;
  src?: string;
  text?: string;
  fontFamily?: string;
  color?: string;
}
