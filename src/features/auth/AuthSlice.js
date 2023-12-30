import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./AuthService";

const userexits = JSON.parse(localStorage.getItem("user"))

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    user: userexits ? userexits : null,
    message: ""
}

const Authslice = createSlice({
    name: "auth",
    initialState,

    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(registeruser.pending, state => {
                state.isLoading = true
            })
            .addCase(registeruser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload

            })
            .addCase(registeruser.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.user = null
                state.isError = true
                state.message = action.payload
            }).addCase(logoutuser.fulfilled, state => {
                state.user = null
            })
            .addCase(loginuser.pending, state => {
                state.isLoading = true
            })
            .addCase(loginuser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload

            })
            .addCase(loginuser.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.user = null
                state.isError = true
                state.message = action.payload
            })

    }

})

export default Authslice.reducer


export const registeruser = createAsyncThunk('auth/register', async (userdata,thunkAPI) => {
    try {
        return await authService.register(userdata)
    } catch (error) {
        const messsage = error.response.data.message
        return thunkAPI.rejectWithValue(messsage)
    }
})


export const loginuser = createAsyncThunk('auth/login', async (userdata,thunkAPI) => {
    try {
        return await authService.login(userdata)
    } catch (error) {
       const messsage = error.response.data.message
       return thunkAPI.rejectWithValue(messsage)
    }
})

export const logoutuser = createAsyncThunk('auth/logout', async () => {
    localStorage.removeItem("user")
})
