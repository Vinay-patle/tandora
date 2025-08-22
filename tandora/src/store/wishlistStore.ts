import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/lib/ai';

interface WishlistStore {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product: Product) => {
        const items = get().items;
        const existingItem = items.find(item => item.id === product.id);
        
        if (!existingItem) {
          set({
            items: [...items, product]
          });
        }
      },
      
      removeItem: (productId: string) => {
        set({
          items: get().items.filter(item => item.id !== productId)
        });
      },
      
      isInWishlist: (productId: string) => {
        return get().items.some(item => item.id === productId);
      },
      
      clearWishlist: () => {
        set({ items: [] });
      }
    }),
    {
      name: 'wishlist-storage',
    }
  )
);