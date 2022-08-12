import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "store/reducesrs/todos/TodoSlice";

const rootReducer = combineReducers({
  todoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
