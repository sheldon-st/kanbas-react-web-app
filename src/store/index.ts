import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../components/courses/Modules/moduleReducer";
const store = configureStore({
  reducer: {
    modulesReducer,
  },
});
export default store;
