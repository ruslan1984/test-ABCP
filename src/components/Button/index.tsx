import React, { MouseEvent, memo } from "react";
import "./style.css";

interface IButton {
  children: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ onClick, children }: IButton): JSX.Element => (
  <button className="btn" type="button" onClick={onClick}>
    {children}
  </button>
);

export default memo(Button, (prev, cur) => prev.children === cur.children);
