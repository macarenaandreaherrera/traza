import { create } from 'zustand';
import { CanvasLayer } from '../types';

interface StudioState {
  layers: CanvasLayer[];
  selectedId?: string;
  prompt: string;
  addLayer: (layer: CanvasLayer) => void;
  updateLayer: (id: string, patch: Partial<CanvasLayer>) => void;
  selectLayer: (id?: string) => void;
  setPrompt: (prompt: string) => void;
}

export const useStudioStore = create<StudioState>((set) => ({
  layers: [
    { id: 'bg-1', kind: 'background', name: 'Fondo base', x: 60, y: 60, width: 1000, height: 560 },
    { id: 'txt-1', kind: 'text', name: 'Headline', x: 120, y: 100, width: 320, height: 80, text: 'NUEVO COMBO', fontFamily: 'Arial', color: '#ffffff' }
  ],
  prompt: '',
  addLayer: (layer) => set((s) => ({ layers: [...s.layers, layer] })),
  updateLayer: (id, patch) => set((s) => ({ layers: s.layers.map((l) => (l.id === id ? { ...l, ...patch } : l)) })),
  selectLayer: (id) => set({ selectedId: id }),
  setPrompt: (prompt) => set({ prompt })
}));
