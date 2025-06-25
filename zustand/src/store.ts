import { create } from "zustand";

export interface StoreType {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
}

export const useCounterStore = create<StoreType>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
}));
