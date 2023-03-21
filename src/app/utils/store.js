import { create } from "zustand";

const ItemStore = create((set) => ({
  // items:0,
  items: [],
  addItem: ({item}) => set((state) => ({items: [...state.items,{item}] })),
}))

export default ItemStore;

// // prof. way to reset value
// const initialState = {
//     // items: 0,
//     items:[],
// }
// // updating the state
// const useStore = create(set => ({
//   // items:0,
//   ...initialState,
//   addItems: () => set(state => ({ items: state.items + 1 })),
//   subtractItems: () => set(state => ({ items: state.items - 1 })),
//   addItemsBy: (num) => set(state => ({ items: state.items + num })),
//   subtractItemsBy: (num) => set(state => ({ items: state.items - num })),
//   // reset : ()=> set((state) => ({items: 0})),
//   reset: () => set(initialState),
// }));

// export default useStore;
