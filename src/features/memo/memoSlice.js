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
    major: true,
  },
  {
    id: "Afa12415t4",
    title: "second",
    date: "2022-07-25T10:55:00",
    color: "#2196f3",
    memo: `<p>ggggggggggggggggㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ</p>`,
    major: false,
  },
  {
    id: "24te4t4",
    title: "3th",
    date: "2022-07-05T15:43:00",
    color: "#4caf50",
    memo: `<p>😁🤗🤗🤗🤗🤗🤗🤗🤗<br></p>`,
    major: true,
  },
  {
    id: "Afa1hhnth4t4",
    title: "old memo",
    date: "2022-04-05T22:20:00",
    color: "#ffeb3b",
    memo: `<p>😁🤗 old~~~~~~~ memo</p>`,
    major: false,
  },
  {
    id: "Afhnth4t4",
    title: "memo 101",
    date: "2022-03-05T22:20:00",
    color: "#ffeb3b",
    memo: `<p>😁🤗 old~~~~~~~ memo gggg<br>gggggg<br>ggggㅎㅎㅎlkfa;ljdf;as;f;<br></p>
    <p>as;oeifja;s<br>ijf;lsak<del>asefasef</del>aa ~~~ memo gg</p>`,
    major: false,
  },
  {
    id: "Afhh63jh4t4",
    title: "memo 1021",
    date: "2022-10-05T22:20:00",
    color: "#ffeb3b",
    memo: `<p> old~~~~~~~ memo gggg<br>gggggg<br>ggggㅎㅎㅎlkfa;ljdf;as;f;<br></p>
    <p>as;oeifja;s<br>ijf;lsak<del>asefasef</del>aa ~~~ memo gg</p>`,
    major: true,
  },
  {
    id: "Afhnt32u14t4",
    title: "memo 3033",
    date: "2022-08-15T22:20:00",
    color: "#2196f3",
    memo: `<p>😁 old~~~~~~~🤗 memo gggg<br>gggggg<br>ggggㅎㅎㅎlkfa;ljdf;as;f;<br></p>
    <p>as;oeifja;s<br>ijf;lsak<del>asefasef</del>aa ~~~ memo gg</p>`,
    major: false,
  },
  {
    id: "Afhntkljt4",
    title: "memo 155",
    date: "2022-05-25T22:20:00",
    color: "#4caf50",
    memo: `<p> yooo~~~~~~ 😁🤗memo gggg<br>gggggg<br>ggggㅎㅎㅎlkfa;ljdf;as;f;<br></p>
    <p>as;oeifja;s<br>ijf;lsak<del>asefasef</del>aa ~~~ memo gg</p>`,
    major: false,
  },
  {
    id: "Afhh9ik4t4",
    title: "memo 102",
    date: "2022-04-05T22:20:00",
    color: "#ffeb3b",
    memo: `<p> old~~~~~~~ memo gggg<br>gggggg<br>ggggㅎㅎㅎlkfa;ljdf;as;f;<br></p>
    <p>as;oeifja;s<br>ijf;lsak<del>asefasef</del>aa ~~~ memo gg</p>`,
    major: true,
  },
  {
    id: "Afhnt372u14t4",
    title: "memo 303",
    date: "2022-05-03T22:20:00",
    color: "#2196f3",
    memo: `<p>😁 old~~~~~~~🤗 memo gggg<br>gggggg<br>ggggㅎㅎㅎlkfa;ljdf;as;f;<br></p>
    <p>as;oeifja;s<br>ijf;lsak<del>asefasef</del>aa ~~~ memo gg</p>`,
    major: false,
  },
  {
    id: "Afhnjt4",
    title: "memo 155",
    date: "2022-01-09T22:20:00",
    color: "#4caf50",
    memo: `<p> yooo~~~~~~ 😁🤗memo gggg<br>gggggg<br>ggggㅎㅎㅎlkfa;ljdf;as;f;<br></p>
    <p>as;oeifja;s<br>ijf;lsak<del>asefasef</del>aa ~~~ memo gg</p>`,
    major: true,
  },
];

const initialState = {
  memoLists: initialMemos,
  sortedList: null,
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
