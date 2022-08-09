import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { memoActions } from "../../../features/memo/memoSlice";
import MemoView from "../memoPreView/MemoPreView";
import { MemoCardContainer, MemoContainer } from "./MemoCard.styles";

function MemoCard({ memoInfo }) {
  const [openMemoView, setOpenMemoView] = useState(false);
  const memoRef = useRef("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (memoInfo.memo) {
      memoRef.current.innerHTML = `${
        memoInfo.memo.length > 30
          ? memoInfo.memo.slice(0, 30) + `<br>...`
          : memoInfo.memo
      }`;
    }
  }, [memoInfo]);

  const cardClickHandler = () => {
    dispatch(memoActions.selectMemo(memoInfo.id));
    setOpenMemoView(!openMemoView);
  };

  return (
    <>
      {openMemoView && (
        <MemoView onConfirm={() => setOpenMemoView(!openMemoView)} />
      )}
      <MemoCardContainer bgcolor={memoInfo.color} onClick={cardClickHandler}>
        <header>{memoInfo.title}</header>
        <MemoContainer ref={memoRef}></MemoContainer>
      </MemoCardContainer>
    </>
  );
}

export default MemoCard;
