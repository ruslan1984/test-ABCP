import React, { FC, memo } from "react";

interface IUserTable {
  name?: string;
  phone?: string;
}

const UserTable: FC<IUserTable> = ({
  name,
  phone,
}: IUserTable): JSX.Element => (
  <div className="userTable">
    <div>Username</div>
    <div>Phone number</div>
    <div>{name || "No Name"}</div>
    <div>{phone || "No Phone"}</div>
  </div>
);

export default memo(UserTable);
