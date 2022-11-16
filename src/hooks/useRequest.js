import { useState } from "react";


export const useRequest = (req) => {
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [error, setError] = useState(false);

  const request = async () => {
    try {
      console.log(1)
      await req()
      console.log(3)
    } catch (e) {
      console.log(2)
      setError(true)
    } finally {
      setTimeout(() => {
        setLoadingPosts(false); 
      }, 1500);
    }
  }

  return [request, loadingPosts, error];
}