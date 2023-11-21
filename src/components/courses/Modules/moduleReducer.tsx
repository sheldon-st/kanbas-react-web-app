import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModule } from "../../../types";

const initialState: {
  modules: IModule[];
  module: IModule;
} = {
  modules: [],
  module: { name: "", course: "", _id: "", description: "" },
};

export const moduleSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action: PayloadAction<IModule[]>) => {
      state.modules = action.payload;
    },
    setModule: (state, action: PayloadAction<IModule>) => {
      state.module = action.payload;
    },
    addNewModule: (state, action: PayloadAction<IModule>) => {
      state.modules = [action.payload, ...state.modules];
    },
    deleteModule: (state, action: PayloadAction<IModule>) => {
      state.modules = state.modules.filter((c) => c._id !== action.payload._id);
    },
    updateExistingModule: (state, action: PayloadAction<IModule>) => {
      state.modules = state.modules.map((module) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
      console.log(state.modules);
    },
  },
});

export const {
  setModules,
  setModule,
  addNewModule,
  deleteModule,
  updateExistingModule,
} = moduleSlice.actions;
export default moduleSlice.reducer;
