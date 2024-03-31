// DEV DEPENDENCIES
import { create } from "zustand";

const searchFilter = create((set) => ({
  inputValue: "",
  setInputValue: (value) => set({ inputValue: value }),
}));

export { searchFilter };
