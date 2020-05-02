import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import Auth from "./reducers/auth";
import Activity from "./reducers/activity";

const rootReducer = combineReducers({
  Auth,
  Activity,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Auth", "Activity"],
};

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
