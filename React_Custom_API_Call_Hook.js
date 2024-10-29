import { useState, useEffect } from "react";

// In-memory cache object
const cache = {};

const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Check if data is in cache
      if (cache[url]) {
        setData(cache[url]);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        // Save the result in cache
        cache[url] = result;

        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useApi;
