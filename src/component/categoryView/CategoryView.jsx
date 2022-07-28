import {
  CategoryViewContainer,
  ListContainer,
  CategoryAddBtn,
  ListWrapper,
  TitleContainer,
} from "./CategoryView.styles";
import { PlusCircle } from "react-bootstrap-icons";
import CategoryList from "../categoryList/CategoryList";
import { useSelector } from "react-redux";
import { selectCustomLabelLists } from "../../features/customLabel/customLabel.select";
import { useState } from "react";
import LabelAddForm from "../labelAdd/LabelAddForm";

const CategoryView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const labelLists = useSelector(selectCustomLabelLists);

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
          <h2>Categories</h2>
          <CategoryAddBtn onClick={AddLabelHandler}>
            <PlusCircle />
          </CategoryAddBtn>
        </TitleContainer>
        <ListWrapper>
          <ListContainer>
            {labelLists.map((lists) => {
              return <CategoryList key={lists.groupId} lists={lists} />;
            })}
          </ListContainer>
        </ListWrapper>
      </CategoryViewContainer>
    </>
  );
};

export default CategoryView;
