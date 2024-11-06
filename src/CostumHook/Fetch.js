import { useEffect, useState } from "react";

const FetchData = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dataFetching = async () => {
    try {
      setLoading(true);
      const response = await fetch(url, { ...options });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dataFetching();
  }, [url]);

  return { data, loading, error };
};

export default FetchData;
