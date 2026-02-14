"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  commonData: null,
  commonFlag: null,
  activeFlag: false,
  flagContainer: null,
};

const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    addCommonData: (state, action: PayloadAction<any>) => {
      state.commonData = action.payload;
    },
    addCommonFlag: (state, action: PayloadAction<any>) => {
      state.commonFlag = action.payload;
    },
    addActiveFlag: (state, action: PayloadAction<any>) => {
      state.activeFlag = action.payload;
    },
    addFlagContainer: (state, action: PayloadAction<any>) => {
      state.flagContainer = action.payload;
    },
  },
});

export const { addCommonData, addCommonFlag, addActiveFlag, addFlagContainer } =
  slice.actions;

export default slice.reducer;