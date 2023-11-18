import { createSlice, nanoid } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "form",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    addCourse(state, action) {
      state.data.push({
        name: action.payload.name,
        description: action.payload.description,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCourse(state, action) {
      const updateCourse = state.data.filter((course) => {
        return course.id !== action.payload;
      });
      state.data = updateCourse;
    },
    searchCourse(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { addCourse, removeCourse, searchCourse } = courseSlice.actions;
export const courseReducer = courseSlice.reducer;
