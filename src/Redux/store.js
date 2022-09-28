import {configureStore} from "@reduxjs/toolkit"
import login from "./login/user"
import user from "./userInfos/user"
import language from "./language/languageSlice";

export const store = configureStore({
    reducer:{
      login,
      user,
      language
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
})