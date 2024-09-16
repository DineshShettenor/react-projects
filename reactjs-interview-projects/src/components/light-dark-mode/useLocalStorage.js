import React, { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(value);
  }, [key, value]);
  return [value, setValue];
};
