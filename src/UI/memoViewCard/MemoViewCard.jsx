import React from "react";
import {
  MemoViewContainer,
  MemoContainer,
  MemoHeader,
} from "./MemoViewCard.styles";

const MemoViewCard = React.forwardRef(
  ({ title, date, color, children, ...otherProps }, ref) => {
    return (
      <MemoViewContainer>
        <MemoHeader>
          <h1>{title}</h1>
          <span className="date">{date}</span>
        </MemoHeader>
        <MemoContainer bgcolors={color} ref={ref} {...otherProps} />
        {children}
      </MemoViewContainer>
    );
  }
);

export default MemoViewCard;
