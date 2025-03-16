import { createSlice } from "@reduxjs/toolkit";

interface AuthState{
    username: string;
}


const initialState: AuthState = { username: ''};
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        setUsername(state: AuthState,action){
            state.username = action.payload;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;