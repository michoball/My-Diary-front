import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { memoActions } from "../../features/memo/memoSlice";
import { MemoCardContainer, MemoContainer } from "./MemoCard.styles";

function MemoCard({ memoInfo }) {
  // const [memoToText, setMemoToText] = useState();
  const memoRef = useRef("");
  const navigate = useNavigate();
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
    navigate(`/memo/${memoInfo.id}`);
  };

  return (
    <MemoCardContainer bgcolor={memoInfo.color} onClick={cardClickHandler}>
      <header>{memoInfo.title}</header>
      <MemoContainer ref={memoRef}></MemoContainer>
    </MemoCardContainer>
  );
}

export default MemoCard;
