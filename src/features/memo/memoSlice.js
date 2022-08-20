import { createSlice } from "@reduxjs/toolkit";
import { createMemos, deleteMemo, getMemos, updateMemo } from "./memo.thunk";

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
    // // 밑의 extraReducers 를 등록하지 않으면 close 버튼을 누르고 /tickets 페이지로 넘어간 후 다시 reload를 해야 status가 바뀐다
    // // 이런 번거러움 없이 바로  status 가 반영되게 하기 위해서 하는 extralReducers임
    // .addCase(updateMemo.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.tickets.map((ticket) =>
    //     ticket._id === action.payload._id
    //       ? (ticket.status = "closed")
    //       : ticket
    //   );
    // });
  },
});

export const { setSelectMemo, clearSelectMemo, memoReset } = MemoSlice.actions;

export default MemoSlice.reducer;
