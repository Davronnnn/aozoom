import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import addToCard from "./reducers/addToCard";
import { userReducer } from "./reducers/userReducer";

// Configure persisted store with localstorage property name
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  payload: addToCard,
  signin: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(logger, reduxThunk))
);
const dispatch = store.dispatch;
export { dispatch };
const persistor = persistStore(store);

export { store as default, persistor };
