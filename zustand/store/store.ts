import { create } from "zustand";

interface StoreType {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
}

const useStore = create<StoreType>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
