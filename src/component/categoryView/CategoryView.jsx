import {
  CategoryViewContainer,
  ListContainer,
  CategoryAddBtn,
  ListWrapper,
  TitleContainer,
} from "./CategoryView.styles";
import { PlusCircle } from "react-bootstrap-icons";
import CategoryList from "../categoryList/CategoryList";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import LabelAddForm from "../labelAdd/LabelAddForm";
import {
  selectlabelIsLoading,
  selectLabelLists,
} from "../../features/label/label.select";
import { getLabels } from "../../features/label/label.thunk";

import Loading from "../../UI/loading/Loading";

const CategoryView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const labelLists = useSelector(selectLabelLists);
  const labelIsLoading = useSelector(selectlabelIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLabels());
  }, [dispatch]);

  const AddLabelHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && (
        <LabelAddForm onConfirm={() => setIsModalOpen(!isModalOpen)} />
      )}
      <CategoryViewContainer>
        <TitleContainer>
          <h2>My labels</h2>
          <CategoryAddBtn onClick={AddLabelHandler}>
            <PlusCircle />
          </CategoryAddBtn>
        </TitleContainer>
        <ListWrapper>
          {labelIsLoading ? (
            <Loading />
          ) : (
            <ListContainer>
              {labelLists?.map((lists) => {
                return <CategoryList key={lists._id} lists={lists} />;
              })}
            </ListContainer>
          )}
        </ListWrapper>
      </CategoryViewContainer>
    </>
  );
};

export default CategoryView;
