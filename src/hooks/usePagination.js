import {useMemo} from 'react'

export const usePagination = (totalPosts, limit, posts) => {
  const pages = useMemo(() => {
    const numbers = Math.ceil(totalPosts / limit);
    const listPages = [];
    for (let i = 1; i <= numbers; i++) {
      listPages.push(i);
    }
    return listPages;
  }, [posts]);

  return pages;
}
