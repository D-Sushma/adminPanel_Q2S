import { create } from "zustand";

// STEP -> 1 go subjectAndDateRecord and import ItemStore and use it
const ItemStore = create((set, get) => ({
  // items:0,
  items: [],
  // sub_id: [],
  // ex_date: [],
  //length:[],
  addItem: ({ item, sub_id, ex_date, reg_length, comp_length }) => set((state) => ({ items: [...state.items, { item, sub_id, ex_date, reg_length, comp_length}] })),
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
