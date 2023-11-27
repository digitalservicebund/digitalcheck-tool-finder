import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useStorage<Type>(
  key: string,
  defaultValue: Type,
): [Type, Dispatch<SetStateAction<Type>>] {
  const [data, setState]: [Type, Dispatch<SetStateAction<Type>>] =
    useState<Type>(getValueFromStorage() ?? defaultValue);

  function getValueFromStorage(): Type {
    return JSON.parse(localStorage.getItem(key) ?? "");
  }

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setState];
}
