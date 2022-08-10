import { useEffect, useRef, useState } from "react";
import { StarFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { memoActions } from "../../../features/memo/memoSlice";
import MemoPreView from "../memoPreView/MemoPreView";
import {
  MemoCardContainer,
  MemoContainer,
  MemoCardHeader,
} from "./MemoCard.styles";

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
        <MemoPreView onConfirm={() => setOpenMemoView(!openMemoView)} />
      )}
      <MemoCardContainer bgcolor={memoInfo.color} onClick={cardClickHandler}>
        <MemoCardHeader major={memoInfo.major}>
          <span>{memoInfo.title}</span>
          <StarFill />
        </MemoCardHeader>
        <MemoContainer ref={memoRef}></MemoContainer>
      </MemoCardContainer>
    </>
  );
}

export default MemoCard;
