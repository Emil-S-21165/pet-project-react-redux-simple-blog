import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Alex Fan' },
    {id: '1', name: 'Bob Joah' },
    {id: '2', name: 'Cap Naki' },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    }
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer