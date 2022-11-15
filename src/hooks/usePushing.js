

export const usePushing = (addText, setIsInputEmpty, setAddText, posts, setPosts, setActiveBtn) => {
  const pushingPost = () => {
    if (addText === '') {
      setIsInputEmpty(true);
      setTimeout(() => {
        setIsInputEmpty(false);
      },1000)
    } else {
      setAddText('');
      let lastItem = posts.length + 1;
      setPosts([...posts,{title:addText, id: lastItem}]);
      setActiveBtn(false);
    }
  }
  return pushingPost;
}