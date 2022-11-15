import { useMemo } from 'react'

export const usePost = (posts, searchText, isActiveSort) => {
  const filterPosts = useMemo(() => {
    if (searchText != "") {
      const newPosts = posts.filter((post) =>
        post.title.startsWith(searchText)
      );
      return newPosts;
    } else {
      return posts;
    }
  }, [searchText, posts]);

  const sortingAndFilteredPosts = useMemo(() => {
    if (isActiveSort === true) {
      const sortPosts = filterPosts
        .slice()
        .sort((post1, post2) => post1.title.localeCompare(post2.title));
      return sortPosts;
    } else if (isActiveSort === false) {
      return filterPosts;
    }
  }, [isActiveSort, filterPosts]);

  return sortingAndFilteredPosts
};


