import {useMemo} from 'react'

export const usePagination = (totalPosts, limit, posts, offset=0) => {
  const pages = useMemo(() => {
    const numbers = Math.ceil(totalPosts / limit);
    const listPages = [];
    if (offset === 0) {
      for (let i = 1; i <= numbers; i++) {
        listPages.push(i);
      }
      return listPages;
    } else {
      let resOffset = offset * 5 + 5;
      for (let i = resOffset; i < numbers; i++) {
        listPages.push(i);
      }
    }
  }, [posts]);

  return pages;
}
