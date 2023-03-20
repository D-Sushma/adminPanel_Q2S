import { create } from 'zustand'

const ItemStore = create((set) => ({
  items: [],
  addItem: ({item}) => set((state) => ({items: [...state.items,{item}] })),
}))

export default ItemStore;