import { useState } from "react";
import { getCache, setCache } from "./cache";

export const useThrottle = <T>(ms: number = 200) => {
  const [state, setState] = useState<T>();
  const [block, setBlock] = useState(false);

  return async (path: string, id: number): Promise<T | undefined> => {
    if (!block) {
      setBlock(true);
      setTimeout(() => {
        setBlock(false);
      }, ms);
      const data = getCache<T>(id, path);
      if (!data) {
        const respnse = await fetch(
          `${process.env.REACT_APP_HOST_API}${path}${id}`
        );
        const value = (await respnse.json()) as T;
        setCache<T>(id, value, path);
        setState(value);
        return value;
      }
      setState(data);
      return data;
    }
    return state;
  };
};
