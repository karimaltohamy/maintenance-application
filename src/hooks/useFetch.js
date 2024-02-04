import React, { useEffect, useState } from "react";
import apiAxios from "../utils/apiAxios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await apiAxios.get(url);
        setData(data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  return { data, loading, error };
};

export default useFetch;
