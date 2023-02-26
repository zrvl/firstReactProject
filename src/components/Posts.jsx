import React, { useMemo } from 'react'
import { useEffect, useState} from 'react'
import { usePost } from '../hooks/usePost';
import PostAPI from '../API/PostAPI';
import Menu from '../components/Menu';
import PostsList from '../components/PostsList'
import AddingField from '../components/AddingField';
import Popup from './UI/Popup/Popup';
import AddPost from '../components/AddPost'
import Loader from './UI/Loader/Loader';
import EmptyPosts from './EmptyPosts';
import { useRequest } from '../hooks/useRequest';
import { usePagination } from '../hooks/usePagination';
import ButtonPrev from './UI/Pagination/ButtonPrev/ButtonPrev';
import ButtonNext from './UI/Pagination/ButtonNext/ButtonNext';

const Posts = () => {
  const [loadPosts, setLoadPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isActiveSort, setIsActiveSort] = useState(false);
  const [isActiveAddBtn, setIsActiveAddBtn] = useState(false);
  const [emptyPosts, setEmptyPosts] = useState(false);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState();
  let [offset, setOffset] = useState(0);
  const posts = usePost(loadPosts,searchText,isActiveSort);
  const pages = usePagination(totalPosts, limit, posts, offset);

  const [request,loadingPosts,error] = useRequest(async ()=>{
    const [response,totalPosts] = await PostAPI.getAll(limit, page)
    setLoadPosts(response)
    setTotalPosts(totalPosts);
  })
  
  useEffect(() => {
    request()
  },[])

  useEffect(() => {
    request();
  }, [page])

  useEffect(() => {
    if (posts.length === 0 && searchText === '' && error === false) {
      setEmptyPosts(true);
    } else {
      setEmptyPosts(false);
    }
  }, [posts,loadPosts,error])

  if (loadingPosts) {
    return <Loader/>
  } else { 
    return (
      <>
        <div className="post__page">
          <div>
            {
              emptyPosts ?
              <EmptyPosts/>
              :
              <>
                <Menu value={searchText} setSeacrhText={setSearchText} activeSort={isActiveSort} setActiveSort={setIsActiveSort} />
                <PostsList className="post__item" error={error} posts={posts} setPosts={setLoadPosts}/>
                <div className="list__pages">
                  <ButtonPrev offset={offset} setOffset={setOffset} />
                  {
                    pages.map(page => <span className="list__page" onClick={() => setPage(page)} key={page}>{page}</span>)
                  }
                  <ButtonNext posts={totalPosts} limit={limit} page={pages} offset={offset} setOffset={setOffset}/>
                </div>
              </>
            }
          </div>
          <AddingField activeAddBtn={isActiveAddBtn} setActiveBtn={setIsActiveAddBtn}/>
        </div>
          <Popup activeBtn={isActiveAddBtn} setActiveBtn={setIsActiveAddBtn}>
            <AddPost posts={posts} setPosts={setLoadPosts} setActiveBtn={setIsActiveAddBtn}/>
          </Popup>
      </>
    )
  }
}

export default Posts;
