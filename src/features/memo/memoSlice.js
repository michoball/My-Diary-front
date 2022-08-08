import { createSlice } from "@reduxjs/toolkit";
import { memoAction } from "./memo.action";

const initialMemos = [
  {
    id: "Afa124te4t4",
    title: "new Memo",
    date: "2022-08-05T01:00:00",
    color: "#f44336",
    memo: `<p>😁🤗 'sakjf;laksj;lkfa;ljdf;as;f;<br></p>
    <p>as;oeifja;sijf;lsak<del>asefasef</del>aasefasef</p>`,
  },
  {
    id: "Afa12415t4",
    title: "second",
    date: "2022-07-25T10:55:00",
    color: "#2196f3",
    memo: `<p>ggggggggggggggggㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ</p>`,
  },
  {
    id: "24te4t4",

    title: "3th",
    date: "2022-07-05T15:43:00",
    color: "#4caf50",
    memo: `<p>😁🤗🤗🤗🤗🤗🤗🤗🤗<br></p>`,
  },
  {
    id: "Afa1hhnth4t4",
    title: "old memo",
    date: "2022-05-05T22:20:00",
    color: "#ffeb3b",
    memo: `<p>😁🤗 old~~~~~~~ memo</p>`,
  },
  {
    id: "Afhnth4t4",
    title: "memo 101",
    date: "2022-05-05T22:20:00",
    color: "#ffeb3b",
    memo: `<p>😁🤗 old~~~~~~~ memo gggg<br>gggggg<br>ggggㅎㅎㅎlkfa;ljdf;as;f;<br></p>
    <p>as;oeifja;s<br>ijf;lsak<del>asefasef</del>aa ~~~ memo gg</p>`,
  },
  {
    id: "Afhh63jh4t4",
    title: "memo 102",
    date: "2022-05-05T22:20:00",
    color: "#ffeb3b",
    memo: `<p> old~~~~~~~ memo gggg<br>gggggg<br>ggggㅎㅎㅎlkfa;ljdf;as;f;<br></p>
    <p>as;oeifja;s<br>ijf;lsak<del>asefasef</del>aa ~~~ memo gg</p>`,
  },
  {
    id: "Afhnt32u14t4",
    title: "memo 303",
    date: "2022-05-05T22:20:00",
    color: "#2196f3",
    memo: `<p>😁 old~~~~~~~🤗 memo gggg<br>gggggg<br>ggggㅎㅎㅎlkfa;ljdf;as;f;<br></p>
    <p>as;oeifja;s<br>ijf;lsak<del>asefasef</del>aa ~~~ memo gg</p>`,
  },
  {
    id: "Afhntkljt4",
    title: "memo 155",
    date: "2022-05-05T22:20:00",
    color: "#4caf50",
    memo: `<p> yooo~~~~~~ 😁🤗memo gggg<br>gggggg<br>ggggㅎㅎㅎlkfa;ljdf;as;f;<br></p>
    <p>as;oeifja;s<br>ijf;lsak<del>asefasef</del>aa ~~~ memo gg</p>`,
  },
  {
    id: "Afhh9ik4t4",
    title: "memo 102",
    date: "2022-05-05T22:20:00",
    color: "#ffeb3b",
    memo: `<p> old~~~~~~~ memo gggg<br>gggggg<br>ggggㅎㅎㅎlkfa;ljdf;as;f;<br></p>
    <p>as;oeifja;s<br>ijf;lsak<del>asefasef</del>aa ~~~ memo gg</p>`,
  },
  {
    id: "Afhnt372u14t4",
    title: "memo 303",
    date: "2022-05-05T22:20:00",
    color: "#2196f3",
    memo: `<p>😁 old~~~~~~~🤗 memo gggg<br>gggggg<br>ggggㅎㅎㅎlkfa;ljdf;as;f;<br></p>
    <p>as;oeifja;s<br>ijf;lsak<del>asefasef</del>aa ~~~ memo gg</p>`,
  },
  {
    id: "Afhnjt4",
    title: "memo 155",
    date: "2022-05-05T22:20:00",
    color: "#4caf50",
    memo: `<p> yooo~~~~~~ 😁🤗memo gggg<br>gggggg<br>ggggㅎㅎㅎlkfa;ljdf;as;f;<br></p>
    <p>as;oeifja;s<br>ijf;lsak<del>asefasef</del>aa ~~~ memo gg</p>`,
  },
];

const initialState = {
  memoLists: initialMemos,
  selectedMemo: null,

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
