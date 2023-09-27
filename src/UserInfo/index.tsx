import React, { useState, memo, useEffect, FC } from "react";
import { TUser } from "./type";
import { useThrottle } from "@/Hooks/useThrottle";
import UserTable from "./UserTable";
import Button from "@/components/Button";
import "./style.css";

const UserInfo: FC = (): JSX.Element => {
  const [user, setUser] = useState<TUser>();
  const [id, setId] = useState<number>();
  const throttle = useThrottle<TUser>(1000);

  useEffect(() => {
    if (!id) return;
    (async () => {
      const path = `/users/`;
      const responseUser = await throttle(path, id);
      setUser(responseUser);
    })();
  }, [id]);

  const getUserClick = () => {
    const newId = Math.floor(Math.random() * (10 - 1)) + 1;
    setId(newId);
  };

  return (
    <div className="userInfo">
      <Button onClick={getUserClick}>get random user</Button>
      <UserTable name={user?.name} phone={user?.phone} />
    </div>
  );
};

export default memo(UserInfo);
