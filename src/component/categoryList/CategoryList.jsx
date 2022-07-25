import { BookmarkCheckFill } from "react-bootstrap-icons";
import { ListContainer, ListColor } from "./CategoryList.styles";

const CategoryList = ({ lists }) => {
  return (
    <ListContainer>
      <ListColor>
        <BookmarkCheckFill color={lists.color} />
      </ListColor>
      <h3>{lists.groupId}</h3>
    </ListContainer>
  );
};

export default CategoryList;
