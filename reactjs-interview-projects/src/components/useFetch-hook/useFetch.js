import React, { useEffect, useState } from "react";

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setPending(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      console.log(result);
      setData(result.products);
      setPending(false);
      setError(null);
    } catch (error) {
      setPending(false);
      setError(`${error} - Some error occured`);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, pending, error };
};
