import { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { memoActions } from "../../../features/memo/memoSlice";

import MemoPreView from "../memoPreView/MemoPreView";
import {
  MajorMemoCardContainer,
  MemoContentContainer,
} from "./MajorMemoCard.styles";

function MajorMemo({ memo }) {
  const [openMemoView, setOpenMemoView] = useState(false);
  const dispatch = useDispatch();
  const memoRef = useRef("");

  useEffect(() => {
    if (memo.memo) {
      memoRef.current.innerHTML = `${memo.memo.slice(0, 10) + `  ...`}`;
    }
  }, [memo]);

  const cardClickHandler = () => {
    dispatch(memoActions.selectMemo(memo.id));
    setOpenMemoView(!openMemoView);
  };

  return (
    <>
      {openMemoView && (
        <MemoPreView onConfirm={() => setOpenMemoView(!openMemoView)} />
      )}
      <MajorMemoCardContainer bgcolor={memo.color} onClick={cardClickHandler}>
        <h5>{memo.title}</h5>
        <MemoContentContainer ref={memoRef}></MemoContentContainer>
      </MajorMemoCardContainer>
    </>
  );
}

export default MajorMemo;
