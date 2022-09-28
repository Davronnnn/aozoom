import React, { useEffect, useState } from "react";
import Axios from "../utils/axios";

export default function useFetchHook(url) {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await Axios.get(url);
      const { status, data } = res;
      if (status === 200) {
        setState(data);
        setLoading(false)
      }
    } catch (error) {setLoading(false);}
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return [state, loading];
}
