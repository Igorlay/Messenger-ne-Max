import { create } from "zustand";

export const useStore = create((set) => ({
  posts: [],
  searchQuery: "",

  setPosts: (posts) => set({ posts }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));