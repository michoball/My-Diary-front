import { createSlice } from "@reduxjs/toolkit";
import { memoAction } from "./memo.action";

const initialMemos = [
  {
    title: "new Memo",
    date: "2022-08-05T01:00:00",
    memo: `<p>😁🤗 'sakjf;laksj;lkfa;ljdf;as;f;<br></p>
    <p>as;oeifja;sijf;lsak<del>asefasef</del>aasefasef</p>`,
  },
  {
    title: "second",
    date: "2022-07-25T10:55:00",
    memo: `<p>ggggggggggggggggㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ</p>`,
  },
  {
    title: "3th",
    date: "2022-07-05T15:43:00",
    memo: `<p>😁🤗🤗🤗🤗🤗🤗🤗🤗<br></p>`,
  },
  {
    title: "old memo",
    date: "2022-05-05T22:20:00",
    memo: `<p>😁🤗 old~~~~~~~ memo</p>`,
  },
];

const initialState = {
  memoLists: initialMemos,
  selectedLabel: null,
  loading: false,
  error: null,
};

export const MemoSlice = createSlice({
  name: "memo",
  initialState,
  reducers: memoAction,
  extraReducers: (builder) => {},
});

export const memoActions = MemoSlice.actions;

export default MemoSlice.reducer;
