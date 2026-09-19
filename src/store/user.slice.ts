import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "./storage";

export const JWT_PERSISTANT_STATE = 'jwt'

export interface UserPersistantState {
	jwt: string | null
}

export interface UserState {
	jwt: string | null
}

const initialState: UserState = {
	jwt: loadState<UserPersistantState>(JWT_PERSISTANT_STATE)?.jwt ?? null
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addJwt: (state, action: PayloadAction<string>) => {
			console.log('addJwt called with', action.payload)
			state.jwt = action.payload
		},
		logout: (state) => {
			state.jwt = null
		}
	}
});

export default userSlice.reducer
export const userActions = userSlice.actions