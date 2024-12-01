import { useState, useEffect } from "react";
const useGetUsers = (url) => {
  const [getData, setGetData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const apiFunc = async () => {
      try {
        const apiURL = await fetch(url);
        if (!apiURL.ok) {
          throw new Error(`Error: Invalid URL`);
        }

        const response = await apiURL.json();
        setGetData(response);
      } catch (err) {
        setError(err.message);
      }
    };
    apiFunc();
  }, [url]);

  return { getData, error };
};

export default useGetUsers;
