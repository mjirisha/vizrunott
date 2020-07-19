import { useState, useEffect } from 'react';
import fetchData from '../fetchData';

export const useQuery = (url) => {
  const [state, setState] = useState({
    data: null,
    error: null,
    loading: false,
  });

  useEffect(() => {
    const fetchInfo = async () => {
      setState({ data: null, error: null, loading: true });
      try {
        const data = await fetchData(url);

        setState({ data, error: null, loading: false });
      } catch (e) {
        setState({ data: null, error: e, loading: false });
      }
    };

    fetchInfo();
  }, []);

  return state;
};
