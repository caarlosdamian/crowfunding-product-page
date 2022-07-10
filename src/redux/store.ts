import { configureStore } from "@reduxjs/toolkit";
import subcriptionReducer from "./subcription/subcriptionSlice";
import toggleReducer from "./toggle/toggleSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    subcriptions:subcriptionReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
