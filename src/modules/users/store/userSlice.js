import { createSlice } from "@reduxjs/toolkit";
import {
  fetchUsers,
  fetchUserById,
  createUser,
  updateUser,
  deleteUser,
} from "./userThunks";

const initialState = {
  users: [],
  selectedUser: null,
  loading: false,
 error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearSelectedUser(state) {
      state.selectedUser = null;
    },
    clearUserError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch User
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedUser = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create User
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.unshift(action.payload);
      })

      // Update User
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );

        if (index !== -1) {
          state.users[index] = action.payload;
        }

        if (state.selectedUser?.id === action.payload.id) {
          state.selectedUser = action.payload;
        }
      })

      // Delete User
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(
          (user) => user.id !== action.payload
        );

        if (state.selectedUser?.id === action.payload) {
          state.selectedUser = null;
        }
      });
  },
});

export const { clearSelectedUser, clearUserError } = userSlice.actions;

export default userSlice.reducer;