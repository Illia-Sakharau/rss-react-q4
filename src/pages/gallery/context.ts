import { createContext } from 'react';

export interface IGalleryContext {
  selectedArtNumber: string;
  setSelectedArtNumber: React.Dispatch<React.SetStateAction<string>>;
}

export const GalleyContext = createContext<IGalleryContext | null>(null);
