import { configureStore } from "@reduxjs/toolkit";
import { JWT_PERSISTANT_STATE, userSlice } from "./user.slice";
import { saveState } from "./storage";
import { cartSlice } from "./cart.slice";

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		cart: cartSlice.reducer
	}
});

store.subscribe(() => {
	saveState({ jwt: store.getState().user.jwt }, JWT_PERSISTANT_STATE)
})

export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch