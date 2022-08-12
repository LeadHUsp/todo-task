import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "models/ITask";
import { fetchTodos } from "./actionCreators";

interface ITodoState {
  todosInitial: ITask[];
  todosHashTable: {
    [key: string]: ITask;
  } | null;
  todos: ITask[];
  isLoading: boolean;
  error: string | null;
  filterData: string;
}

const initialState: ITodoState = {
  todosInitial: [],
  todosHashTable: null,
  todos: [],
  isLoading: false,
  error: null,
  filterData: "all",
};
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    changeFilterValue: (state, action: PayloadAction<string>) => {
      state.filterData = action.payload;
    },
    showOnlyCompleted: (state) => {
      state.todos = state.todosInitial.filter((item) => item.completed);
    },
    showAllTask: (state) => {
      state.todos = state.todosInitial;
    },
    showInProgressTask: (state) => {
      state.todos = state.todosInitial.filter((item) => !item.completed);
    },
  },
  extraReducers: {
    [fetchTodos.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchTodos.fulfilled.type]: (state, action: PayloadAction<ITask[]>) => {
      state.isLoading = false;
      state.error = null;
      state.todosInitial = action.payload;
      state.todos = action.payload;
      const hashTable: {
        [key: string]: ITask;
      } = {};
      for (const iterator of action.payload) {
        hashTable[iterator.id] = iterator;
      }
      state.todosHashTable = hashTable;
    },
    [fetchTodos.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const { changeFilterValue, showAllTask, showInProgressTask, showOnlyCompleted } =
  todoSlice.actions;
export default todoSlice.reducer;
