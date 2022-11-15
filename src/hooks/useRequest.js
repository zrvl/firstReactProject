import { useState } from "react";


export const useRequest = (req) => {
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [error, setError] = useState(false);

  const request = async () => {
    try {
      await req()
    } catch (e) {
      setError(true)
    } finally {
      setTimeout(() => {
        setLoadingPosts(false); 
      }, 1500);
    }
  }

  return [request, loadingPosts, error];
}