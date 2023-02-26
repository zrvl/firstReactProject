import {useMemo} from 'react'

export const usePagination = (totalPosts, limit, posts, offset) => {
  const pages = useMemo(() => {
    const numbers = Math.ceil(totalPosts / limit);
    const listPages = [];
    if (offset === 0) {
      for (let i = 1; i <= limit; i++) {
        listPages.push(i);
      }
      return listPages;
    } else {
      let resOffset = offset * 5 + 5;
      let lastPage = resOffset + 5;
      for (let i = resOffset; i <= lastPage; i++) {
        listPages.push(i);
      }
      return listPages;
    }
  }, [posts, offset]);

  return pages;
}
