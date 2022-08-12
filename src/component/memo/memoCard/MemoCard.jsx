import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { memoActions } from "../../../features/memo/memoSlice";
import MemoSmallCard from "../../../UI/memoSmallCard/MemoSmallCard";
import MemoPreView from "../memoPreView/MemoPreView";
import { MemoCardContainer } from "./MemoCard.styles";

function MemoCard({ memoInfo, disabled }) {
  const [openMemoView, setOpenMemoView] = useState(false);
  const memoRef = useRef("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (memoInfo.memo) {
      memoRef.current.innerHTML = `${
        memoInfo.memo.length > 80
          ? memoInfo.memo.slice(0, 80) + ` ...`
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

      <MemoCardContainer
        bgcolor={memoInfo.color}
        onClick={disabled ? null : cardClickHandler}
      >
        <MemoSmallCard
          major={memoInfo.major}
          title={memoInfo.title}
          ref={memoRef}
        />
      </MemoCardContainer>
    </>
  );
}

export default MemoCard;
