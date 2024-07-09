import { create } from 'zustand'

const useStateStore = create((set) => ({
  sideMenuOpen: false,
  open: () => set({ sideMenuOpen: true }),
  close: () => set({ sideMenuOpen: false }),
}))

export default useStateStore;
