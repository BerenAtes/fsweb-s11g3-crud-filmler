import React, { useState } from "react";
import axios from "axios";

function useAxios(initialData) {
  const [responseData, setResponseData] = useState(initialData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const instance = axios.create({
    baseURL: "http://localhost:9000/api",
    timeout: 1000,
  });

  const startAxios = () => {
    instance
      .get("/movies")
      .then((res) => {
        setResponseData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return [responseData, startAxios];
}

export default useAxios;
