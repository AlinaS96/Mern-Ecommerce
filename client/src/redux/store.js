// import {configureStore, combineReducers} from "@reduxjs/toolkit"

// import userReducer from "./userRedux"
// import cartReducer from "./cartRedux"
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist'
//   import storage from 'redux-persist/lib/storage'
//   const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
//   }
//   const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

//   const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store= configureStore({
//     reducer:{user:persistedReducer},
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })

// export let persistor = persistStore(store)
//-------------------------------------------


import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartRedux"
import userReducer from "./userRedux"
const store = configureStore({
  reducer:{
    cart:cartReducer,
    user:userReducer
  },
})

export default store

//-------------------------------------------------
// import { createStore } from "redux";
// // import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
// import rootReducer from "./rootReducer";


// const store = createStore(rootReducer)

// export default store;