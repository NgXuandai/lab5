import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { imageReducer, ImageAction, ImageState } from "./imageReducer";

const rootReducer = combineReducers({
  image: imageReducer,
});

export type RootState = ReturnType<typeof rootReducer>

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["image"]
}

const persistedReducer = persistReducer<RootState, ImageAction>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});
export const persistor = persistStore(store);

export default persistedReducer;