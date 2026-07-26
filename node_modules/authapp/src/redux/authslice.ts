import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, UserForgetPassword, UserLogin, UserRegister, userUpdatePassword } from "../types/type";
import axiosInstance from "../api/axiosInstance";
import { endPoints } from "../api/endPoints";
import { toast } from "sonner";




const initialState: AuthState = {
    upload_status: "idle",
    status_message: null,
    isLoggedin: false,
    isLoading: false,
    redirectHome: null,
    redirectForgetToLogin: null
}

export const register = createAsyncThunk("/user/register", async (formData: UserRegister, { rejectWithValue }) => {
    try {
        const regResponse = await axiosInstance.post(endPoints.auth.signup, formData);
        return regResponse?.data;
    } catch (error: any) {
        const message = error?.response?.data?.message || error?.response?.data?.msg || error?.response?.data?.error || (typeof error?.response?.data === 'string' ? error.response.data : null) || error.message || "User Registration Failed";
        return rejectWithValue({ message });
    }
});

export const login = createAsyncThunk("/user/login", async (data: UserLogin, { rejectWithValue }) => {
    try {
        const loginResponse = await axiosInstance.post(endPoints.auth.signin, data);
        return loginResponse?.data;
    } catch (error: any) {
        const message = error?.response?.data?.message || error?.response?.data?.msg || error?.response?.data?.error || (typeof error?.response?.data === 'string' ? error.response.data : null) || error.message || "Invalid Credentials or Login Failed";
        return rejectWithValue({ message });
    }
});

export const updatePassword = createAsyncThunk("/user/updatepassword", async (data: userUpdatePassword, { rejectWithValue }) => {
    try {
        const updateResponse = await axiosInstance.post(endPoints.auth.update, data);
        return updateResponse?.data;
    } catch (error: any) {
        const message = error?.response?.data?.message || error?.response?.data?.msg || error?.response?.data?.error || (typeof error?.response?.data === 'string' ? error.response.data : null) || error.message || "Password Update Failed";
        return rejectWithValue({ message });
    }
});

export const forgetPassword = createAsyncThunk("/user/forgetpassword", async (data: UserForgetPassword, { rejectWithValue }) => {
    try {
        const forgetResponse = await axiosInstance.post(endPoints.auth.forget, data);
        return forgetResponse?.data;
    } catch (error: any) {
        const message = error?.response?.data?.message || error?.response?.data?.msg || error?.response?.data?.error || (typeof error?.response?.data === 'string' ? error.response.data : null) || error.message || "Password Reset Failed";
        return rejectWithValue({ message });
    }
});


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        check_token: (state) => {
            const token = localStorage.getItem("token");
            if (token) state.isLoggedin = true;
        },
        handleLoggOut: (state) => {
            state.redirectHome = null;
            localStorage.removeItem("token");
            localStorage.removeItem("UserName");
            localStorage.removeItem("UserId");
            state.isLoggedin = false;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(register.pending, (state) => {
                state.upload_status = "loading";
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
                state.upload_status = "idle";
                state.isLoading = false;
                state.redirectHome = "/login";
                const Payload = action.payload;
                localStorage.setItem("UserName", Payload?.data?.name ?? "");
                localStorage.setItem("UserId", Payload?.data?._id ?? "");
                state.status_message = Payload?.message || Payload?.msg || "User Registered Successfully";
                toast.success(Payload?.message || Payload?.msg || "User Registered Successfully");
            })
            .addCase(register.rejected, (state, action: PayloadAction<any>) => {
                state.upload_status = "idle";
                state.isLoading = false;
                const errorMsg = action.payload?.message || action.payload?.msg || "Registration failed";
                state.status_message = errorMsg;
                toast.error(errorMsg);
            })
            .addCase(login.pending, (state) => {
                state.upload_status = "loading";
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
                state.upload_status = "idle";
                state.isLoading = false;
                state.redirectHome = "/";
                state.isLoggedin = true;
                const msg = action.payload?.message || action.payload?.msg || "User logged in successfully";
                state.status_message = msg;
                if (action.payload?.token) {
                    localStorage.setItem("token", action.payload.token);
                }
                localStorage.setItem("UserName", action.payload?.user?.name ?? "");
                localStorage.setItem("userId", action.payload?.user?._id ?? "");
                toast.success(msg);
            })
            .addCase(login.rejected, (state, action: PayloadAction<any>) => {
                state.upload_status = "idle";
                state.isLoading = false;
                const errorMsg = action.payload?.message || action.payload?.msg || "Login failed! Please check your credentials.";
                state.status_message = errorMsg;
                toast.error(errorMsg);
            })
            .addCase(updatePassword.pending, (state) => {
                state.upload_status = "loading";
                state.isLoading = true;
            })
            .addCase(updatePassword.fulfilled, (state, action: PayloadAction<any>) => {
                state.upload_status = "idle";
                state.isLoading = false;
                const msg = action.payload?.message || action.payload?.msg || "Your password updated successfully";
                toast.success(msg);
            })
            .addCase(updatePassword.rejected, (state, action: PayloadAction<any>) => {
                state.upload_status = "idle";
                state.isLoading = false;
                const errorMsg = action.payload?.message || action.payload?.msg || "Password update failed";
                state.status_message = errorMsg;
                toast.error(errorMsg);
            })
            .addCase(forgetPassword.pending, (state) => {
                state.upload_status = "loading";
                state.isLoading = true;
            })
            .addCase(forgetPassword.fulfilled, (state, action: PayloadAction<any>) => {
                state.upload_status = "idle";
                state.isLoading = false;
                state.redirectForgetToLogin = "/login";
                const msg = action.payload?.message || action.payload?.msg || "Your password reset successfully";
                toast.success(msg);
            })
            .addCase(forgetPassword.rejected, (state, action: PayloadAction<any>) => {
                state.upload_status = "idle";
                state.isLoading = false;
                const errorMsg = action.payload?.message || action.payload?.msg || "Wrong email or reset failed";
                state.status_message = errorMsg;
                toast.error(errorMsg);
            });
    },
});

export const {check_token ,handleLoggOut }=authSlice.actions;