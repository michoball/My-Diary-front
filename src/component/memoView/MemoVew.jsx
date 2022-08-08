import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMemo } from "../../features/memo/memo.select";
import { MemoContainer, MemoViewContainer } from "./MemoView.styles";
import { useParams } from "react-router-dom";
import { memoActions } from "../../features/memo/memoSlice";

function MemoView() {
  const params = useParams();
  const MemoViewRef = useRef();
  const selectedMemo = useSelector(selectMemo);
  const dispatch = useDispatch();

  useEffect(() => {
    const memoId = params.memoId;
    if (memoId) {
      dispatch(memoActions.selectMemo(memoId));
    }
  }, []);

  useEffect(() => {
    if (selectedMemo) {
      MemoViewRef.current.innerHTML = `${selectedMemo.memo}`;
    }
  }, [selectedMemo]);

  return (
    <MemoViewContainer>
      <MemoContainer bgcolors={selectedMemo.color} ref={MemoViewRef} />
    </MemoViewContainer>
  );
}

export default MemoView;
