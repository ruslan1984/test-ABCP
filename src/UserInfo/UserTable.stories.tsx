import React from "react";
import UserTbl from "./UserTable";

export default {
  title: "UserTable",
};

export const UserTable = () => (
  <div className="userInfo">
    <UserTbl name={"Ruslan"} phone="+79196866411" />
  </div>
);
