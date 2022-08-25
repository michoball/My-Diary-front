import { createSlice } from "@reduxjs/toolkit";
import { createMemos, deleteMemo, getMemos, updateMemo } from "./memo.thunk";

const initialMemos = [
  {
    _id: "Afa124te4t4",
    title: "new Memo",
    updatedAt: "2022-08-05T01:00:00",
    color: "#f44336",
    memo: `<p>😁🤗 'sakjf;laksj;lkfa;ljdf;as;f;<br></p>
    <p>as;oeifja;sijf;lsak<del>asefasef</del>aasefasef</p>`,
    major: true,
  },
  {
    _id: "Afa12415t4",
    title: "second",
    updatedAt: "2022-07-25T10:55:00",
    color: "#2196f3",
    memo: `<p>ggggggggggggggggㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ</p>`,
    major: false,
  },
  {
    _id: "24te4t4",
    title: "3th",
    updatedAt: "2022-07-05T15:43:00",
    color: "#4caf50",
    memo: `<p>😁🤗🤗🤗🤗🤗🤗🤗🤗<br></p>`,
    major: true,
  },
  {
    _id: "Afa1hhnth4t4",
    title: "old memo",
    updatedAt: "2022-04-05T22:20:00",
    color: "#ffeb3b",
    memo: `<p>😁🤗 old~~~~~~~ memo</p>`,
    major: false,
  },
  {
    _id: "Afhnth4t4",
    title: "memo 101",
    updatedAt: "2022-03-05T22:20:00",
    color: "#ffeb3b",
    memo: `<p>😁🤗 old~~~~~~~ memo gggg<br>gggggg<br>ggggㅎㅎㅎlkfa;ljdf;as;f;<br></p>
    <p>as;oeifja;s<br>ijf;lsak<del>asefasef</del>aa ~~~ memo gg</p>`,
    major: false,
  },
  {
    _id: "Afhh63jh4t4",
    title: "memo 1021",
    updatedAt: "2022-10-05T22:20:00",
    color: "#ffeb3b",
    memo: `<p> old~~~~~~~ memo gggg<br>gggggg<br>ggggㅎㅎㅎlkfa;ljdf;as;f;<br></p>
    <p>as;oeifja;s<br>ijf;lsak<del>asefasef</del>aa ~~~ memo gg</p>`,
    major: true,
  },
  {
    _id: "Afhnt32u14t4",
    title: "memo 3033",
    updatedAt: "2022-08-15T22:20:00",
    color: "#2196f3",
    memo: `<p>😁 old~~~~~~~🤗 memo gggg<br>gggggg<br>ggggㅎㅎㅎlkfa;ljdf;as;f;<br></p>
    <p>as;oeifja;s<br>ijf;lsak<del>asefasef</del>aa ~~~ memo gg</p>`,
    major: false,
  },
];

const initialState = {
  memoLists: [],
  selectedMemo: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const MemoSlice = createSlice({
  name: "memo",
  initialState,
  reducers: {
    setSelectMemo: (state, action) => {
      const findedMemo = state.memoLists.find(
        (list) => list._id === action.payload
      );
      return {
        ...state,
        selectedMemo: findedMemo,
      };
    },
    clearSelectMemo: (state) => {
      return {
        ...state,
        selectedMemo: null,
      };
    },
    memoReset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createMemos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createMemos.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createMemos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getMemos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMemos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.memoLists = action.payload;
      })
      .addCase(getMemos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteMemo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteMemo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.memoLists = state.memoLists.filter(
          (memo) => memo._id !== action.payload
        );
      })
      .addCase(deleteMemo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateMemo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateMemo.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateMemo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { setSelectMemo, clearSelectMemo, memoReset } = MemoSlice.actions;

export default MemoSlice.reducer;
