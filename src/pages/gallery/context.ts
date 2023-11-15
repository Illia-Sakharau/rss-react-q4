import { createContext } from 'react';
import { Art } from '../../types';

export interface IGalleryContext {
  selectedArtNumber: string;
  setSelectedArtNumber: React.Dispatch<React.SetStateAction<string>>;
  arts: Art[] | undefined;
}

export const GalleyContext = createContext<IGalleryContext | null>(null);
