import { createSlice } from "@reduxjs/toolkit";

const skillSlice = createSlice({
    name: "skills",
    initialState: {},
    reducers: {},
});

export const {actions: skillActions, reducer: skillReducer} = skillSlice;