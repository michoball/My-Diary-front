import { useState } from "react";
import { BookmarkCheckFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { customLabelActions } from "../../features/customLabel/customLabelSlice";
import EventInput from "../eventInput/EventInput";
import {
  ListContainer,
  ListColor,
  ListItemContainer,
  DeleteBtn,
  ButtonContainer,
  ListInfoContainer,
} from "./CategoryList.styles";

import { Trash } from "react-bootstrap-icons";

const CategoryList = ({ lists }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  const openInputFormHandler = () => {
    dispatch(customLabelActions.selectLabel(lists.groupId));
    setIsOpenModal(!isOpenModal);
  };

  const deleteLabelHandler = () => {
    if (window.confirm("Are you sure? ")) {
      dispatch(customLabelActions.removeLabel(lists.groupId));
      setIsOpenModal(!isOpenModal);
    }
  };

  return (
    <>
      {isOpenModal && (
        <EventInput onConfirm={() => setIsOpenModal(!isOpenModal)} />
      )}
      <ListContainer>
        <ListItemContainer onClick={openInputFormHandler}>
          <ListColor>
            <BookmarkCheckFill color={lists.color} />
          </ListColor>
          <span>{lists.groupTitle}</span>

          <ListInfoContainer>
            <span>{lists.allDay && "종일"}</span>
            <span>{lists.daysOfWeek && "정기"}</span>
          </ListInfoContainer>
        </ListItemContainer>
        <ButtonContainer>
          <DeleteBtn>
            <Trash onClick={deleteLabelHandler} />
          </DeleteBtn>
        </ButtonContainer>
      </ListContainer>
    </>
  );
};

export default CategoryList;
