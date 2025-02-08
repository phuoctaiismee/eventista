import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "./type";
import { endpoints } from "./new-api";
import { format } from "date-fns";

const initialState: {
  posts: Post[];
} = {
  posts: [],
};

export const NewsSlice = createSlice({
  name: "newsSlice",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      endpoints.getListNews.matchFulfilled,
      (state, action) => {
        const posts = action.payload.posts;

        state.posts = posts.map((item) => ({
          ...item,
          created_at: format(new Date(item?.created_at), "PPP"),
        }));
      }
    );
  },
});

export const { setNews } = NewsSlice.actions;

export default NewsSlice.reducer;
