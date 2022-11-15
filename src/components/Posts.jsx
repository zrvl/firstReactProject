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

//https://jsonplaceholder.typicode.com/posts?_limit=5

const Posts = () => {
  const [loadPosts, setLoadPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isActiveSort, setIsActiveSort] = useState(false);
  const [isActiveAddBtn, setIsActiveAddBtn] = useState(false);
  const [emptyPosts, setEmptyPosts] = useState(false);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState();
  const posts = usePost(loadPosts,searchText,isActiveSort);
  const pages = usePagination(totalPosts, limit, posts);

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
    if (posts.length === 0) {
      setEmptyPosts(true);
    } else {
      setEmptyPosts(false);
    }
  }, [posts,loadPosts])

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
                  {
                    pages.map(page => <span className="list__page" onClick={() => setPage(page)} key={page}>{page}</span>)
                  }
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


// Сделать Error страницы и страницу 404
// Сделать стрелочки для пагинации
// Пофиксить поиск постов
// Добавление срабатывает не в конец постов, а в конец открытой страницы
// Сделать чтобы при удалении всех 5 постов на какой то странице, уменьшалось к-во страниц и посты отображались по новому порядку
// Разобрать компонент COMMENTS, как реализовать нумерацию коментариев. (Работает но не понятно)
