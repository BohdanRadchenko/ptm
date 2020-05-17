import {useCallback, useState} from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = '/api/v1/users/'
  const request = useCallback(
      (access) => {
      //   setLoading(true);
      //   return access.map(async el => {
      //     const response = await fetch(url + el)
      //     const data = await response.json()
      //     return data.user
      //   })
      },
      []
  );

  const clearError = useCallback(() => setError(null), []);

  return {loading, request, error, clearError};
};
