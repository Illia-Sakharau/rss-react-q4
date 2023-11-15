import { createContext } from 'react';
import { Art } from '../../types';

export interface IGalleryContext {
  arts: Art[] | undefined;
}

export const GalleyContext = createContext<IGalleryContext | null>(null);
