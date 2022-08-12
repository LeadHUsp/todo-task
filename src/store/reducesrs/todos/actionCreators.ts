import axios from "axios";
import { ITask } from "models/ITask";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async (_, thunkAPI) => {
  try {
    const response = await axios.get<ITask[]>(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Ошибка при загрузке");
  }
});
